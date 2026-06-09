import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useNavigate } from "react-router";
import TextField from "./components/TextField";
import Button from "./components/Button";
import "./login.css";

const loginSchema = z.object({
  username: z
    .string()
    .min(5, "Username deve avere almeno 5 caratteri")
    .max(25, "Username troppo lungo")
    .regex(/^[a-zA-Z0-9_]+$/, "Solo lettere, numeri e underscore"),
  password: z
    .string()
    .min(8, "Password deve avere almeno 8 caratteri")
    .max(50, "Password troppo lunga")
    .regex(/[A-Z]/, "Serve almeno una maiuscola")
    .regex(/[a-z]/, "Serve almeno una minuscola")
    .regex(/[0-9]/, "Serve almeno un numero")
    .regex(/[!@#$%^&*]/, "Serve almeno un carattere speciale"),
});

function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: toFormikValidationSchema(loginSchema),
    onSubmit: (values) => {
      console.log("Login:", values);
      navigate("/progetti");
    },
  });

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Intesys Gestione Progetti</h2>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            type="text"
            name="username"
            placeholder="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && formik.errors.username}
          />
          <TextField
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password}
          />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
