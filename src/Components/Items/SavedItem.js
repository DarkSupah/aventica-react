import React from 'react';

const SavedItem = (props) => {
    const id = props.id;

    return(
        <li className="item saved-item">
            <span className={["indicator", props.marked ? "done" : "undone"].join(" ")}/>
            <span>{ props.text }</span>
            <div className="btn-group w-100 d-flex mt-2">
                <button type="button" className="btn btn-outline-secondary" onClick={ () => { props.toDraftItem(id) }}>Draft</button>
                <button type="button" className="btn btn-outline-info" onClick={ () => { props.changeMark(id) } }>Mark</button>
            </div>
        </li>
    )
}

export default SavedItem;