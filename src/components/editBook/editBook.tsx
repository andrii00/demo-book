import {FC, useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {axiosBookEdit} from "../../store/reducers/ActionCreators";
import {setEditModal} from "../../store/reducers/BookSlice";
import {EditBookModal} from "../editBookModal/editBookModal";

interface IBookId {
    id: string;
}

export const EditBook: FC = () => {

    const {setObj, books} = useAppSelector((state) => state.bookReducer)
    const params = useParams()
    const [title, setTitle] = useState<string>('')
    const [author, setAuthor] = useState<string>('')
    const [select, setSelect] = useState<string>('Fiction')
    const [active, setActive] = useState<boolean>(false)
    const [isbn, setISBN] = useState<number | string>('')
    const dispatch = useAppDispatch()
    const listOfCategory = ['Fiction', 'History', 'Biography', 'Novel']


    useEffect(() => {
        setTitle(setObj.title)
        setAuthor(setObj.author)
        setSelect(setObj.category)
        setISBN(setObj.isbn)
    }, [])


    const handleSubmit = () => {
        if (!title || !author || !select || !isbn) return;
        dispatch(axiosBookEdit(params.id, title, author, select, Number(isbn)))
        dispatch(setEditModal(true))
    }
    return (
        <div className='bg-secondary height'>
            <form>
                <div className='form-group container col-sm-4 pt-2'>
                    <input
                        className='form-control'
                        type="text"
                        placeholder='Book title'
                        value={title}
                        onChange={({target: {value}}) => setTitle(value)}/>
                </div>

                <div className='form-group container col-sm-4 pt-1'>
                    <input
                        className='form-control'
                        type="text"
                        value={author}
                        placeholder='Author name'
                        onChange={({target: {value}}) => setAuthor(value)}/>
                </div>

                <div className="dropdown form-group container col-sm-4 pt-1">
                    <div
                        className="dropdown-btn"
                        onClick={(event) => setActive(!active)}>
                        {select}
                    </div>
                    {active && (
                        <div className="dropdown-content">
                            {listOfCategory.map((category, index) => (
                                <div
                                    key={index}
                                    className="dropdown-item"
                                    onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                                        setSelect(category)
                                        setActive(false)
                                    }}
                                >
                                    {category}
                                </div>
                            ))}


                        </div>)}
                </div>

                <div className='form-group container col-sm-4 pt-1'>
                    <input
                        className='form-control'
                        type="number"
                        value={isbn}
                        placeholder='International Standard Book Number'
                        onChange={(e) => setISBN(e.target.value)}
                    />
                </div>
                <button
                    className='btn btn-light mt-1'
                    type='submit'
                    disabled={!title || !author || !select || !isbn}
                    onClick={(e: React.MouseEvent) => {
                        e.preventDefault()
                        handleSubmit()
                    }}
                >
                    Edit Book
                </button>
            </form>
            <EditBookModal/>
        </div>
    );
};