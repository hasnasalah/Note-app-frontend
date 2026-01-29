import type { Note } from '../../utilities/notes-api';
import NoteListItem from '../NoteListItem/NoteListItem';

type NoteListProps = {
  notes: Note[]; // array of notes
};

export default function NoteList({ notes }: NoteListProps) {
  return (
    <div>
      {notes.map(note => (
        <NoteListItem key={note._id} note={note} />
      ))}
    </div>
  );
}
