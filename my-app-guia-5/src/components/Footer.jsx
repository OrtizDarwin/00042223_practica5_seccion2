export default function Footer({ autor = "UCA – Progra Web", year = new Date().getFullYear() }) {
  return (
    <footer className="app-footer">
      <small>© {year} {autor}. Hecho con React + Vite.</small>
    </footer>
  );
}
