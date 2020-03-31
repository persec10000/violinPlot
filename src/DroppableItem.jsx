import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import DragableItem from './DraggableItem'
import styled from 'styled-components';
import groups from './groups'

const grid = 8;
const getListStyle = (isDraggingOver, highlightback) => ({
  // console.log("hegggggg", highlightback)
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
  isExist = (selId, list) => {
    console.log("selId", selId, list)
    var i=0;
    for(i=0; i<list.length; i++){
      if(list[i] == selId+ 1){
        break;
      }
    }
    if(i==list.length) return false;
    return true;
  }

  render(){
    let {droppableId, items, selectedId, relatedContent, relatedlistContent} = this.props;
    console.log(relatedlistContent)
    let compare = [];
    if (relatedlistContent !== undefined){
      relatedlistContent.map((element, key) => {
        return compare[key] = element.replace('violinPlot', '')
      })
    }
    compare.length>0&&
   
    console.log("compare", compare) 
    return (
      <Droppable droppableId={droppableId} direction="horizental">
        {(provided, snapshot) => (

          <div
            ref={provided.innerRef}
            style={getListStyle(
              snapshot.isDraggingOver,
              compare.length>0&& this.isExist(selectedId, compare)
              )}>
            {items.map((item, positionSelected) => (
              <React.Fragment key={item.id}>
                <Content 
                  value={
                    compare.length>0&& this.isExist(selectedId, compare)}
                  >
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