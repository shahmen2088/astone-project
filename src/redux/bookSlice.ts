import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type Book = {
    id: string,
    title: string,
    author: string
};


type BookState = {
    list: Book[], 
}

const initialState: BookState = {
    list: [],
}


const bookSlice = createSlice({
    name: "books",
   initialState,
    reducers: {
        addBook(state, action: PayloadAction<Book>)  {
            state.list.push(action.payload)
        },
    }
})

export const {addBook} = bookSlice.actions;
export default  bookSlice.reducer;

