import React, {Component} from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar'
import Header from "./Components/Header/Header";
import SavedItems from './Components/SavedItems/Saveditems'

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            draftItems: [],
            savedItems: [],

            cardName: "",
        };

        this.removeDraft = this.removeDraft.bind(this);

        this.setCardName = this.setCardName.bind(this);
        this.createItem = this.createItem.bind(this);
        this.getCardName = this.getCardName.bind(this);

        this.changeMark = this.changeMark.bind(this);
        this.countMarkedItems = this.countMarkedItems.bind(this);

        this.toSavedItem = this.toSavedItem.bind(this);
        this.toDraftItem = this.toDraftItem.bind(this);

        this.changeDraftName = this.changeDraftName.bind(this);
    }

    changeDraftName(text, id){
        this.setState({
            draftItems: this.state.draftItems.map( item => {
                if(item.id === id){
                    item.text = text;
                }

                return item;
            })
        })
    }

    changeMark(id){
        this.setState({
            savedItems: this.state.savedItems.map(item => {
                if(item.id === id){
                    item.marked = !item.marked;
                }

                return item;
            }),
        });
    }

    countMarkedItems(){
        let count = 0;

        this.state.savedItems.map( item => {
            if(item.marked){
                count++;
            }

            return null;
        });

        return count;
    }

    removeSaved(id){
        this.setState({
            savedItems: this.state.savedItems.filter(item => item.id !== id),
        });
    }

    toSavedItem(id){
        let item = this.state.draftItems.find( ( item ) => { return (item.id === id) } );

        this.removeDraft(item.id);

        this.setState({
            savedItems: [...this.state.savedItems, item],
        })
    }

    toDraftItem(id){
        let item = this.state.savedItems.find( ( item ) => { return (item.id === id) } );
        item.marked = false;

        this.removeSaved(item.id);

        this.setState({
            draftItems: [...this.state.draftItems, item],
        })
    }

    removeDraft(id){
        this.setState({
            draftItems: this.state.draftItems.filter(item => item.id !== id),
        });
    }

    setCardName(cardName){
        this.setState({
            cardName,
        });
    }

    getCardName(){
        return this.state.cardName;
    }

    createItem(id, text, type){
        if(text.length === 0){
            return;
        }

        let item = {
            id,
            text,
        };

        this.setState({
            cardName: ""
        })

        if(type === "draft"){
            this.setState({
                draftItems: [...this.state.draftItems, item],
            });
        }
        else{
            this.setState({
                savedItems: [...this.state.savedItems, item],
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <Header countMarkedItems = { this.countMarkedItems }/>
                    <div className="row">
                        <div className="col-md-3">
                            <Sidebar cardName = { this.state.cardName }
                                     createItem = { this.createItem }
                                     setCardName = { this.setCardName }
                                     removeDraft = { this.removeDraft }
                                     draftItems = { this.state.draftItems }
                                     getCardName = { this.getCardName }
                                     toSavedItem = { this.toSavedItem }
                                     changeDraftName = { this.changeDraftName }
                            />
                        </div>
                        <div className="col-md-9">
                            <SavedItems savedItems={ this.state.savedItems }
                                        changeMark = { this.changeMark }
                                        toDraftItem = { this.toDraftItem }
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
