import React, { useState } from "react";
import { styled } from "styled-components";
import PokemonImage from "../../assets/image/pokefirst.png"


function Kartu(){
    const [testCard]=useState([
        {
            title:"card 1",
            text:"testing card nomer 1"
        },
        {
            title:"card 2",
            text:"testing card nomer 2"
        },
        {
            title:"card 3",
            text:"testing card nomer 3"
        },
        {
            title:"card 4",
            text:"testing card nomer 4"
        }
    ])
    return (
        <Appstyle >
        {testCard.map((value, i)=> (
         
            <div key={i} className="card">
            <div className="contain-left">
                    <h4>{value.title}</h4>
                    <p>{value.text}</p>
                </div>
                <div className="contain-right">
                <img src={PokemonImage} alt=""/>
                </div>
            </div>
         
        ))}           
        </Appstyle>
    )
}

export default Kartu;
const Appstyle=styled.div`
display: flex;
flex-wrap: wrap;
flex-basis: 100%;
padding: 100px;
gap: 20px;

.card {
    width: 400px;
    display: flex;
    background-color: red;
    border-radius: 10px;
    text-align: center;
}
.contain-left {
    text-align: center;
    padding: 10px;
}
.contain-right img {
    object-fit: contain;
    
}
`