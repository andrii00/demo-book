import {FC} from "react";
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../hooks/redux";
import {IBook} from "../../models/IBook";
import {deleteID, deleteModalConfirm, setEditObj} from "../../store/reducers/BookSlice";

export interface IItemProp {
    book: IBook
}

export const BookItem: FC<IItemProp> = ({book}) => {
    
    const dispatch = useAppDispatch()


    return (
        <div className='col-md-4 mt-4 mb-2'>
            <div className='card'>
                <div className='card-body'>
                    <h5 className='card-title tex-dark'>Title: {book.title}</h5>
                    <h6 className='card-subtitle mb-2 text-muted'>Author: {book.author}</h6>
                    <div className='d-flex justify-content-around wrap'>
                        <p className='card-text'>Category: {book.category}</p>
                        <p>ISBN: {book.isbn}</p>
                    </div>
                    <div className='d-flex justify-content-around'>
                        <button
                            className='btn btn-outline-dark'
                            onClick={() => {
                                dispatch(deleteModalConfirm(true))
                                dispatch(deleteID(book.id))

                            }}
                        >
                            delete
                        </button>
                        <NavLink to={`/edit-book/${book.id}`}>
                            <button
                                className='btn btn-outline-dark'
                                onClick={() => dispatch(setEditObj(book))}
                            >
                                edit
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>

        </div>
    );
};