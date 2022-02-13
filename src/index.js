import React from 'react'
import ReactDOM from 'react-dom'
import CardDetails from './CardDetails'
import MaintainCards from './maintainCards'

const App = () => {
    return (
        <div>
            <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">Custom cards</h2>

                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <MaintainCards>
                        <CardDetails cardImageUrl="https://getbootstrap.com/docs/5.1/examples/features/unsplash-photo-2.jpg" cardTitle="First Card" writtenAt="3d" cardType="flower" />
                    </MaintainCards>
                    <MaintainCards>
                        <CardDetails cardImageUrl="https://getbootstrap.com/docs/5.1/examples/features/unsplash-photo-2.jpg" cardTitle="First Card" writtenAt="3d" cardType="flower" />
                    </MaintainCards>
                    <MaintainCards>
                        <CardDetails cardImageUrl="https://getbootstrap.com/docs/5.1/examples/features/unsplash-photo-2.jpg" cardTitle="First Card" writtenAt="3d" cardType="flower" />
                    </MaintainCards>

                </div>
            </div>

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));