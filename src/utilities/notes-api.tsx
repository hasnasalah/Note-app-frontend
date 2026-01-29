const BASE_URL = `${import.meta.env.VITE_API_URL}/api/notes`;

export type Note = {
  _id: string;
  title: string;
  body: string;
};

export type CreateNoteData = {
  title: string;
  body: string;
};

export async function getNotes(): Promise<Note[]> {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('API Error!');
    const data: Note[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return []; // <-- always return an array
  }
}

export async function createNote(
  formData: CreateNoteData
): Promise<Note> {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error('API Error!');
    const data: Note = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error; // <-- let the caller handle errors
  }
}
