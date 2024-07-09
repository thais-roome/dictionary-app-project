import React from "react";
import "./Phonetic.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Hear it
      </a>

      <br />
      {props.phonetic.text}
    </div>
  );
}
