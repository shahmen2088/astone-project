import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async function (bookName: string) {
    const response = await fetch(
      'https://www.googleapis.com/books/v1/volumes?q=' +
        bookName +
        '&key=AIzaSyDpR9RvrVI5fmeK-3EzAJkjl0Slne-cspY',
    );

    const data = await response.json();

    return data.items;
  },
);

interface BookDetailsData {
  id: string;
  volumeInfo: {
    authors: string[];
    title: string;
    imageLinks: {
      thumbnail: string;
    };
    publisher: string;
    publishedDate: string;
    description: string;
  };
}

type BookState = {
  entities: [];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
};

const initialState: BookState = {
  entities: [],
  loading: 'idle',
};
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const transformDate = action.payload.map((book: BookDetailsData) => ({
        id: book.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors?.join(', '),
        image: book.volumeInfo.imageLinks?.thumbnail,
        publisher: book.volumeInfo.publisher,
        publishedDate: book.volumeInfo.publishedDate,
        description: book.volumeInfo.description,
      }));
      state.loading = 'succeeded';
      state.entities = transformDate;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      alert(`Error: ${action.error.message}`);
    });
  },
});

// export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
