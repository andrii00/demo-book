import {IBook} from "../../models/IBook";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAddBook} from "../../models/IAddBook";

interface BookState {
    books: IBook[];
    stateBookModal: boolean,
    stateDeleteModalConfirm: boolean,
    stateBoookEdit: boolean,
    deleteId: number,
    setObj: IBook
}

const initialState: BookState = {
    books: [],
    stateBookModal: false,
    stateBoookEdit: false,
    stateDeleteModalConfirm: false,
    deleteId: 0,
    setObj: {
        id: 0,
        title: '',
        author: '',
        category: '',
        isbn: 0
    }


}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        bookFetchingSuccess(state, action: PayloadAction<IBook[]>) {
            state.books = action.payload
        },
        bookAdd(state, action: PayloadAction<IBook>) {
            state.books.push(action.payload)
        },
        addBookModal(state, action: PayloadAction<boolean>) {
            state.stateBookModal = action.payload
        },
        deleteModalConfirm(state, action: PayloadAction<boolean>) {
            state.stateDeleteModalConfirm = action.payload
        },
        deleteID(state, action: PayloadAction<number>) {
            state.deleteId = action.payload
        },
        setEditObj(state, action: PayloadAction<IBook>) {
            state.setObj = action.payload
        },
        setEditModal(state, action: PayloadAction<boolean>) {
            state.stateBoookEdit = action.payload
        }
    }
})

export const {
    bookFetchingSuccess,
    bookAdd,
    addBookModal,
    deleteModalConfirm,
    deleteID,
    setEditObj,
    setEditModal

} = bookSlice.actions


export default bookSlice.reducer;
