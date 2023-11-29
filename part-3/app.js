import React from 'react';
import Person from './person';

const app = () => {
  const people = [
    {
      name: 'John Doe',
      age: 25,
      hobbies: ['Reading', 'Hiking', 'Gaming'],
    },
    {
      name: 'Jane',
      age: 16,
      hobbies: ['Painting', 'Dancing'],
    },
    {
      name: 'Elizabeth Smith',
      age: 20,
      hobbies: ['Singing', 'Cooking', 'Photography'],
    },
  ];

  return (
    <div className="app">
      {people.map((person, index) => (
        <Person
          key={index}
          name={person.name}
          age={person.age}
          hobbies={person.hobbies}
        />
      ))}
    </div>
  );
};

export default app;
