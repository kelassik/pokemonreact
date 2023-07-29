import { styled } from "styled-components";
import {ReactComponent as LogoPokemon} from "../../assets/icons/logopokemon.svg"
import { menu } from "../../constant/menu";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function MainMenu(){
    const [click, setClick] = useState(false)

    const handleOnclick = () => setClick(!click)
    return (
        <Appstyle>
        <nav className="navbar">
        <div className="container">
        <NavLink exact to="/" className="nav-logo">
        <LogoPokemon/>
        </NavLink>
        <ul className={click ? "menu active" : "menu"}>
            <li className="nav-item">
                <NavLink exact to="/" activeClassName="active" className="nav-links">
                Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact to="/src/container/Pokedex/pokedex.jsx" activeClassName="active" className="nav-links">
                Pokédex
                </NavLink>
            </li> 
            <li className="nav-item">
                <NavLink exact to="/src/container/Legendaries/legendaries.jsx" activeClassName="active" className="nav-links">
                Legendaries
                </NavLink>
            </li> 
            <li className="nav-item">
                <NavLink exact to="/src/container/Documentation/documentation.jsx" activeClassName="active" className="nav-links">
                Documentation
                </NavLink>
            </li>     
        </ul>
        <div className="nav-icon" onClick={handleOnclick }>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        </div>        
        </nav>
        </Appstyle>
    );
}

export default MainMenu;
const Appstyle = styled.div`
.navbar{
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    background: var(--yellow-gradient, linear-gradient(180deg, #F5DB13 0%, #F2B807 100%));
    border: 2px;
    border-color: #000000;       
}
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.nav-logo {
    cursor: pointer;
    flex-grow: 1px;
    margin-left: 10px;
}
.menu {
    display: flex;
    list-style: none;
    text-align: center;
    margin-right: 10px;
}
.nav-links {
    color: #000000;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    border-bottom: 3px solid transparent;
}
.nav-item {
    line-height: 40px;
    margin-right: 1rem;
}
.nav-item:after {
    content: "";
    display: block;
    height: 3px;
    width: 0;
    background: transparent;
    transition: width 0.7s ease background-color 0.5 ease;
}
.nav-item:hover:after {
    width: 100%;
    background-color: #000000;
}
.nav-item .active {
    text-decoration: underline;
}
.nav-icon {
    display: none;
}

@media screen and (max-width: 968px) {
    .menu {
        display: flex;
        flex-direction: column;
        width: 100%;
        border-top: 1px solid transparent;
        position: absolute;
        top: 80px;
        left: -100%;
        opacity: 1px;
    }
    .menu.active {
        left: 0px;
        opacity: 1px;
        transition: all 0.5 ease;
        z-index: 1;
        background: var(--yellow-gradient, linear-gradient(180deg, #F5DB13 0%, #F2B807 100%));
    }
    .nav-links {
        padding: 0.5rem;
        width: 100%;
        display: table;
    }
    .nav-icon {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
}
`