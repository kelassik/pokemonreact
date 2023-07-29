import React from "react";
import { styled } from "styled-components";
import ImagePop from "../../../assets/image/pokefirst.png"


function PopupCard(){
    return (
        <Appstyle>
            <div className="container-popup">
                <div className="container-left-popup">
                    <img src={ImagePop} alt=""/>
                    <div className="grup-ability">
                        <p>Grass</p>
                        <p>Poison</p>
                    </div>
                </div>
                <div className="container-right-popup">
                    <div className="text-top">
                        <p>Charizard</p>
                        <p>Generation 1</p>
                        <p>578</p>
                    </div>
                    <div className="text-second">
                        <p>Abilities</p>
                        <p>Overgrow - Chlorophyll</p>
                    </div>
                    <div className="text-third">
                    <div className="text-hp">
                    <p>Healthy Points</p>
                    <p>1 000 000</p>
                    <img src="" alt=""/>
                    </div>
                    <div className="text-exp">
                        <p>Experience</p>
                        <p>1 000 000</p>
                        <img src="" alt=""/>
                    </div>
                    </div>
                    <div className="text-forth">
                        <div className="text-def">
                            <p>49</p>
                            <p>Defense</p>
                        </div>
                        <div className="text-atk">
                            <p>165</p>
                            <p>Attack</p>
                        </div>
                        <div className="text-satk">
                            <p>130</p>
                            <p>Sp Attack</p>
                        </div>
                        <div className="text-sdef">
                            <p>271</p>
                            <p>Sp Defence</p>
                        </div>
                    </div>
                </div>
            </div>
        </Appstyle>
    )
}

export default PopupCard;
const Appstyle=styled.div`
padding: 100px;

.container-popup {
    display: flex;
    width: 600px;
    background-color: #f2f2f2;
    gap: 10px;
   
    border-radius: 10px;
}
.container-left-popup {
    width: 50%;
    position: relative;
}
.container-left-popup img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    z-index: 1;
    position: absolute;
}
.grup-ability {
    display: flex;
    gap: 10px;
    justify-content: end;
    
    >p:nth-child(1){
        z-index: 2;
    }
    >p:nth-child(2){
        z-index: 2;
    }
}
.container-right-popup {
    width: 50%;
    padding: 10px;
}
.text-top{
    display: flex;
    justify-content: space-between;
    gap: 20px;
}
.text-second {
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    margin-right: 20px;
    >p:nth-child(1){
        margin: 0;
    }
    >p:nth-child(2){
        margin: 0;
    }
}
.text-third {
    display: flex;
    justify-content: space-between;
    background-color: white;
    margin-top: 5px;
    padding: 10px;
    gap: 10px;
    border-radius: 5px;
}
.text-hp {

    >p:nth-child(1){
        margin: 0;
    }
    >p:nth-child(2){
        margin: 0;
    }
}
.text-exp {

>p:nth-child(1){
    margin: 0;
}
>p:nth-child(2){
    margin: 0;
}
}
.text-forth {
    display: flex;
    gap: 10px;
}
.text-def {
    text-align: center;
}
.text-atk {
    text-align: center;
}
.text-satk {
    text-align: center;
}
.text-sdef {
    text-align: center;
}
`