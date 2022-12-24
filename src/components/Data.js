import React from "react"

function Data(props) {   
    return (
        <ul className="data">
            <li className="data-item">{props.props.date ? props.props.date : null}</li>
            <li className="data-item">{props.props.distance}</li>
            <li className="data-action">
                <div className="data-edit">
                    <button className="edit-button" name="edit" >&#9999;&#65039;</button>
                    <button className="delete-button" name="delete" onClick={props.delete}>&#10008;</button>
                </div>
            </li>
        </ul>
    )
}

export default Data