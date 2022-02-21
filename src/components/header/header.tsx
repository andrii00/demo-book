import {FC} from "react";
import {NavLink} from "react-router-dom";

export const Header: FC = () => {


    return (
        <nav className="navbar navbar-light bg-dark ">
            <div className="container">

                <NavLink className="navbar-brand text-white" to='/'><h3>Home Book</h3></NavLink>

                <NavLink className="navbar-brand text-white" to='/add-book'> Add a Book</NavLink>

            </div>
        </nav>
    );
};