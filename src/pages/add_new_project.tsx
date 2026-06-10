import { useFormik } from "formik";
import TextField from "../components/TextField";
import Button from "../components/Button";
import "../add_new_project.css";
import Header from "../components/header/Header";

function AddNewProject() {
  const formik = useFormik({
    initialValues: {
      date: "",
      titolo: "",
      ore_totali: "",
      completamento: "",
      id: Date.now(),
    },
    onSubmit: (values, { resetForm }) => {
      const localData = localStorage.getItem("progetti");
      let listaAggiornata = [];
      if (localData) {
        listaAggiornata = JSON.parse(localData);
      }

      const nuovoProgetto = {
        date: values.date,
        title: values.titolo,
        ore: values.ore_totali,
        percentage: values.completamento,
        id: Date.now(),
      };

      listaAggiornata.push(nuovoProgetto);
      localStorage.setItem("progetti", JSON.stringify(listaAggiornata));

      alert("Progetto aggiunto con successo!");
      resetForm();
    },
  });

  return (
    <div className="add-new-project-page">
      <Header />
      <div className="add-new-project-container">
        <h2>Aggiungi Nuovo Progetto</h2>
        <form onSubmit={formik.handleSubmit}>
          {/* data */}
          <TextField
            type="date"
            name="date"
            placeholder="Date"
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.date && formik.errors.date}
          />
          {/* titolo */}
          <TextField
            type="text"
            name="titolo"
            placeholder="Titolo"
            value={formik.values.titolo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.titolo && formik.errors.titolo}
          />
          {/* ore totali */}
          <TextField
            type="number"
            name="ore_totali"
            placeholder="Ore Totali"
            value={formik.values.ore_totali}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.ore_totali && formik.errors.ore_totali}
          />
          {/* completamento */}
          <TextField
            type="number"
            min="0"
            max="100"
            name="completamento"
            placeholder="Completamento"
            value={formik.values.completamento}
            onChange={(e) => {
              e.target.value = Math.min(100, Number(e.target.value)).toString();
              formik.handleChange(e);
            }}
            onBlur={formik.handleBlur}
            error={formik.touched.completamento && formik.errors.completamento}
          />

          <Button type="submit">Aggiungi</Button>
        </form>
      </div>
    </div>
  );
}

export default AddNewProject;
