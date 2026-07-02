// TestButton.tsx
import { SingleButton } from './MainButton'; // Importiamo il bottone unico con le varianti

export default function TestButtons() {
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

        <h3>Ambiente di Test Generale - Design System Completo</h3>

        <section style={{ borderBottom: '1px solid #e9ecef', paddingBottom: '20px' }}>

          <p>Pulsanti Testuali (Visualizza e Applica)</p>


          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>

            {/* Usiamo lo stesso bottone passando la variante che serve */}
            <SingleButton variant="primary">
              Visualizza Dettaglio
            </SingleButton>

            <SingleButton variant="secondary">
              Applica
            </SingleButton>

          </div>
        </section>

      </div>
  );
}