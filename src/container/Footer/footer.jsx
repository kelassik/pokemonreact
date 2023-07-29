import React from "react";
import { styled } from "styled-components";


function Footer(){
    return(
        <Appstyle>
        <div className="contain-footer">
        <div className="contain-left-footer">
        <p>Make with ❤️ for the PokéSpartans team Platzi Master</p>
        </div>
        <div className="contain-right-footer">
            <p>Ours Team</p>
        </div>
        </div>
        </Appstyle>
    );
}


export default Footer;
const Appstyle = styled.div`
.contain-footer {
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border: transparent;
    background-color: transparent;
    align-items: center;
}

.contain-left-footer {

    >p:nth-child(1){
        color: var(--pharagraph, #212121);
        font-size: 18px;
        font-weight: 700;
        margin: 0;
    }
}

.contain-right-footer {

    >p{
        color: var(--pharagraph, #212121);
        font-size: 18px;
        font-weight: 700;
        margin: 0;
    } 
}
`