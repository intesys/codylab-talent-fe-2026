import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Button from "./components/Button";
import TextField from "./components/TextField/TextField";
import style from "./login.module.css";
import { useState } from "react";
import { ACCESS_TOKEN_KEY } from "./consts";

const loginSchema = z.object({
  username: z
    .string()
    .min(5, "Username deve avere almeno 5 caratteri")
    .max(25, "Username troppo lungo")
    .regex(/^[a-zA-Z0-9_]+$/, "Solo lettere, numeri e underscore"),
  password: z
    .string()
    .min(8, "Password deve avere almeno 8 caratteri")
    .max(50, "Password troppo lunga"),
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
  const [serverSideError, setServerSideError] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: toFormikValidationSchema(loginSchema),
    onSubmit: async (values) => {
      try {
        const result = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const responseBody = await result.json();

        if (!result.ok) {
          const errorMessage =
            responseBody.message || "Qualcosa è andato storto durante il login";
          setServerSideError(errorMessage);
          throw new Error(errorMessage);
        }

        if (responseBody.accessToken) {
          localStorage.setItem(ACCESS_TOKEN_KEY, responseBody.accessToken);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className={style["login-page"]}>
      <div className={style["login-box"]}>
        <h2 className={style["login-title"]}>Intesys Gestione Progetti</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className={style["input-container"]}>
            <TextField
              label="Username"
              type="text"
              name="username"
              //placeholder="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && formik.errors.username}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              // placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && formik.errors.password}
            />
          </div>
          {serverSideError && (
            <div className={style["error"]}>{serverSideError}</div>
          )}
          <div className={style["button-container"]}>
            <Button type="submit" className={style["button"]}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
