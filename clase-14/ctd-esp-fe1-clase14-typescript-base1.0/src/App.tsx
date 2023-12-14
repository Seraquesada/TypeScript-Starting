import { useState } from "react";
import ListadoMensajes from "./components/ListadoMensajes";
import VistaMensaje from "./components/VistaMensaje";
import { mensajes } from "./data/mensajes";
import { Mensaje } from "./interface/Mesanje";
import "./styles.css";

export default function App() {
    const [mensaje, setMensaje] = useState<Mensaje>({
        id: 1,
        remitente: {
            nombre: '',
            apellido: '',
            type: "ENTRENADOR",
            ciudadDeNacimiento: {
                ciudad: '',
                region: '',
            },
        },
        email: "",
        asunto: "",
        fecha: "",
        texto:""
    });

    const seleccionarMensaje = (id: number) =>{
        let mensaje = mensajes.find((m) => m.id === id);
        mensaje && setMensaje(mensaje);
    }

    return (
        <div className="App">
            <h1>Bandeja de Entrada</h1>
            <div id="bandejaDeEntrada">
                <ListadoMensajes
                    mensajes={mensajes}
                    seleccionarMensaje={seleccionarMensaje}
                />
                <VistaMensaje mensaje={mensaje} />
            </div>
        </div>
    );
}
