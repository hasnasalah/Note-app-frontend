import { useState, useEffect } from 'react';
import { getNotes } from '../../utilities/notes-api';
import type{Note} from "../../utilities/notes-api";
import CreateNoteForm from '../../components/createNoteForm/CreateNoteForm';
import NoteList from '../../components/NodeList/NodeList';

export default function HomePage() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function fetchNotes() {
      const data = await getNotes();
      if (data) {
        setNotes(data);
      }
    }
    fetchNotes();
  }, []);

  return (
    <div>
      <CreateNoteForm notes={notes} setNotes={setNotes} />
    <NoteList notes={notes}/>
    </div>
  );
}
