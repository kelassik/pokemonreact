import React, { useEffect } from "react";
import { styled } from "styled-components";
import { ReactComponent as Arrowdown } from "../../assets/icons/ArrowFilter.svg";
import { useState } from "react";
import Card from "./Card/card";
import axios from "axios";
import MainMenu from "../Menu/mainMenu"
import Footer from "../Footer/footer";

function Pokedex() {
  const [isActiveAttck, setIsActiveAttck] = useState(false);
  const [isActiveType, setIsActiveType] = useState(false);
  const [isActiveExperince, setIsActiveExperience] = useState(false);
  const optionType = ["fire", "normal", "electric", "Water"];

  //integrasi pokemon
    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [query, setQuery]=useState("")
    // const [nextUrl,setNextUrl]=useState();
    // const [prevUrl,setPrevUrl]=useState();

    const pokeFun=async()=>{
        setLoading(true)
        const res=await axios.get(url);
        // console.log(res)
        // setNextUrl(res.data.next);
        // setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
    }
    const getPokemon=async(res)=>{
       res.map(async(item)=>{
          const result=await axios.get(item.url)
          console.log(result)
          setPokeData(state=>{  
              state=[...state,result.data]
              state.sort((a,b)=>a.id>b.id?1:-1)
              return state
          })
       })   
    }
   useEffect(()=>{
        pokeFun();
    },[url])
  //integrasi pokemon

  return (
    <Appstyle>
      <div className="menu"><MainMenu/></div>
      <div className="contain">
        <div className="title">
          <p>
            800 <span>Pokemons</span> for you to choose your favorite
          </p>
        </div>
      </div>
      <div className="search">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Encuentra tu pokémon..." onChange={(e)=> setQuery(e.target.value)}
        />
      </div>
      <div className="filter">
        <div className="dropdown">
        <div className="dropdown-btn-type"
        onClick={()=> setIsActiveType ((showUp) => !showUp)}
        >
          <p>Type</p> <Arrowdown/>
        </div>
        {isActiveType && 
        <div className="content-drop-type">
        {optionType.map ((option)=> (
          <>
            <input type="checkbox"/>
            <label>{option}</label>
          </>
        ))}
        </div>}
        </div>
        <div className="dropdown">
        <div className="dropdown-btn-atk"
        onClick={()=> setIsActiveAttck ((showUp) => !showUp)}
        >
          <p>Type</p> <Arrowdown/>
        </div>
        {isActiveAttck && 
        <div className="content-drop-atk">
        {optionType}
        </div>}
        </div>
        <div className="dropdown">
        <div className="dropdown-btn-exp"
        onClick={()=> setIsActiveExperience ((showUp) => !showUp)}
        >
          <p>Type</p> <Arrowdown/>
        </div>
        {isActiveExperince && 
        <div className="content-drop-exp">
        <p>{optionType}</p>
        </div>}
        </div>
      </div>
      <div className="content-card">
      <div className="row">
      <Card pokemon={pokeData} loading={loading} />
      </div>    
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </Appstyle>
  );
}

export default Pokedex;
const Appstyle = styled.div`
  .title {
    > p {
      color: #000;
      text-align: center;
      font-size: 35px;
      font-weight: 400;
      letter-spacing: 3px;

      > span {
        font-weight: 700;
      }
    }
  }
  .search {
    margin: auto;
    padding: 0 100px 50px 100px;
  }

  input {
    border-radius: 40px;
    background: #f2f2f2;
    box-shadow: 4px 4px 16px 0px rgba(1, 28, 64, 0.2);
    align-items: center;
    width: 100%;
    height: 53px;
    padding: 2px 20px;
    border: none;
  }
  .filter {
    display: flex;
    width: 80%;
    margin: auto;
    gap: 10px;
    align-items: center;
    padding: 0 0 0 80px;
  }
.dropdown {
  width: 135px;  
  //top right bottom left
  
  
}
.dropdown-btn-type {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
  >p {
    margin-left: 20px;
  }
  >svg {
    margin-right: 10px;
  }
}
  .dropdown-btn-atk {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  gap: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
  >p {
    margin-left: 20px;
  }
  >svg {
    margin-right: 10px;
  }
}
  .dropdown-btn-exp {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  gap: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
  >p {
    margin-left: 20px;
  }
  >svg {
    margin-right: 10px;
  }
}
  .content-card {
    width: 100%;   
    margin: auto;
    align-items: center;
    
  }
  .row{
    padding: 50px 100px 50px 100px;
  }

  /* @media only screen and (max-width: 768px) {
    .column {
      flex-basis: 100%;
    }
    .row {
      flex-wrap: wrap;
    }
  } */
`;
