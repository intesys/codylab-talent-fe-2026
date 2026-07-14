import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Button } from "./components/button/Button";
import TextField from "./components/TextField";
import style from "./login.module.css";
import { ACCESS_TOKEN_KEY } from "./consts";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";

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
});

type LoginFormValues = z.infer<typeof loginSchema>;

function Login({
  setIsAuthenticated,
}: {
  setIsAuthenticated: (value: boolean) => void;
}) {
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: async (values: LoginFormValues) =>
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }),
    onSuccess: async (data) => {
      const responseData = await data.json();
      if (responseData.accessToken) {
        localStorage.setItem(ACCESS_TOKEN_KEY, responseData.accessToken);
        setIsAuthenticated(true);
        navigate("/");
      }
    },
    onError: (error) => {
      console.error("Login mutation error:", error);
    },
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: toFormikValidationSchema(loginSchema),
    onSubmit: (values) => {
      loginMutation.mutate(values);
    },
  });

  return (
    <div className={style["login-page"]}>
      <div className={style["login-box"]}>
        <h2 className={style["login-title"]}>Intesys Gestione Progetti</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className={style["input-field"]}>
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
          </div>

          {loginMutation.isError && (
            <div className={style["error"]}>
              {loginMutation.error instanceof Error
                ? loginMutation.error.message
                : "Errore durante il login"}
            </div>
          )}

          <div className={style["button-container"]}>
            <Button
              type="submit"
              className={style["button"]}
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? "Caricamento..." : "Login"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
