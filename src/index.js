import React, { Component } from "react";
import ReactDOM from "react-dom";
import DragDropContextItem from "./DragDropContextItem";
// import '@atlaskit/css-reset';

import groups from "./groups"
let itemsArr = [];
let relatedArr = [];
let relatedlistArr = [];
Object.keys(groups).forEach((mainkey, mainpositionSelected) => {
  itemsArr[mainpositionSelected] = [];
  relatedArr[mainpositionSelected] = [];
  relatedlistArr[mainpositionSelected] = [];
  Object.keys(groups[mainkey]).forEach((key, positionSelected) => {
    itemsArr[mainpositionSelected][positionSelected] = [];
    relatedArr[mainpositionSelected][positionSelected] = [];
    relatedlistArr[mainpositionSelected][positionSelected] = [];
    Object.keys(groups[mainkey][key]).forEach((subkey) => {
      itemsArr[mainpositionSelected][positionSelected].push({ id: subkey, content: groups[mainkey][key][subkey].id});
      relatedArr[mainpositionSelected][positionSelected].push({id: subkey, content: groups[mainkey][key][subkey].itemsRelated});
      relatedlistArr[mainpositionSelected][positionSelected].push({id: subkey, content: groups[mainkey][key][subkey].getItemsRelated});
    });
  });
})

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

class App extends Component {
  state = {
    listGroup: itemsArr,
    related: relatedArr,
    relatedlist: relatedlistArr,
    relateObj: [],
    relatedlistObj: []
  };

  onDragEnd = (result, positionSelected) => {
    this.setState({relateObj: [], relatedlistObj: []})
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    let sourceSelected = source.droppableId.replace("droppableId", '');
    let destinationSelected = destination.droppableId.replace("droppableId", '');
    if (source.droppableId === destination.droppableId) {
      let listGroup = [];
      listGroup[sourceSelected] = itemsArr[sourceSelected];      
      listGroup[sourceSelected][positionSelected] = reorder(
        listGroup[sourceSelected][positionSelected],
        source.index,
        destination.index
      );
      this.setState(listGroup);
    }
    else {
        let sourceItem = [];
        let destinationItem = [];
        let relatedsourceItem = [];
        let relateddestinationItem = [];
        let relatedlistsourceItem = [];
        let relatedlistdestinationItem = [];
        sourceItem = this.state.listGroup[sourceSelected][positionSelected];
        destinationItem = this.state.listGroup[destinationSelected][positionSelected];
        relatedsourceItem = this.state.related[sourceSelected][positionSelected];
        relateddestinationItem = this.state.related[destinationSelected][positionSelected];
        relatedlistsourceItem = this.state.relatedlist[sourceSelected][positionSelected];
        relatedlistdestinationItem = this.state.relatedlist[destinationSelected][positionSelected];
      const result = move(
        sourceItem,
        destinationItem,
        source,
        destination
      );
      const relatedresult = move(
          relatedsourceItem,
          relateddestinationItem,
          source,
          destination
      ) 
      const relatedlistresult = move(
        relatedlistsourceItem,
        relatedlistdestinationItem,
        source,
        destination
    )
      let sourcedroppableId = `droppableId${sourceSelected}`;
      let destinationdroppableId = `droppableId${destinationSelected}`;
      this.state.listGroup[sourceSelected][positionSelected] = result[sourcedroppableId];
      this.state.listGroup[destinationSelected][positionSelected] = result[destinationdroppableId];
      this.state.related[sourceSelected][positionSelected] = relatedresult[sourcedroppableId];
      this.state.related[destinationSelected][positionSelected] = relatedresult[destinationdroppableId];
      this.state.relatedlist[sourceSelected][positionSelected] = relatedlistresult[sourcedroppableId];
      this.state.relatedlist[destinationSelected][positionSelected] = relatedlistresult[destinationdroppableId];
      this.setState({
        listGroup: this.state.listGroup,
        related: this.state.related,
        relatedlist: this.state.relatedlist,
      });
    }
  };

  onDragStart = (result, positionSelected) => {
    const {source} = result;
    let sourceSelected = source.droppableId.replace("droppableId", '');
    let relateObj = [];
    let relatedlistObj = [];
      relateObj = this.state.related[sourceSelected][positionSelected].filter((item) => {
        return item.id === result.draggableId
      })
      relatedlistObj = this.state.relatedlist[sourceSelected][positionSelected].filter((itemlist) => {
        return itemlist.id === result.draggableId
      })
    this.setState({relateObj: relateObj[0].content, relatedlistObj:relatedlistObj[0].content});
  }
  render() {
    const { listGroup, relateObj, relatedlistObj } = this.state;
    return (
      <React.Fragment>
        {itemsArr[0].map((item, positionSelected) => {
          return (
            <DragDropContextItem
              onDragEnd={result => this.onDragEnd(result, positionSelected)}
              onDragStart = {result => this.onDragStart(result, positionSelected)}
              items={listGroup}
              positionSelected= {positionSelected}
              relatedContent = {relateObj}
              relatedlistContent = {relatedlistObj}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
