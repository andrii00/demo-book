import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchBooks} from "../../store/reducers/ActionCreators";
import {BookItem} from "../bookItem/bookItem";

export const BooksList: FC = () => {
    const {books, stateDeleteModalConfirm} = useAppSelector((state) => state.bookReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchBooks())
        
    }, [stateDeleteModalConfirm])

    return (
        <>
            {books && books.map(book => <BookItem key={book.id} book={book}/>)}
        </>
    );
};