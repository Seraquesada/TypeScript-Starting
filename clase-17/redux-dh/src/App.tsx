import './App.css';
import { CreateNote } from './components/createNote';
import { ListNotes } from './components/listNotes';
import { useAppSelector } from './hooks/hook';

function App() {

  const notas = useAppSelector(state => state.notas.notes)


  return (
    <div className="App">
      <h1>Mis notas:</h1>
      <CreateNote cant={notas.length} />
      <ListNotes notes={notas} />
    </div>
  );
}

export default App;
