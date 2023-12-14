import { useDispatch } from "react-redux"
import { Note } from "../hooks/type";
import { deleteNote } from "../redux/notesSlice"

interface Props{
    note: Note;
}
export const NoteItem = ({ note } :Props) => {
    const dispatch = useDispatch()

    const click = () => dispatch(deleteNote(note))

    return (
        <div className="noteItem">
            <p>{note.text}</p>
            <button onClick={click}>delete</button>
        </div>
    )
}