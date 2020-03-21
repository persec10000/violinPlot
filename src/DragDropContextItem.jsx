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
  render() {
    const { onDragEnd, onDragStart, droppableId1, droppableId2, items1, items2, relatedContent, relatedlistContent } = this.props;
    return (
      <Container>
        <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
          <DroppableItem 
            droppableId={droppableId1} 
            items={items1} 
            relatedContent={relatedContent} 
            relatedlistContent={relatedlistContent}
          />
          <DroppableItem 
            droppableId={droppableId2} 
            items={items2} 
            relatedContent={relatedContent} 
            relatedlistContent={relatedlistContent}
          />
        </DragDropContext>
      </Container>
    );
  }
}

