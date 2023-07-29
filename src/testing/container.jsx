import React from "react";
import Kartu from "./Kartu/kartu";
import { styled } from "styled-components";


function Container(){
    return (
        <Appstyle>
            <div className="row">
            <div className="column">
                <Kartu/>
            </div>
            </div>
        </Appstyle>
    )
}

export default Container;
const Appstyle=styled.div`
.row {

}
.column {

    
}
`