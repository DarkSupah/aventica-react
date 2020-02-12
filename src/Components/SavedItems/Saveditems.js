import React from 'react';
import SavedItem from '../Items/SavedItem'

const SavedItems = (props) => {

    return(
        <div className="panel">
            <h3>Saved items</h3>
            <ul className="saved-items">
                { props.savedItems.length === 0 ? <p className="text-center">No saved items!</p> : ""}
                { props.savedItems.map(item => {
                    return(
                        <SavedItem id = { item.id }
                                   text = { item.text }
                                   marked = { item.marked }
                                   changeMark = { id => props.changeMark(id) }
                                   toDraftItem = { props.toDraftItem }
                                   key={ item.id }
                        />
                    )
                }) }
            </ul>
        </div>
    )
};

export default SavedItems;