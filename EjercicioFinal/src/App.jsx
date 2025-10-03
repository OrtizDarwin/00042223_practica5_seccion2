import CardScientist from './CardScientist';
import { scientists } from './scientists';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Programadores Profesionales</h1>
      {scientists.map((scientist, index) => (
        <CardScientist
          key={index}
          name={scientist.name}
          image={scientist.image}
          profession={scientist.profession}
          awards={scientist.awards}
          discoveries={scientist.discoveries}
        />
      ))}
    </div>
  );
}

export default App;