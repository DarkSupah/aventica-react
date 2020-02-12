import React from 'react';

const DraftItem = (props) => {
    const id = props.id;

    return(
        <li className="item">
            <span>{ props.text }</span>
            <div className="mt-4 btn-group d-flex w-100">
                <button type="button" className="btn btn-danger" onClick={ () => { props.removeDraft(id) } }>Remove</button>
                <button type="button" className="btn btn-outline-success" onClick={ () => { props.toSavedItem(id) } }>Save</button>
            </div>
        </li>
    )
};

export default DraftItem;