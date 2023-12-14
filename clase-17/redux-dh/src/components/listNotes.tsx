import { Note } from "../hooks/type"
import { NoteItem } from "./noteItem"

interface Props{
    notes: Note[];
}
export const ListNotes = ({ notes } :Props) => {

    return (
        <div className="notesCont">
            {notes.map((note, i) => (
                <NoteItem key={i} note={note} />
            ))}
        </div>
    )
}