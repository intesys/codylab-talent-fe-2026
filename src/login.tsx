import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Button from "./components/Button";
import TextField from "./components/TextField";
import "./login.css";

// Adattato lo schema per accettare gli utenti di test di DummyJSON (es: username "emilys", password "emilyspass")
const loginSchema = z.object({
  username: z
    .string()
    .min(3, "Username troppo corto")
    .max(25, "Username troppo lungo"),
  password: z
    .string()
    .min(4, "Password troppo corta")
    .max(50, "Password troppo lunga"),
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
        // 1. Invia la richiesta HTTP POST all'endpoint di autenticazione di DummyJSON
        const response = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: values.username,
            password: values.password,
            expiresInMins: 30, // Opzionale: tempo di scadenza del token
          }),
        });

        // 2. Se la risposta non è andata a buon fine (es: credenziali errate)
        if (!response.ok) {
          throw new Error("Credenziali non valide");
        }

        // 3. Converte la risposta in formato JSON
        const data = await response.json();

        // 4. Memorizza l'accessToken reale restituito dal server nel localStorage
        localStorage.setItem("token", data.accessToken);
        
        // 5. Aggiorna lo stato globale per autenticare l'utente
        setIsAuthenticated(true);
        
        console.log("Login effettuato con successo! Dati utente:", data);
      } catch (error) {
        console.error("Errore durante il login:", error);
        alert("Errore durante il login. Controlla il tuo username e la tua password.");
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
