import React, { Component } from 'react';
import { postItem } from './postItem';
import CardItem from './cardItem';


class CardList extends Component {
cardsData: postItem[] =[
    {Id:'1dfsaf', Text:'Text1', CreatedBy:'Jay', CreatedDate: new Date()},
    {Id:'1dfsaf', Text:'teetastt', CreatedBy:'sam', CreatedDate: new Date()},
    {Id:'1dfsaf', Text:'Texteastatet1', CreatedBy:'Jay', CreatedDate: new Date()},
    {Id:'1dfsaf', Text:'taettesat', CreatedBy:'bob', CreatedDate: new Date()}
]

  render() {
    return (
      <div className="cards">
        {this.cardsData.map(c =>  <CardItem post={c}/>)}
      </div>
    );
  }
}

export default CardList;