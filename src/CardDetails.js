import React from 'react'

const CardDetails = () => {
    return (
        <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: 'url(https://getbootstrap.com/docs/5.1/examples/features/unsplash-photo-2.jpg)' }}>
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h2>
                    <ul className="d-flex list-unstyled mt-auto">
                        <li className="me-auto">
                            <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                        </li>
                        <li className="d-flex align-items-center me-3">

                            <small>Flower</small>
                        </li>
                        <li className="d-flex align-items-center">

                            <small>3d</small>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardDetails;