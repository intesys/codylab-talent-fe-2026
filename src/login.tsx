import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import "./Login.css";


const loginSchema = z.object({
  username: z
    .string()
    .min(5, "Username deve avere almeno 5 caratteri")
    .max(25, "Username troppo lungo"),
  password: z
    .string()
    .min(8, "Password deve avere almeno 8 caratteri")
    .regex(/[0-9]/, "Password deve contenere almeno un numero")
    .regex(/[£!@#$%^&*()-+]/, "Password deve contenere almeno un carattere speciale")
    .regex(/[A-Z]/, "Password deve contenere almeno una maiuscola"),
});

function Login() {
  
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: toFormikValidationSchema(loginSchema),
    onSubmit: (values) => {
      console.log("Login:", values);

    },
  });

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Intesys Gestione Progetti</h2>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username && (
            <p className="error">{formik.errors.username}</p>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="error">{formik.errors.password}</p>
          )}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
