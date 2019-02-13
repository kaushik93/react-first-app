import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ShoppingList extends React.Component {
    render(){
        return(
            <div className="shopping-list">
            <h1>Shoping List for{this.props.name}</h1>
            <ul>
                <li>Insta</li>
                <li>Whatsapp</li>
                <li>Facebook</li>
            </ul>
            </div>
        );
    }
}
ReactDOM.render(
    <ShoppingList/>,
    document.getElementById('root')
  );
  