import {FC} from "react";
import {Route, Routes} from "react-router-dom";
import AddBook from "../components/addBook/AddBook";
import {EditBook} from "../components/editBook/editBook";
import {HomePage} from "../components/homePage/HomePage";

export const RoutingConfig: FC = () => {

    return <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/add-book' element={<AddBook/>}/>
            <Route path='/edit-book/:id' element={<EditBook/>}/>
        </Routes>
    </div>
}



