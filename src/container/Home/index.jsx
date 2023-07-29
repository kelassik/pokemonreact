import React from "react";
import { styled } from "styled-components";
import MainMenu from "../Menu/mainMenu";
import ImageHome from "../../assets/image/imghome.png"
import Footer from "../Footer/footer";


function Home(){
    return (
        <Appstyle>
        <div className="menu">
        <MainMenu/>
        </div>   
        <div className="body">
        <div className="contain-home">
            <div className="contain-left">
                <p><span>Find</span> all your <br/> favorite <br/> <span>Pokemon</span></p>
                <p>You can know the type of Pokemon,<br/> its strengths, disadvantages and <br/> abilities</p>
                <button type="click">See pokemons</button>
            </div>
            <div className="contain-right">
            <img className="imgHome" src={ImageHome} alt="img"/>
            </div>
        </div>
        </div>
        <div className="footer">
            <Footer/>
        </div>
        </Appstyle>
    );
}

export default Home;
const Appstyle = styled.div`
.body {
    width: 100%;
    background: var(--yellow-gradient, linear-gradient(180deg, #F5DB13 0%, #F2B807 100%));
}
.contain-home {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
.contain-left {
    margin: 100px auto;
    width: 70%;
    padding: 5px;
    flex-basis: 50%;

    >p:nth-child(1){
    color: #000;
    font-size: 60px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 4px;
    margin: 0;
    >span{
        font-weight: 700; 
    }
    }
    >p:nth-child(2){
        color: #000;
        font-family: Karla;
        font-size: 32px;
        font-weight: 400;
        margin-top: 40px;      
    } 
}
button[type=click] {
    display: inline-block;
    padding: 15px 25px;
    font-size: 24px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #4CAF50;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px #999;
    margin-top: 40px;
    }

button[type=click]:hover {background-color: #3e8e41}

button[type=click]:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}
.contain-right {
    flex-basis: 50%;
}
.contain-right img {
    object-fit: cover;
    width: 100%;
}
.footer {
    background: var(--yellow-gradient, linear-gradient(180deg, #F5DB13 0%, #F2B807 100%));
}
`