import './App.css';
import { MoviesGrid } from './componentes/MoviesGrid';

export function App() {
  return (
    <div>
      <header>
        <h1>Movies</h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}