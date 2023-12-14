import "./styles.css";
import BuscarPokemon from "./components/BuscarPokemon";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function App() {

    return (
        <QueryClientProvider client={queryClient}>
        <div className="App">
            <h1>Pokédex</h1>
            <div id="bandejaDeEntrada">
                <div style={{display: 'flex', flexDirection:'column', flexGrow: 1}}>
                    <BuscarPokemon />
                </div>
            </div>
        </div>
        </QueryClientProvider>
    );
}
