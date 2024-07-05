import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>;
      {props.meaning.definitons.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition[0].definition}
              <br />
              {definition[0].example}
            </p>
          </div>
        );
      })}
    </div>
  );
}
