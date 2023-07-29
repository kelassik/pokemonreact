import React from "react";
import { styled } from "styled-components";
import MainMenu from '../Menu/mainMenu';


const Documentation=()=> {
    return (
        <Appstyle>
        <div className="navbar"><MainMenu/></div>
        <div>
            documentation
        </div>

        </Appstyle>
    )
}

export default Documentation;
const Appstyle=styled.div`
`