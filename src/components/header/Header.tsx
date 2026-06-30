import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import style from "./header.module.css";

// importo le immagini: Vite le converte in un percorso valido per <img src>
import logoIntesys from "./assets/svgexport-1 1.svg";
import gridIcon from "./assets/Union.svg";
import chevronIcon from "./assets/svgexport-2.svg";
import avatar from "./assets/Ellipse 4.svg";

function Header() {
  // stato aperto/chiuso dei due menu (partono chiusi)
  const [appMenuAperto, setAppMenuAperto] = useState(false);
  const [profiloAperto, setProfiloAperto] = useState(false);

  // riferimenti ai due blocchi, mi servono per capire se clicco dentro o fuori
  const appMenuRef = useRef<HTMLDivElement>(null);
  const profiloRef = useRef<HTMLDivElement>(null);

  // se clicco fuori da un menu, lo chiudo
  useEffect(() => {
    function handleClickFuori(e: MouseEvent) {
      // .contains controlla se il punto cliccato sta dentro al blocco; se no, chiudo
      if (appMenuRef.current && !appMenuRef.current.contains(e.target as Node)) {
        setAppMenuAperto(false);
      }
      if (profiloRef.current && !profiloRef.current.contains(e.target as Node)) {
        setProfiloAperto(false);
      }
    }
    document.addEventListener("mousedown", handleClickFuori);
    // tolgo l'ascolto quando il componente sparisce, così non resta appeso
    return () => document.removeEventListener("mousedown", handleClickFuori);
  }, []); // [] = lo faccio solo una volta all'inizio

  return (
    <header className={style.header}>
      {/* logo + sottotitolo, cliccabile verso la home */}
      <Link to="/" className={style.logo}>
        <img src={logoIntesys} alt="Intesys" className={style.logoImg} />
        <span className={style.logoSottotitolo}>Controllo gestione</span>
      </Link>

      {/* parte destra: griglia + avatar */}
      <div className={style.azioni}>
        {/* menu griglia. il ref serve per il "click fuori" qui sopra */}
        <div className={style.dropdownWrap} ref={appMenuRef}>
          <button
            className={style.bottoneIcona}
            onClick={() => {
              setAppMenuAperto((v) => !v); // !v = inverto: se era aperto chiudo e viceversa
              setProfiloAperto(false);     // chiudo l'altro menu
            }}
            aria-label="Apri menu applicazioni" // descrizione per screen reader
            aria-expanded={appMenuAperto}
          >
            <img src={gridIcon} alt="" className={style.iconaGriglia} />
          </button>

          {/* il menu appare solo se appMenuAperto è true */}
          {appMenuAperto && (
            <div className={style.dropdown}>
              {/* per ora sono solo bottoni, onClick vuoto: ci pensiamo dopo */}
              <button type="button" className={style.voce} onClick={() => {}}>
                Progetti
              </button>
              <button type="button" className={style.voce} onClick={() => {}}>
                Aggiungi Nuovo Progetto
              </button>
            </div>
          )}
        </div>

        {/* menu profilo, stessa struttura del menu griglia */}
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
            {/* unisco due classi: la freccia base + quella che la gira quando è aperto */}
            <img
              src={chevronIcon}
              alt=""
              className={`${style.chevron} ${profiloAperto ? style.chevronAperto : ""}`}
            />
          </button>

          {profiloAperto && (
            // dropdownDestra serve per allinearlo a destra invece che a sinistra
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

// esporto il componente per usarlo nelle altre pagine
export default Header;