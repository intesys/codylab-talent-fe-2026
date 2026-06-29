import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Button from "./components/Button";
import TextField from "./components/TextField";
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
//    .regex(/[A-Z]/, "Serve almeno una maiuscola")
//    .regex(/[a-z]/, "Serve almeno una minuscola")
//    .regex(/[0-9]/, "Serve almeno un numero")
//    .regex(/[!@#$%^&*]/, "Serve almeno un carattere speciale"),
});

function Login({
  setIsAuthenticated,
}: {
  setIsAuthenticated: (value: boolean) => void;
}) {

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: toFormikValidationSchema(loginSchema),
    onSubmit: async (values) => {
      try {
        //chiama il posto con gli username e le password, devi mettere per forza una combinazione che c'è qui dentro
        const response = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: values.username,
            password: values.password,
          }),
        });

        if (!response.ok) {
          // Gestisce l'errore se le credenziali sono errate
          const errorData = await response.json();
          throw new Error(errorData.message || "Errore durante il login");
        }

        const data = await response.json();

        // Memorizza accessToken
        localStorage.setItem("accessToken", data.accessToken);

        // Aggiorna lo stato di autenticazione
        setIsAuthenticated(true);

      } catch (error) {
        console.error("Login failed:", error);
        // Gestione base dell'errore
        alert("Username o password errati. Riprova.");
      }
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



/* password valide che ho trovato:
emilys	emilyspass
michaelw	michaelwpass
sophiab	sophiabpass
 */