import { useState } from "react";
import style from "./header.module.css";
import { Link } from "react-router";

function Header() {
  const [menuAperto, setMenuAperto] = useState(false);

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Link to="/">
          <h1>Intesys Gestione Progetto</h1>
        </Link>
      </div>

      <button
        className={style.bottoneMenu}
        onClick={() => setMenuAperto(!menuAperto)}
      >
        {menuAperto ? "✕" : "☰"}{" "}
      </button>

      <nav className={`${style.nav} ${menuAperto ? style.aperto : ""}`}>
        <ul className={style.menu}>
          <li>
            <Link to="/add-new-project" onClick={() => setMenuAperto(false)}>
              Aggiungi Nuovo Progetto
            </Link>
          </li>
          <li>
            <Link to="/progetti" onClick={() => setMenuAperto(false)}>
              Progetti
            </Link>
          </li>
          <li>
            <Link to="/profilo" onClick={() => setMenuAperto(false)}>
              Profilo
            </Link>
          </li>
          <li>
              <Link to="/" onClick={() => { localStorage.removeItem("auth_token"); setMenuAperto(false); }}>
                  Logout
              </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
