import React from 'react';
import style from './Greeting.module.css';

const Greeting = ({ name, num }) => {
  return (
    <div className={style.greeting}>
      <h1>Hello world</h1>
      <h2>hello {name}</h2>
      hello <strong>{name}</strong>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>ContactUs</li>
        </ul>
      </div>
      <p>Doing Addition of 2 + 5 = {2 + num}</p>
    </div>
  );
};

export default Greeting;
