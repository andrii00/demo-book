import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {addBookModal} from "../../store/reducers/BookSlice";
import './addBookModal.css'

export const AddBookModal: FC = () => {
    const {books, stateBookModal} = useAppSelector((state) => state.bookReducer)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    return (
        <div
            className={stateBookModal ? 'modal active' : 'modal'}
            onClick={() => {
                navigate('/')
                dispatch(addBookModal(false))
            }}
        >
            <div
                className={stateBookModal ? 'modal_content active' : 'modal'}
                onClick={(event: React.MouseEvent) => event.stopPropagation()}
            >
                <h3 className='text-success'>The book has been added!</h3>
                <button
                    className='btn btn-success'
                    onClick={() => {
                        dispatch(addBookModal(false))
                        navigate('/')
                    }}>OK
                </button>
            </div>
        </div>
    );
};