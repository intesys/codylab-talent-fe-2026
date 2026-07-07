import { Link } from "react-router";
import { Typography } from "./typography/Typography";
import style from "./header.module.css";

import logoIntesys from "./assets/svgexport-1 1.svg";
import gridIcon from "./assets/Union.svg";
import avatar from "./assets/Ellipse 4.svg";

function Header() {
  return (
    <header className={style.header}>
      {/* SINISTRA: logo + sottotitolo */}
      <div className={style.left}>
        <Link to="/">
          <img src={logoIntesys} alt="Intesys" width={114} height={30} />
        </Link>
        <Typography variant="subtitle">Gestione Progetto</Typography>
      </div>

      {/* DESTRA: icone */}
      <div className={style.right}>
        <img src={gridIcon} alt="Menu" width={24} height={24} />
        <img
          src={avatar}
          alt="Profilo"
          width={38}
          height={38}
          style={{ borderRadius: "50%", border: "2px solid #000000" }}
        />
      </div>
    </header>
  );
}

export default Header;