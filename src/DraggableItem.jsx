import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

const getItemStyle = (isDragging, draggableStyle, hightlight, hightlightlist) => ({
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  background: isDragging ? 'lightgreen' : hightlight||hightlightlist? 'yellow':'grey',
  ...draggableStyle
});

const grid = 8;
export default class DraggableItem extends Component{ 
  render(){
    const {item, positionSelected, relatedContent, relatedlistContent} = this.props;
    let hightlightArr = [];
    relatedlistContent.map((listitem) => {
      Object.keys(listitem).forEach((key) => {
        Object.keys(listitem[key]).forEach((subkey) => {
          hightlightArr.push(listitem[key][subkey].id)
        })
      })
    })
    return (
      <Draggable
        key={item}
        draggableId={item.id}
        index={positionSelected}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getItemStyle(
                snapshot.isDragging,
                provided.draggableProps.style,
                relatedContent.includes(item.content),
                hightlightArr.includes(item.content)
            )}>
            {item.content}
          </div>
        )}
      </Draggable>
    )
  }
}