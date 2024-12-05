import { useState } from "react";
import React from "react";

const Score = (props) => {

  const scores = props.scores; 

  return (
    <>
    {
      scores.map((score) =>(
        <> 
        <div className="card text-white bg-secondary mb-1">
          <h5 className="card-text">{score.date}</h5>
          <p className="card-text">
            {score.score}
          </p>
      </div>
        </>
      ))
    }
    </>
  );
};

export default Score;
