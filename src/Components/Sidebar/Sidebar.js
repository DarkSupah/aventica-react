import React from 'react';
import DraftItem from '../Items/DraftItem'

const Sidebar = (props) => {
    return(
        <div className="wrapper">
            <form className="p-2 panel">
                <input className="form-control" type="text" value={ props.cardName } placeholder="Input" name="item-name" onChange={ e => { props.setCardName(e.target.value) } }/>
                <div className="btn-group d-flex w-100 mt-2">
                    <button type="button" className="btn btn-outline-secondary" onClick={ () => { props.createItem(Date.now().toString(16), props.getCardName(), "draft") }}>Draft</button>
                    <button type="button" className="btn btn-success" onClick={ () => { props.createItem(Date.now().toString(16), props.getCardName(), "saved") } }>Save</button>
                </div>
            </form>
            <div className="draft-container panel">
                <h3>Draft items</h3>
                { props.draftItems.length === 0 ? <p className="text-center">No draft items!</p> : "" }
                <ul>
                    { props.draftItems.map((item) => {
                        return <DraftItem key={ item.id }
                                          text={item.text}
                                          id={ item.id }
                                          removeDraft={ props.removeDraft }
                                          toSavedItem = { props.toSavedItem }
                        />
                    }) }
                </ul>
            </div>
        </div>
    )
};

export default Sidebar;