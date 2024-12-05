import { useState } from "react";
import React from "react";
import Score from './Score';

const Learner = (props) => {

  return (
    <>
      <div className="card text-white bg-secondary mb-3">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.body}
          </p>
        </div>
        <div className="card-body">
        <h4>Grades</h4>
        <Score scores={props.scores}/>
        </div>
      </div>
    </>
  );
};

export default Learner;
