import { useFormik } from "formik";
import { z } from "zod";
import TextField from "../components/TextField";
import { Button } from "../components/button/Button";
import "../addNewProject.moduel.css";
import Header from "../components/header/Header";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { useApi } from "../contexts/useApi";
import { ProjectStatusEnum } from "../api";

const add_new_project_schema = z.object({
  date: z
    .string()
    .min(1, "La data è obbligatoria")
    .refine(
      (val) => new Date(val) <= new Date(),
      "La data non può essere futura",
    ),
  title: z
    .string()
    .min(3, "Titolo deve avere almeno 3 caratteri")
    .max(50, "Titolo troppo lungo"),
  ore: z
    .string()
    .regex(/^[0-9]+$/, "Ore totali deve essere un numero valido")
    .min(1, "Ore totali deve essere almeno 1")
    .max(1000, "Ore totali non può superare 1000"),
  percentage: z
    .string()
    .regex(/^[0-9]+$/, "Completamento deve essere un numero valido")
    .min(0, "Completamento deve essere almeno 0%")
    .max(100, "Completamento non può superare 100%"),
});

type AddProjectValues = z.infer<typeof add_new_project_schema>;

function AddNewProject() {
  const navigate = useNavigate();
  const { projectApi } = useApi();

  const createMutation = useMutation({
    mutationFn: (values: AddProjectValues) =>
      projectApi.createProject({
        project: {
          // ⚠️ MAPPATURA DA CONFERMARE COL TEAM (form -> backend)
          title: values.title,
          estimatedHours: Number(values.ore),
          startDate: new Date(values.date),
          endDate: new Date(values.date),
          status: ProjectStatusEnum.Created,
          // 'percentage' del form non esiste lato backend: scartato
        },
      }),
    onSuccess: () => {
      navigate("/");
    },
    onError: (error: Error) => {
      console.error("Errore creazione progetto:", error);
    },
  });

  const formik = useFormik({
    initialValues: {
      date: "",
      title: "",
      ore: "",
      percentage: "",
    },
    validate: (values) => {
      const result = add_new_project_schema.safeParse(values);
      if (result.success) return {};
      const errors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as string;
        if (path && !errors[path]) {
          errors[path] = issue.message;
        }
      });
      return errors;
    },
    onSubmit: (values) => {
      createMutation.mutate(values);
    },
  });

  return (
    <div className="add-new-project-page">
      <Header />
      <div className="add-new-project-container">
        <h2>Aggiungi Nuovo Progetto</h2>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            type="date"
            name="date"
            placeholder="Date"
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.date && formik.errors.date}
          />
          <TextField
            type="text"
            name="title"
            placeholder="Titolo"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.title && formik.errors.title}
          />
          <TextField
            type="text"
            name="ore"
            placeholder="ore"
            value={formik.values.ore}
            onChange={(e) => {
              let value = e.target.value.replace(/[^0-9]/g, "");
              if (value !== "") {
                const num1 = parseInt(value, 10);
                if (num1 > 1000) {
                  value = "1000";
                }
              }
              e.target.value = value;
              formik.handleChange(e);
            }}
            onBlur={formik.handleBlur}
            error={formik.touched.ore && formik.errors.ore}
          />
          <TextField
            type="text"
            name="percentage"
            placeholder="Completamento"
            value={formik.values.percentage}
            onChange={(e) => {
              let value = e.target.value.replace(/[^0-9]/g, "");
              if (value !== "") {
                const num = parseInt(value, 10);
                if (num > 100) {
                  value = "100";
                }
              }
              e.target.value = value;
              formik.handleChange(e);
            }}
            onBlur={formik.handleBlur}
            error={formik.touched.percentage && formik.errors.percentage}
          />
          <Button type="submit" disabled={createMutation.isPending}>
            {createMutation.isPending ? "Salvataggio..." : "Aggiungi"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AddNewProject;