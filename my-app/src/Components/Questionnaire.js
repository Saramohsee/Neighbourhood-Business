import React, { useEffect, useState } from 'react';

const Questionnaire = () => {
  const questions = [
    [1, 2, 3, 4, 5],  // Options for Question 1
    [1, 2, 3, 4, 5],  // Options for Question 2
    [1, 2, 3, 4, 5],  // Options for Question 3
    [1, 2, 3, 4, 5],  // Options for Question 4
    [1, 2, 3, 4, 5]   // Options for Question 5
  ];

  const [combinations, setCombinations] = useState([]);

  useEffect(() => {
    const generateCombinations = () => {
      const combinations = getCombinations(questions);
      setCombinations(combinations);
    };

    generateCombinations();
  }, []); // Empty dependency array ensures the effect runs once after initial render

  const getCombinations = (questions) => {
    const product = (...arrays) => arrays.reduce((acc, arr) => acc.flatMap(x => arr.map(y => [x, y].flat())), [[]]);

    return product(...questions);
  };

  return (
    <div>
      <h1>All Combinations</h1>
      <ul>
        {combinations.map((combination, index) => (
          <li key={index}>{JSON.stringify(combination)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Questionnaire;

