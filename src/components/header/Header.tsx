import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import style from "./header.module.css";

import logoIntesys from "./assets/svgexport-1 1.svg";
import gridIcon from "./assets/Union.svg";
import chevronIcon from "./assets/svgexport-2.svg";
import avatar from "./assets/Ellipse 4.svg";

function Header() {
  const [appMenuAperto, setAppMenuAperto] = useState(false);
  const [profiloAperto, setProfiloAperto] = useState(false);

  const appMenuRef = useRef<HTMLDivElement>(null);
  const profiloRef = useRef<HTMLDivElement>(null);

  // chiude i menu se clicco fuori
  useEffect(() => {
    function handleClickFuori(e: MouseEvent) {
      if (appMenuRef.current && !appMenuRef.current.contains(e.target as Node)) {
        setAppMenuAperto(false);
      }
      if (profiloRef.current && !profiloRef.current.contains(e.target as Node)) {
        setProfiloAperto(false);
      }
    }
    document.addEventListener("mousedown", handleClickFuori);
    return () => document.removeEventListener("mousedown", handleClickFuori);
  }, []);

  return (
    <header className={style.header}>
      {/* logo */}
      <Link to="/" className={style.logo}>
        <img src={logoIntesys} alt="Intesys" className={style.logoImg} />
        <span className={style.logoSottotitolo}>Controllo gestione</span>
      </Link>

      {/* parte destra */}
      <div className={style.azioni}>
        {/* icona griglia */}
        <div className={style.dropdownWrap} ref={appMenuRef}>
          <button
            className={style.bottoneIcona}
            onClick={() => {
              setAppMenuAperto((v) => !v);
              setProfiloAperto(false);
            }}
            aria-label="Apri menu applicazioni"
            aria-expanded={appMenuAperto}
          >
            <img src={gridIcon} alt="" className={style.iconaGriglia} />
          </button>

          {appMenuAperto && (
            <div className={style.dropdown}>
              {/* per ora sono solo bottoni, non fanno niente */}
              <button type="button" className={style.voce} onClick={() => {}}>
                Progetti
              </button>
              <button type="button" className={style.voce} onClick={() => {}}>
                Aggiungi Nuovo Progetto
              </button>
            </div>
          )}
        </div>

        {/* avatar + freccia */}
        <div className={style.dropdownWrap} ref={profiloRef}>
          <button
            className={style.bottoneProfilo}
            onClick={() => {
              setProfiloAperto((v) => !v);
              setAppMenuAperto(false);
            }}
            aria-label="Apri menu profilo"
            aria-expanded={profiloAperto}
          >
            <img src={avatar} alt="Profilo" className={style.avatar} />
            <img
              src={chevronIcon}
              alt=""
              className={`${style.chevron} ${profiloAperto ? style.chevronAperto : ""}`}
            />
          </button>

          {profiloAperto && (
            <div className={`${style.dropdown} ${style.dropdownDestra}`}>
              <button type="button" className={style.voce} onClick={() => {}}>
                Profilo
              </button>
              <button type="button" className={style.voce} onClick={() => {}}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;