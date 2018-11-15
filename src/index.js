console.warn('Welcome to webpack with react.');
console.log('process.env.VERSION', process.env.VERSION);
console.log('process.env.PLATFORM', process.env.PLATFORM);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);


import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

const App = () => {
    return (
        <blockquote>
            <p>
                <span>❝ </span>
                We are a most promising species, Mr. Spock, as predators go. <br />Did you know that? <br />I frequently
                have my doubts. <br />I dont. Not any more. And maybe in a thousand years or so, we will be able
                to prove it.
                <span> ❞</span>
            </p>
            <footer>
                <img className="badge" src="./src/Starfleet Instructor.ico" />
                <h3>Captain Kirk <cite>"Arena"</cite></h3>
                <a className="source-link" target="blank" href="https://medium.freecodecamp.org/how-to-combine-webpack-4-and-babel-7-to-create-a-fantastic-react-app-845797e036ff">source<span>↗</span></a>
            </footer>
            <img className="ship" src="./src/ENTERPRISE.109141612_std.png" />
        </blockquote>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));