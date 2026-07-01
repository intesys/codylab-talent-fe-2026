// TestButton.tsx
import { 
  AddCircleButton, 
  DeleteButton, 
  ProjectFilterBlock, 
  VisualizzaDettaglioButton,
  ApplicaButton,
  ViewSegmentedControl,
  DownloadReportButton,
  TableHeaderCell,
  TablePagination 
} from './MainButton';

export default function TestButtons() {
  // Memorizziamo la tipografia standard di Figma da applicare a tutto l'ambiente di test
  const figmaFontFamily = '"SF Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

  return (
    <div style={{ 
      padding: '40px', 
      background: '#f8f9fa', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '35px', 
      overflowX: 'auto',
      fontFamily: figmaFontFamily 
    }}>
      <h3 style={{ 
        color: '#333', 
        fontFamily: figmaFontFamily, 
        fontSize: '18px', 
        fontWeight: '600',
        margin: 0 
      }}>
        Ambiente di Test Generale - Design System Completo
      </h3>
      
      {/* 1. PULSANTI ICONA ORIGINALI */}
      <section style={{ borderBottom: '1px solid #e9ecef', paddingBottom: '20px' }}>
        <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#495057', fontWeight: '600', fontFamily: figmaFontFamily }}>
          1. Pulsanti Icona (Azioni Principali della Tabella)
        </p>
        <div style={{ display: 'flex', gap: '12px' }}>
          <AddCircleButton />
          <DeleteButton />
        </div>
      </section>

      {/* 2. FILTRO STRUTTURATO (PROGETTO) */}
      <section style={{ borderBottom: '1px solid #e9ecef', paddingBottom: '20px' }}>
        <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#495057', fontWeight: '600', fontFamily: figmaFontFamily }}>
          2. Filtro Input in Absolute (Progetto)
        </p>
        <ProjectFilterBlock />
      </section>

      {/* 3. PULSANTI TESTUALI SEMPLICI */}
      <section style={{ borderBottom: '1px solid #e9ecef', paddingBottom: '20px' }}>
        <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#495057', fontWeight: '600', fontFamily: figmaFontFamily }}>
          3. Pulsanti Testuali (Visualizza e Applica)
        </p>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <VisualizzaDettaglioButton />
          <ApplicaButton />
        </div>
      </section>

      {/* 4. SELEZIONE VISTA ED ESPORTAZIONE */}
      <section style={{ borderBottom: '1px solid #e9ecef', paddingBottom: '20px' }}>
        <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#495057', fontWeight: '600', fontFamily: figmaFontFamily }}>
          4. Segmented Control ed Esportazione Report
        </p>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <ViewSegmentedControl />
          <DownloadReportButton />
        </div>
      </section>

      {/* 5. CELLA DI INTESTAZIONE DELLA TABELLA */}
      <section style={{ borderBottom: '1px solid #e9ecef', paddingBottom: '20px' }}>
        <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#495057', fontWeight: '600', fontFamily: figmaFontFamily }}>
          5. Cella della Tabella con Filtro (Cell-Cliente)
        </p>
        <div style={{ display: 'flex', gap: '2px', background: '#DCE0F5', padding: '2px', borderRadius: '4px', width: 'max-content' }}>
          <TableHeaderCell label="Cliente" />
          <TableHeaderCell label="Progetto" />
          <TableHeaderCell label="Attività" />
        </div>
      </section>

      {/* 6. BARRA DI PAGINAZIONE CORRETTA */}
      <section style={{ paddingBottom: '20px' }}>
        <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#495057', fontWeight: '600', fontFamily: figmaFontFamily }}>
          6. Barra di Paginazione (Allineata senza interruzioni)
        </p>
        <div style={{ border: '1px solid #E9ECEF', borderRadius: '4px', background: '#FFF' }}>
          <TablePagination />
        </div>
      </section>
      
    </div>
  );
}