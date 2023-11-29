import React from 'react';

const person = (props) => {
    const {name, age, hobbies } = props;
    const displayAgeInfo = age >= 18 ? <h3>Please go vote!</h3> : <h3>You must be 18</h3>;
    const displayName = name.length > 8 ? name.substring(0, 6) : name;

    return (
        <div className="person">
        <p>Learn some information about this person</p>
        <h2>{displayName}</h2>
        {displayAgeInfo}
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div> 
    );
};

export default person;
