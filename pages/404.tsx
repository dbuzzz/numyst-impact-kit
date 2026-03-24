export default function Custom404() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
        padding: '24px',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '8px' }}>404</h1>
        <p style={{ color: '#666' }}>This page could not be found.</p>
      </div>
    </main>
  );
}
