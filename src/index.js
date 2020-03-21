import React, { Component } from "react";
import ReactDOM from "react-dom";
import DragDropContextItem from "./DragDropContextItem";
// import '@atlaskit/css-reset';

import groups from "./groups"

let itemsArr1 = [];
let relatedArr1 = [];
let relatedlistArr1 = [];
// Object.keys(groups).foreach((mainkey, position) => {
  Object.keys(groups.violinPlot1).forEach((key, positionSelected) => {
    itemsArr1[positionSelected] = [];
    relatedArr1[positionSelected] = [];
    relatedlistArr1[positionSelected] = [];
    Object.keys(groups.violinPlot1[key]).forEach((subkey) => {
      itemsArr1[positionSelected].push({ id: subkey, content: groups.violinPlot1[key][subkey].id});
      relatedArr1[positionSelected].push({id: subkey, content: groups.violinPlot1[key][subkey].itemsRelated});
      relatedlistArr1[positionSelected].push({id: subkey, content: groups.violinPlot1[key][subkey].getItemsRelated});
    });
  });
// })
let itemsArr2 = [];
let relatedArr2 = [];
let relatedlistArr2 = [];
Object.keys(groups.violinPlot2).forEach((key, positionSelected) => {
  itemsArr2[positionSelected] = [];
  relatedArr2[positionSelected] = [];
  relatedlistArr2[positionSelected] = [];
  Object.keys(groups.violinPlot2[key]).forEach((subkey) => {
    itemsArr2[positionSelected].push({ id: subkey, content: groups.violinPlot2[key][subkey].id});
    relatedArr2[positionSelected].push({id: subkey, content: groups.violinPlot2[key][subkey].itemsRelated});
    relatedlistArr2[positionSelected].push({id: subkey, content: groups.violinPlot2[key][subkey].getItemsRelated});
  });
});

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
    listGroup1: itemsArr1,
    listGroup2: itemsArr2,
    related1: relatedArr1,
    related2: relatedArr2,
    relatedlist1: relatedlistArr1,
    relatedlist2: relatedlistArr2,
    relateObj: [],
    relatedlistObj: []
  };
  id2List = {
    maindroppable: "listGroup1",
    subdroppable: "listGroup2"
  };

  getList = id => this.state[this.id2List[id]];

  onDragEnd = (result, positionSelected) => {
    this.setState({relateObj: [], relatedlistObj: []})
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      let listGroup1 = [];
      if (source.droppableId.includes("subdroppable")) {
        listGroup1 = itemsArr2;
      } else {
        listGroup1 = itemsArr1;
      }
      listGroup1[positionSelected] = reorder(
        listGroup1[positionSelected],
        source.index,
        destination.index
      );
      let state = { listGroup1 };
      if (source.droppableId.includes("subdroppable")) {
        state = { listGroup2: listGroup1 };
      }
      this.setState(state);
    }
    else {
        let sourceItem = [];
        let destinationItem = [];
        let relatedsourceItem = [];
        let relateddestinationItem = [];
        let relatedlistsourceItem = [];
        let relatedlistdestinationItem = [];
        if (source.droppableId.includes('subdroppable')){
            sourceItem = this.state.listGroup2[positionSelected];
            destinationItem = this.state.listGroup1[positionSelected];
            relatedsourceItem = this.state.related2[positionSelected];
            relateddestinationItem = this.state.related1[positionSelected];
            relatedlistsourceItem = this.state.relatedlist2[positionSelected];
            relatedlistdestinationItem = this.state.relatedlist1[positionSelected];
        }
        else {
            sourceItem = this.state.listGroup1[positionSelected];
            destinationItem = this.state.listGroup2[positionSelected];
            relatedsourceItem = this.state.related1[positionSelected];
            relateddestinationItem = this.state.related2[positionSelected];
            relatedlistsourceItem = this.state.relatedlist1[positionSelected];
            relatedlistdestinationItem = this.state.relatedlist2[positionSelected];
        }
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
      let movedroppableId1 = `maindroppable${positionSelected}`;
      let movedroppableId2 = `subdroppable${positionSelected}`;
      this.state.listGroup1[positionSelected] = result[movedroppableId1];
      this.state.listGroup2[positionSelected] = result[movedroppableId2];
      this.state.related1[positionSelected] = relatedresult[movedroppableId1];
      this.state.related2[positionSelected] = relatedresult[movedroppableId2];
      this.state.relatedlist1[positionSelected] = relatedlistresult[movedroppableId1];
      this.state.relatedlist2[positionSelected] = relatedlistresult[movedroppableId2];
      this.setState({
        listGroup1: this.state.listGroup1,
        listGroup2: this.state.listGroup2,
        related1: this.state.related1,
        related2: this.state.related2,
        relatedlist1: this.state.relatedlist1,
        relatedlist2: this.state.relatedlist2
      });
    }
  };

  onDragStart = (result, positionSelected) => {
      const {source} = result;
      let relateObj = [];
      let relatedlistObj = [];
      console.log(result)
      if (source.droppableId.includes('subdroppable')){
        relateObj = this.state.related2[positionSelected].filter((item) => {
          return item.id === result.draggableId
        })
        relatedlistObj = this.state.relatedlist2[positionSelected].filter((itemlist) => {
          return itemlist.id === result.draggableId
        })
      }
      else {
        relateObj = this.state.related1[positionSelected].filter((item) => {
          return item.id === result.draggableId
        })
        relatedlistObj = this.state.relatedlist1[positionSelected].filter((itemlist) => {
          return itemlist.id === result.draggableId 
        })
      }
      console.log('relateObj',relateObj)
      console.log('relatedlistObj',relatedlistObj)
    this.setState({relateObj: relateObj[0].content, relatedlistObj:relatedlistObj[0].content});
  }
  render() {
    const { listGroup1, listGroup2, relateObj, relatedlistObj } = this.state;
    return (
      <React.Fragment>
        {itemsArr1.map((item, positionSelected) => {
          return (
            <DragDropContextItem
              // key={item}
              onDragEnd={result => this.onDragEnd(result, positionSelected)}
              onDragStart = {result => this.onDragStart(result, positionSelected)}
              droppableId1={`maindroppable${positionSelected}`}
              items1={listGroup1[positionSelected]}
              droppableId2={`subdroppable${positionSelected}`}
              items2={listGroup2[positionSelected]}
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
