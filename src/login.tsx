import { useState } from "react";
import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Button from "./components/Button";
import TextField from "./components/TextField";
import "./login.css";

const loginSchema = z.object({
  username: z
    .string()
    .min(3, "Username deve avere almeno 3 caratteri")
    .max(25, "Username troppo lungo")
    .regex(/^[a-zA-Z0-9_]+$/, "Solo lettere, numeri e underscore"),
  password: z
    .string()
    .min(6, "Password deve avere almeno 6 caratteri")
    .max(50, "Password troppo lunga")
    // .regex(/[A-Z]/, "Serve almeno una maiuscola")
    // .regex(/[a-z]/, "Serve almeno una minuscola")
    // .regex(/[0-9]/, "Serve almeno un numero")
    // .regex(/[!@#$%^&*]/, "Serve almeno un carattere speciale"),
});

function Login({
  setIsAuthenticated,
}: {
  setIsAuthenticated: (value: boolean) => void;
}) {
  const [apiError, setApiError] = useState<string | null>(null);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: toFormikValidationSchema(loginSchema),
    // async serve per fare la fetch e aspettare il server
    onSubmit: async (values) => {
      setApiError(null); // cancello il vecchio errore

      try {
        // chiamata post a dummyjson
        const response = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // trasformo i dati in json per il body
          body: JSON.stringify({
            username: values.username,
            password: values.password,
          }),
        });

        // se la risposta non e ok lancio un errore
        if (!response.ok) {
          throw new Error("Credenziali non valide");
        }

        // prendo i dati con il token
        const data = await response.json();
        
        // salvo il token nel localstorage
        localStorage.setItem("token", data.accessToken);
        
        // dico alla app che siamo loggati
        setIsAuthenticated(true);
      } catch (error) {
        // se va male stampo errore e cambio lo stato
        console.error("Errore durante il login:", error);
        setApiError("Username o password errati. Riprova.");
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
          {/* se ce un errore lo mostro a schermo */}
          {apiError && (
            <div style={{ color: 'red', marginBottom: '15px', fontSize: '14px' }}>
              {apiError}
            </div>
          )}
          
          {/* blocco il bottone se sta caricando */}
          <Button type="submit" disabled={formik.isSubmitting}>
            {formik.isSubmitting ? "Accesso in corso..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
