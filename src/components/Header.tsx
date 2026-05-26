import style from "./header.module.css";
import { Link } from "react-router";

function Header() {
  return (
    <div className={style.header}>
      <header>
        <div className={style.logo}>
          <h1>Intesys Gestione Progetto</h1>
        </div>

        <nav>
          <ul className={style.menu}>
            <li>
              <Link to="/progetti">Progetti</Link>
            </li>
            <li>
              <Link to="/profilo">Profilo</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
