import React, {Component} from 'react';
import {items} from '../data';
import styled from 'styled-components';
const StyledItem = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
`;
const StyledItemsWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  .filter {
    display: inline-block;
    margin: 10px 10px;
    &:hover{
      cursor: pointer;
    }
  }
`;

class Items extends Component {
  state = {
    items: items
  }

  getItemsByType = (iType) =>{

    if(iType !="All")
    {
      const filtered = items.filter(item => item.type == iType);
    this.setState({
      items: filtered
    })
    }else {
      this.setState({
        items: items
      })
    }
  }

  render() {
    return (
      <StyledItemsWrapper>
        <div>
          <p className="filter" onClick={() => this.getItemsByType("All")}>All</p>
          <p className="filter" onClick={() => this.getItemsByType("Sword")}>Sword</p>
          <p className="filter" onClick={() =>this.getItemsByType("Resource")}>Resources</p>
          <p className="filter" onClick={() =>this.getItemsByType("Food")}>Food</p>
          <p className="filter" onClick={() => this.getItemsByType("Drink")}>Drink</p>
          <p className="filter" onClick={() => this.getItemsByType("Throwing spear")}>Throwing spears</p>
        </div>
        {this.state.items.map(item => (
         <StyledItem key={item.itemID}>
           {item.itemID} {item.item_title} {item.stackable ? 'Stackable' : 'Non-stackable'}

         </StyledItem>
          )
        )}
      </StyledItemsWrapper>
    );
  }
}

export default Items;