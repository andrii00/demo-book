import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {addBookModal, setEditModal} from "../../store/reducers/BookSlice";

import './editModal.css'


export const EditBookModal: FC = () => {
    const {stateBoookEdit} = useAppSelector((state) => state.bookReducer)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    return (
        <div
            className={stateBoookEdit ? 'modal active' : 'modal'}
            onClick={() => {
                navigate('/')
                dispatch(setEditModal(false))
            }}
        >
            <div
                className={stateBoookEdit ? 'modal_content active' : 'modal'}
                onClick={(event: React.MouseEvent) => event.stopPropagation()}
            >
                <h3 className='text-success'>The book has been edited!</h3>
                <button
                    className='btn btn-success'
                    onClick={() => {
                        dispatch(setEditModal(false))
                        navigate('/')
                    }}>OK
                </button>
            </div>
        </div>
    );
};