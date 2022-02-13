import React from 'react'

const MaintainCards = (props) => {
    return (
        <div>
            {props.children}
            <div style={{ marginTop: 10 }}>
                <a className="btn btn-primary m-2" href="#" role="button">Link</a>
                <a className="btn btn-primary" href="#" role="button">Link</a>
            </div>
        </div>
    )
}

export default MaintainCards