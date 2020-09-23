import React from "react"

function Joke({ question, punchLine }) {
    return (
        <div>
            <h3 >Question: {question}</h3>
            <h3 >Answer: {punchLine}</h3>
            <hr />
        </div>
    )
}

export default Joke