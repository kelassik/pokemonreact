import React from "react";
import { styled } from "styled-components";

const Card=({pokemon, loading})=> {
  return (
      <Appstyle>
        {loading ? (
          <h1>Loading ...</h1>
        ) : (
          pokemon.map((item) => {
            return(    
             <div className="card" key={item.id}>
                <div className="left-contain">
                  <h1 >{item.name}</h1>
                  <div className="ability-numb">
                    <h4>{item.base_experience}</h4>
                    <h4>{item.stats[0].base_stat}</h4>
                  </div>
                  <div className="ability">
                    <h4>Attack</h4>
                    <h4>Deffence</h4>
                  </div>
                  <div className="btn-ability">
                    <button>Grass</button>
                    <button>Poison</button>
                  </div>
                </div>
                <div className="right-contain">
                  <img src={item.sprites.front_default} alt="" />
                </div>
              </div>
            );
          })
        )}
      </Appstyle>
  );
};

export default Card;
const Appstyle = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
gap: 20px;
padding: 20px;

.card {
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    width: 350px;
  }

.left-contain {
    background-color: #f2f2f2;
    border-radius: 5px 0 0 5px;

    > h1 {
      text-align: center;
      margin: 0;
    }
  }
.left-contain .ability-numb {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 10px;
    > h4:nth-child(1) {
      border: 5px solid;
      padding: 10px;
      border-radius: 50%;
      margin: 0;
    }
    > h4:nth-child(2) {
      border: 5px solid;
      padding: 10px;
      border-radius: 50%;
      margin: 0;
    }
  }
  .left-contain .ability {
    display: flex;
    justify-content: space-between;
    padding: 10px;

    > h4:nth-child(1) {
      margin: 0;
    }
    > h4:nth-child(2) {
      margin: 0;
    }
  }
  .left-contain .btn-ability {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 5px;
    margin-bottom: 5px;

    > button:nth-child(1) {
      outline: none;
      border: none;
      width: 70px;
      font-size: 17px;
      color: black;
      padding: 0 1px;
      background-color: #73d677;
      border-radius: 8px;
    }
    > button:nth-child(2) {
      outline: none;
      border: none;
      width: 70px;
      font-size: 15px;
      color: black;
      padding: 0 1px;
      background-color: #07d6f2;
      border-radius: 8px;
    }
  }
  .right-contain {
    
    > img {
      object-fit: cover;
      border-radius: 0 5px 5px 0;
      align-content: center;
    }
  }
`
