import { useState } from 'react';
import type {ChangeEvent, FormEvent} from 'react';
import { createNote } from '../../utilities/notes-api';

/* Adjust this to match your Note shape */
type Note = {
  _id: string;
  title: string;
  body: string;
};

type CreateNoteFormProps = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

type FormData = {
  title: string;
  body: string;
};

export default function CreateNoteForm({
  notes,
  setNotes,
}: CreateNoteFormProps) {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    body: '',
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const data: Note = await createNote(formData);
      setNotes(prevNotes => [...prevNotes, data]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a title..."
        name="title"
        value={formData.title}
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="Enter a body..."
        name="body"
        value={formData.body}
        onChange={handleChange}
      />

      <input type="submit" />
    </form>
  );
}
