console.warn('Welcome to webpack with react.');
console.log('process.env.VERSION', process.env.VERSION);
console.log('process.env.PLATFORM', process.env.PLATFORM);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);


import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';



class App extends React.Component {
    state = {
        CaptainKirkBio: {},
    };

    componentDidMount() {
        this.onGetKirkBio();
    }

    onGetKirkBio = async () => {
        try {
            const result = await fetch('http://stapi.co/api/v1/rest/character/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: {
                    title: 'James T. Kirk',
                    name: 'James T. Kirk',
                },
            });
            const resultJSON = await result.json();
            const character = resultJSON.characters[0];
            this.setState({ CaptainKirkBio: character });
        } catch (error) {
            console.log('error', error);
        }
    };

    render() {
        const { CaptainKirkBio } = this.state;
        return (
            <blockquote>
                <p>
                    <span>❝ </span>
                    We are a most promising species, Mr. Spock, as predators go. <br />Did you know that? <br />I frequently
                    have my doubts. <br />I dont. Not any more. And maybe in a thousand years or so, we will be able
                    to prove it.
                    <span> ❞</span>
                </p>
                <p className="hide">
                    <span>❝ </span>
                    You know the greatest danger facing us is ourselves, 
                    and irrational fear of the unknown. 
                    There is no such thing as the unknown. 
                    Only things temporarily hidden, 
                    temporarily not understood.
                    <span> ❞</span>
                </p>
                <footer>
                    < img className = "badge" src = "./dist/images/Starfleet Instructor.ico" / >
                    <h3>Captain Kirk <cite>"Arena"</cite></h3>
                    <section className="hide">
                        {Object.values(CaptainKirkBio).length === 0 ? (
                            <p>Loading User Information</p>
                        ) : (
                                <p style={{ wordBreak: 'break-all' }}>{JSON.stringify(CaptainKirkBio)}</p>
                        )}
                    </section>
                    <a className="source-link" target="blank" href="https://medium.freecodecamp.org/how-to-combine-webpack-4-and-babel-7-to-create-a-fantastic-react-app-845797e036ff">source<span>↗</span></a>
                </footer>
                <img className="ship" src="./dist/images/ENTERPRISE.109141612_std.png" />
            </blockquote>
        );
    }

};

ReactDOM.render(<App />, document.getElementById('app'));