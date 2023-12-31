import React from 'react';
import Arrays from '../Components/Quiz/Arrays.js';

export default function AverageList(props) {
    return (
      <ul>
        {props.averages.map((average, index) => (
          <li key={index}>The average of array {index + 1} is {average}</li>
        ))}
      </ul>
    );
  }