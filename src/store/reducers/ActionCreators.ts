import {AppDispatch} from "../store";
import {IBook} from "../../models/IBook";
import axios from "axios";
import {bookAdd, bookFetchingSuccess} from "./BookSlice";


export const fetchBooks = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get<IBook[]>('http://localhost:5000/books')
        dispatch(bookFetchingSuccess(response.data))
    } catch (e) {
        console.log(e);
    }
}


export const axiosBookEdit = (id: string | undefined, title: string, author: string, select: string, isbn: number) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.patch<IBook>(`http://localhost:5000/books/${id}`, {
            title: title,
            author: author,
            category: select,
            isbn: isbn
        })
    } catch (e) {
        console.log(e);
    }
}


export const deleteBook = (id: number) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.delete<IBook>(`http://localhost:5000/books/${id}`)
    } catch (e) {
        console.log(e);
    }
}


export const addBook = (title: string, author: string, select: string, isbn: number) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post<IBook>('http://localhost:5000/books', {
            title: title,
            author: author,
            category: select,
            isbn: isbn
        })
        const data = await response.data
        dispatch(bookAdd(data))
    } catch (e) {
        console.log(e);
    }
}


