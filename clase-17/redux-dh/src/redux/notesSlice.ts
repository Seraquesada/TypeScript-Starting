import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Note } from "../hooks/type"


interface initialType {
    notes: Note[]
}

const initialState: initialType = {
    notes: [
        {
            id: 1,
            text: "Hola a todos"
        },
        {
            id: 2,
            text: "Estamos en la clase de REDUX"
        },
    ]
}

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        createNewNote: (state, action: PayloadAction<Note>) => {
            //return { notes: [...state.notes, action.payload] }
            state.notes.push(action.payload)
        },
        deleteNote(state, action: PayloadAction<Note>) {
            //return { notes: state.notes.filter(note => note.id !== action.payload.id) }
            state.notes = state.notes.filter(note => note.id !== action.payload.id)
        }
    }
})

export const { createNewNote, deleteNote } = notesSlice.actions

export default notesSlice.reducer
