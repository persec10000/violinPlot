import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DroppableItem from "./DroppableItem";

import styled from "styled-components";
// import '@atlaskit/css-reset';

const Container = styled.div`
  display: flex;
  //    justify-content: center;
  align-items: center;
`;



export default class App extends Component {
  componentDidMount(){
  }
  render() {
    const { onDragEnd, onDragStart, positionSelected, items, relatedContent, relatedlistContent } = this.props;
    return (
      <Container>
        <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
          {items.map((item,selectedId) => 
            <DroppableItem 
              droppableId={`droppableId${selectedId}`}
              selectedId={selectedId} 
              items={item[positionSelected]} 
              relatedContent={relatedContent} 
              relatedlistContent={relatedlistContent}
            />
          )}
        </DragDropContext>
      </Container>
    );
  }
}

