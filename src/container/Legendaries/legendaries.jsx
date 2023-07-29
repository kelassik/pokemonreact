import React from "react";
import { styled } from "styled-components";
import MainMenu from '../Menu/mainMenu';


const Legendaries= ()=> {
    return (
        <Appstyle>
        <div className="navbar"><MainMenu/></div>
        <div>
            Legendaries
        </div>

        </Appstyle>
    );
}

export default Legendaries;
const Appstyle=styled.div`
`