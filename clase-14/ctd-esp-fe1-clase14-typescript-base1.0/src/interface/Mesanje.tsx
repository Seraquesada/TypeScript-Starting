
export interface Mensaje{
        id: number,
        remitente: {
            nombre: string,
            apellido: string,
            type: string,
            ciudadDeNacimiento: {
                ciudad: string,
                region: string,
                },
        },
        email:  string,
        asunto: string,
        fecha:  string,
        texto:  string
    
}