import { useState } from 'react';
import { useAppDispatch } from '../hooks/hook';
import { createNewNote } from '../redux/notesSlice';

interface Props {
    cant: number
}

export const CreateNote = ({ cant }: Props) => {
    const dispatch = useAppDispatch()
    const [inputValue, setInputValue] = useState({ id: 0, text: "" })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue({ id: cant + 1, text: event.target.value })

    const handleCreate = () => dispatch(createNewNote(inputValue))

    return (
        <>
            <input placeholder='New note' onChange={handleChange} />
            <button onClick={handleCreate}>Crear</button>
        </>
    )
}