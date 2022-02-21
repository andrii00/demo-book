import React, {FC, useRef, useState} from "react";
import {useAppDispatch} from "../../hooks/redux";
import {addBook} from "../../store/reducers/ActionCreators";
import {addBookModal} from "../../store/reducers/BookSlice";
import {AddBookModal} from "../addBookModal/addBookModal";

import './addBook.css'


const AddBook: FC = () => {

    const [title, setTitle] = useState<string>('')
    const [author, setAuthor] = useState<string>('')
    const [select, setSelect] = useState<string>('Fiction')
    const [active, setActive] = useState<boolean>(false)
    const [isbn, setISBN] = useState<number>(0)
    const listOfCategory = ['Fiction', 'History', 'Biography', 'Novel']
    const dispatch = useAppDispatch()


    const handleSubmit = () => {
        if (!title || !author || !select || !isbn) return;
        dispatch(addBook(title, author, select, isbn))
        dispatch(addBookModal(true))

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
                        placeholder='International Standard Book Number'
                        onChange={(e) => setISBN(Number(e.target.value))}
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
                    Add Book
                </button>
            </form>
            <AddBookModal/>
        </div>
    );
};

export default AddBook;