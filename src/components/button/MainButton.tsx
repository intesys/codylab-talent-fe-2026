// MainButton.tsx
import styles from './mainButton.module.css';
import { useState } from 'react'; 


// Pulsante 1: Aggiungi
export function AddCircleButton() {
  return (
    <button className={`${styles.iconButton} ${styles.filledPrimary}`} type="button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none">
        <path d="M7.66667 11H14.3333M11 7.66667V14.3333M1 11C1 12.3132 1.25866 13.6136 1.7612 14.8268C2.26375 16.0401 3.00035 17.1425 3.92893 18.0711C4.85752 18.9997 5.95991 19.7363 7.17317 20.2388C8.38642 20.7413 9.68678 21 11 21C12.3132 21 13.6136 20.7413 14.8268 20.2388C16.0401 19.7363 17.1425 18.9997 18.0711 18.0711C18.9997 17.1425 19.7363 16.0401 20.2388 14.8268C20.7413 13.6136 21 12.3132 21 11C21 8.34784 19.9464 5.8043 18.0711 3.92893C16.1957 2.05357 13.6522 1 11 1C8.34784 1 5.8043 2.05357 3.92893 3.92893C2.05357 5.8043 1 8.34784 1 11Z" stroke="#E9ECEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

// Pulsante 2: Cestino
export function DeleteButton() {
  return (
    <button className={`${styles.iconButton} ${styles.outlinePrimary}`} type="button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
        <path 
          d="M3.33325 5.83333H16.6666M4.16659 5.83333L4.99992 15.8333C4.99992 16.2754 5.17551 16.6993 5.48807 17.0118C5.80063 17.3244 6.22456 17.5 6.66659 17.5H13.3333C13.7753 17.5 14.1992 17.3244 14.5118 17.0118C14.8243 16.6993 14.9999 16.2754 14.9999 15.8333L15.8333 5.83333M7.49992 5.83333V3.33333C7.49992 3.11232 7.58772 2.90036 7.744 2.74408C7.90028 2.5878 8.11224 2.5 8.33325 2.5H11.6666C11.8876 2.5 12.0996 2.5878 12.2558 2.74408C12.4121 2.90036 12.4999 3.11232 12.4999 3.33333V5.83333M8.33325 10L11.6666 13.3333M11.6666 10L8.33325 13.3333" 
          stroke="#0F33CE" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

// Componente Isolato: Icona Filtro
export function FilterIconBtn() {
  return (
    <button className={styles.filterIconAbsolute} type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <g clipPath="url(#clip0_6806_4389)">
          <path 
            d="M15 3H3V4.67025C3.00004 5.0433 3.13909 5.40294 3.39 5.679L6.75 9.375V15.75L11.25 14.25V9L14.5605 5.6895C14.8418 5.40826 14.9999 5.02679 15 4.629V3Z" 
            stroke="#0F33CE" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_6806_4389">
            <rect width="18" height="18" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

// Componente Strutturale: Blocco Completo del Filtro della Tabella
export function ProjectFilterBlock() {
  return (
    <div className={styles.filterMainGroup}>
      {/* Texto do Título */}
      <span className={styles.filterLabel}>Progetto</span>
      
      {/* Icona Filtro in Absolute (Accanto a Progetto con right: 11px) */}
      <FilterIconBtn />

      {/* Selettore / Box di Selezione */}
      <div className={styles.filterSelectField}>
        Tutti i progetti
        
        {/* Icona Frecce (Selector) */}
        <div className={styles.selectorIconAbsolute}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8.47136 2.86193C8.21101 2.60158 7.7889 2.60158 7.52855 2.86193L4.86189 5.5286C4.60154 5.78895 4.60154 6.21106 4.86189 6.47141C5.12224 6.73176 5.54435 6.73176 5.8047 6.47141L7.99996 4.27615L10.1952 6.47141C10.4556 6.73176 10.8777 6.73176 11.138 6.47141C11.3984 6.21106 11.3984 5.78895 11.138 5.5286L8.47136 2.86193Z" fill="#868E96"/>
            <path d="M5.8047 9.5286C5.54435 9.26825 5.12224 9.26825 4.86189 9.5286C4.60154 9.78895 4.60154 10.2111 4.86189 10.4714L7.52855 13.1381C7.7889 13.3984 8.21101 13.3984 8.47136 13.1381L11.138 10.4714C11.3984 10.2111 11.3984 9.78895 11.138 9.5286C10.8777 9.26825 10.4556 9.26825 10.1952 9.5286L7.99996 11.7239L5.8047 9.5286Z" fill="#868E96"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

// Componente: Pulsante Visualizza Dettaglio
export function VisualizzaDettaglioButton() {
  return (
    <button className={styles.detailsButtonPrimary} type="button">
      Visualizza Dettaglio
    </button>
  );
}

// Componente: Pulsante Applica
export function ApplicaButton() {
  return (
    <button className={styles.outlineTextButton} type="button">
      Applica
    </button>
  );
}



export function ViewSegmentedControl() {
  // Stato per controllare quale tab è attiva ('table' o 'chart')
  const [activeTab, setActiveTab] = useState<'table' | 'chart'>('table');

  return (
    <div className={styles.segmentedControlContainer}>
      {/* Pulsante Tabella (Table 1) */}
      <button 
        type="button"
        className={`${styles.segmentButton} ${activeTab === 'table' ? styles.segmentButtonActive : ''}`}
        onClick={() => setActiveTab('table')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <g clipPath="url(#clip0_6831_5671)">
            <path 
              d="M2.25 3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H14.25C14.6478 2.25 15.0294 2.40804 15.3107 2.68934C15.592 2.97064 15.75 3.35218 15.75 3.75V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75Z" 
              stroke={activeTab === 'table' ? "#0F33CE" : "#495057"} 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path d="M2.25 7.5H15.75" stroke={activeTab === 'table' ? "#0F33CE" : "#495057"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.5 2.25V15.75" stroke={activeTab === 'table' ? "#0F33CE" : "#495057"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_6831_5671">
              <rect width="18" height="18" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>

      {/* Pulsante Grafico (Chart-bar 1) */}
      <button 
        type="button"
        className={`${styles.segmentButton} ${activeTab === 'chart' ? styles.segmentButtonActive : ''}`}
        onClick={() => setActiveTab('chart')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <g clipPath="url(#clip0_6831_5678)">
            <path 
              d="M2.25 9.75C2.25 9.55109 2.32902 9.36032 2.46967 9.21967C2.61032 9.07902 2.80109 9 3 9H6C6.19891 9 6.38968 9.07902 6.53033 9.21967C6.67098 9.36032 6.75 9.55109 6.75 9.75V14.25C6.75 14.4489 6.67098 14.6397 6.53033 14.7803C6.38968 14.921 6.19891 15 6 15H3C2.80109 15 2.61032 14.921 2.46967 14.7803C2.32902 14.6397 2.25 14.4489 2.25 14.25V9.75Z" 
              stroke={activeTab === 'chart' ? "#0F33CE" : "#495057"} 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M11.25 6.75C11.25 6.55109 11.329 6.36032 11.4697 6.21967C11.6103 6.07902 11.8011 6 12 6H15C15.1989 6 15.3897 6.07902 15.5303 6.21967C15.671 6.36032 15.75 6.55109 15.75 6.75V14.25C15.75 14.4489 15.671 14.6397 15.5303 14.7803C15.3897 14.921 15.1989 15 15 15H12C11.8011 15 11.6103 14.921 11.4697 14.7803C11.329 14.6397 11.25 14.4489 11.25 14.25V6.75Z" 
              stroke={activeTab === 'chart' ? "#0F33CE" : "#495057"} 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M6.75 3.75C6.75 3.55109 6.82902 3.36032 6.96967 3.21967C7.11032 3.07902 7.30109 3 7.5 3H10.5C10.6989 3 10.8897 3.07902 11.0303 3.21967C11.171 3.36032 11.25 3.55109 11.25 3.75V14.25C11.25 14.4489 11.171 14.6397 11.0303 14.7803C10.8897 14.921 10.6989 15 10.5 15H7.5C7.30109 15 7.11032 14.921 6.96967 14.7803C6.82902 14.6397 6.75 14.4489 6.75 14.25V3.75Z" 
              stroke={activeTab === 'chart' ? "#0F33CE" : "#495057"} 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path d="M3 15H13.5" stroke={activeTab === 'chart' ? "#0F33CE" : "#495057"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_6831_5678">
              <rect width="18" height="18" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
}

// Componente: Pulsante Scarica Report
export function DownloadReportButton() {
  return (
    <button className={styles.downloadReportButton} type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path 
          d="M10.4167 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V10.4167M2.5 8.33333H17.5M8.33333 2.5V17.5M13.3333 15.8333H18.3333M15.8333 18.3333L18.3333 15.8333L15.8333 13.3333" 
          stroke="#0F33CE" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      Scarica Report
    </button>
  );
}

interface HeaderCellProps {
  label?: string;
}

// Componente: Cella di Intestazione con Filtro
export function TableHeaderCell({ label = "Cliente" }: HeaderCellProps) {
  return (
    <button className={styles.tableHeaderCell} type="button">
      <span className={styles.tableHeaderLabel}>{label}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path 
          d="M7.99996 13.3334L5.99996 14V8.33335L3.01329 5.04802C2.79026 4.80264 2.66666 4.48295 2.66663 4.15135V2.66669H13.3333V4.11469C13.3332 4.46828 13.1927 4.80736 12.9426 5.05735L9.99996 8.00002V10M12.6666 10.6667V14.6667M10.6666 12.6667L12.6666 14.6667L14.6666 12.6667" 
          stroke="black" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

// Componente: Barra di Paginazione Interattiva
export function TablePagination() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 5;

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={styles.paginationRow}>
      {/* Torna all'inizio (<<) */}
      <button 
        type="button" 
        className={styles.pageButton}
        onClick={() => handlePageClick(1)}
        disabled={currentPage === 1}
        style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
      >
        &laquo;
      </button>

      {/* Torna alla pagina precedente (<) */}
      <button 
        type="button" 
        className={styles.pageButton}
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
      >
        &lsaquo;
      </button>

      {/* Pagina 1 */}
      <button 
        type="button" 
        className={`${styles.pageButton} ${currentPage === 1 ? styles.pageButtonActive : ''}`}
        onClick={() => handlePageClick(1)}
      >
        1
      </button>

      {/* Pagina 2 */}
      <button 
        type="button" 
        className={`${styles.pageButton} ${currentPage === 2 ? styles.pageButtonActive : ''}`}
        onClick={() => handlePageClick(2)}
      >
        2
      </button>

      {/* Punti di sospensione (...) */}
      <span className={`${styles.pageButton} ${styles.pageEllipsis}`}>
        ...
      </span>

      {/* Pagina 5 */}
      <button 
        type="button" 
        className={`${styles.pageButton} ${currentPage === 5 ? styles.pageButtonActive : ''}`}
        onClick={() => handlePageClick(5)}
      >
        5
      </button>

      {/* Vai alla pagina successiva (>) */}
      <button 
        type="button" 
        className={styles.pageButton}
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{ opacity: currentPage === totalPages ? 0.5 : 1 }}
      >
        &rsaquo;
      </button>

      {/* Vai all'ultima pagina (>>) */}
      <button 
        type="button" 
        className={styles.pageButton}
        onClick={() => handlePageClick(totalPages)}
        disabled={currentPage === totalPages}
        style={{ opacity: currentPage === totalPages ? 0.5 : 1 }}
      >
        &raquo;
      </button>
    </div>
  );
}