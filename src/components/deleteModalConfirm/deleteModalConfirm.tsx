import {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {deleteBook, fetchBooks} from "../../store/reducers/ActionCreators";
import {deleteModalConfirm} from "../../store/reducers/BookSlice";

import './deleteModalConfirm.css'


export const DeleteModalConfirm: FC = () => {
    
    const {stateDeleteModalConfirm, deleteId} = useAppSelector((state) => state.bookReducer)
    const dispatch = useAppDispatch()


    return (
        <div
            className={stateDeleteModalConfirm ? 'modal active' : 'modal'}
            onClick={() => {
                dispatch(deleteModalConfirm(false))

            }}
        >
            <div
                className={stateDeleteModalConfirm ? 'modal_content active' : 'modal'}
                onClick={(event: React.MouseEvent) => event.stopPropagation()}
            >
                <h3 className='text-danger'>Do you want to delete the book?</h3>
                <div className='d-flex justify-content-center'>
                    <button
                        className='btn btn-success'
                        onClick={(e) => {
                            e.preventDefault()
                            dispatch(deleteModalConfirm(false))
                            dispatch(deleteBook(deleteId))

                        }}>OK
                    </button>
                    <button
                        className='btn btn-danger pl-2'
                        onClick={() => {
                            dispatch(deleteModalConfirm(false))

                        }}>CANCEL
                    </button>
                </div>
            </div>
        </div>
    );
};