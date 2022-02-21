import React, {FC} from "react";
import {BooksList} from "../bookslist/BooksList";
import { DeleteModalConfirm } from "../deleteModalConfirm/deleteModalConfirm";

import './homePage.css'


export const HomePage: FC = () => {
    
    return (
        <div className='bg-secondary heightHome'>
            <div className='container row mx-auto'>
                <BooksList/>
                <DeleteModalConfirm/>
            </div>
        </div>
    );
};

