import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import DragableItem from './DraggableItem'
import styled from 'styled-components';
import groups from './groups'

const grid = 8;
const getListStyle = (isDraggingOver, highlightback) => ({
  background: isDraggingOver ? 'lightblue' : highlightback?'red':'lightgrey',
  display: 'flex',
  padding: grid,
  margin : '20px',
});
const Content = styled.div`
    border: ${props => props.value ? '1px solid lightred':'1px solid lightgrey'};
    border-radius: 2px;
    padding: 5px;
    margin-bottom: 8px;
    border-radius: 50%;
    width: 65px;
    height: 50px;
    justify-content: center;
    align-items: center;
    `
       
export default class DroppableItem extends Component{ 
  render(){
    let {droppableId, items, selectedId, relatedContent, relatedlistContent} = this.props;
    let compare = '10';
    if (relatedlistContent[0] !== undefined){
      compare = relatedlistContent[0].replace('violinPlot', '')
    } 
    return (
      <Droppable droppableId={droppableId} direction="horizental">
        {(provided, snapshot) => (
          
          <div
            ref={provided.innerRef}
            style={getListStyle(
              snapshot.isDraggingOver,
              compare == selectedId+1 ? true:false
              )}>
            {items.map((item, positionSelected) => (
              <React.Fragment key={item.id}>
                <Content value={compare == selectedId+1 ? true:false}>
                  <DragableItem 
                    item={item}
                    positionSelected={positionSelected} 
                    relatedContent={relatedContent} 
                    relatedlistContent={relatedlistContent}/>
                </Content>
              </React.Fragment>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    )
  }
}