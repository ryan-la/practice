import React from "react"

import Joke from "./Joke.js"
import jokesData from "./ListOfJokes.js"


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Ryan's Jokes",
            isLoggedIn: true,
            count: 0
        }
        //Use for setstate
        this.handleClick = this.handleClick.bind(this)
    }

    //When method is part of class, you have to use "this" but dont have to use the word function
    hoverOver() {
        alert("Oh boy!")
    }

    handleClick() {
        // this.setState({count:1})
        //use prevState because we dont want to change the this.state.count completely
        this.setState((prevState) => {
            return {
                //prevState access the old version of state, an object, but we specifically want the count
                count: prevState.count + 1
            }
        })
    }

    render() {
        let wordDisplay;
        if (this.state.isLoggedIn === true) {
            wordDisplay = "in";
        }
        else {
            wordDisplay = "out"
        }

        const jokeComponent = jokesData.map((joke) => {
            return (
                <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
            )
        })

        // when method is inside of render or outside of class do not need to add "this"
        // function hoverOver() {
        //     alert("Oh boy!")
        // }


        return (
            <div>
                <h1 style={{ color: "red" }}>You are currently logged {wordDisplay} </h1>
                <img alt="Man yelling" onMouseOver={this.hoverOver} src="https://www.fillmurray.com/200/100" />
                <br />
                <br />

                <h1 style={{ color: "blue" }}>Counter Button!</h1>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
                <br />

                <h1 style={{ color: "green" }}>Title: {this.state.title}</h1>
                {jokeComponent}

            </div>
        )
    }
}

export default App;