export default function Header({ titulo, subtitulo }) {
  return (
    <header className="app-header">
      <h1>{titulo}</h1>
      {subtitulo && <p>{subtitulo}</p>}
    </header>
  );
}
