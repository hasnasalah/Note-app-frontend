import type{ Note } from '../../utilities/notes-api';

type NoteListItemProps= {
    note:Note;
}
export default function NoteListItem({ note }: NoteListItemProps) {
  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}
