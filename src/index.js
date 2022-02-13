import React from 'react'
import ReactDOM from 'react-dom'
import CardDetails from './CardDetails'

const App = () => {
    return (
        <div>
            <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">Custom cards</h2>

                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <CardDetails />
                    <CardDetails />
                    <CardDetails />
                </div>
            </div>

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));