const groups = {
  violinPlot1: {
    index1: {
      item0: {
        id: "item 0",
        itemsRelated: ["item 5", "first 9", "second 3"],
        getItemsRelated: ['violinPlot2']
      },
      item1: {
        id: "item 1",
        itemsRelated: ["item 4", "first 9", "first 5", "second 7", "second 8"],
        getItemsRelated: ['violinPlot1']
      },
      item2: {
        id: "item 2",
        itemsRelated: ["item 3", "first 1", "second 9"],
        getItemsRelated: ['violinPlot3']
      },
      item3: {
        id: "item 3",
        itemsRelated: ["item 1", "first 6", "first 7", "second 8"],
        getItemsRelated: ['violinPlot4']
      },
      item4: {
        id: "item 4",
        itemsRelated: ["item 2", "first 2", "second 2", "second 7", "second 7"],
        getItemsRelated: ['violinPlot2']
      }
    },
    index2: {
      first0: {
        id: "first 0",
        itemsRelated: ["item 5", "first 9", "second 3"],
        getItemsRelated: ['violinPlot2']
      },
      first1: {
        id: "first 1",
        itemsRelated: ["item 2", "first 3", "second 4", "first 10", "second 1"],
        getItemsRelated: ['violinPlot2']
      },
      first2: {
        id: "first 2",
        itemsRelated: ["item 5", "first 9", "second 3"],
        getItemsRelated: ['violinPlot2']
      },
      first3: {
        id: "first 3",
        itemsRelated: ["item 2", "first 1", "second 6"],
        getItemsRelated: ['violinPlot2']
      },
      first4: {
        id: "first 4",
        itemsRelated: ["item 5", "first 5", "second 3", "second 6"],
        getItemsRelated: ['violinPlot2']
      },
      first5: {
        id: "first 5",
        itemsRelated: ["item 5", "first 9", "second 3"],
        getItemsRelated: ['violinPlot2']
      }
    },
    index3: {
      second0: {
        id: "second 0",
        itemsRelated: ["item 5", "first 9", "second 3"],
        getItemsRelated: ['violinPlot2']
      },
      second1: {
        id: "second 1",
        itemsRelated: ["item 5", "first 1", "second 5"],
        getItemsRelated: ['violinPlot2']
      },
      second2: {
        id: "second 2",
        itemsRelated: ["item 4", "first 8", "second 4"],
        getItemsRelated: ['violinPlot2']
      },
      second3: {
        id: "second 3",
        itemsRelated: ["item 5", "first 9", "second 1"],
        getItemsRelated: ['violinPlot2']
      },
      second4: {
        id: "second 4",
        itemsRelated: ["item 5", "first 9", "second 3"],
        getItemsRelated: ['violinPlot2']
      }
    }
  },
  violinPlot2: {
    index1: {
      item5: {
        id: "item 5",
        itemsRelated: ["item 3", "first 3", "second 3"],
        getItemsRelated: ['violinPlot2']
      },
      item6: {
        id: "item 6",
        itemsRelated: ["item 7", "first 10", "second 1"],
        getItemsRelated: ['violinPlot2']
      },
      item7: {
        id: "item 7",
        itemsRelated: ["item 8", "first 1", "second 8", "second 1"],
        getItemsRelated: ['violinPlot1']
      }
    },
    index2: {
      first6: {
        id: "first 6",
        itemsRelated: ["item 5", "first 9", "second 3", "second 6"],
        getItemsRelated: ['violinPlot1']
      },
      first7: {
        id: "first 7",
        itemsRelated: ["item 5", "first 9", "second 3"],
        getItemsRelated: ['violinPlot1']
      },
      first8: {
        id: "first 8",
        itemsRelated: ["item 5", "first 9", "second 3"],
        getItemsRelated: ['violinPlot1']
      },
      first9: {
        id: "first 9",
        itemsRelated: ["item 5", "first 1", "second 3"],
        getItemsRelated: ['violinPlot1']
      }
    },
    index3: {
      second5: {
        id: "second 5",
        itemsRelated: ["item 5", "first 9", "second 12"],
        getItemsRelated: ['violinPlot1']
      },
      second6: {
        id: "second 6",
        itemsRelated: ["item 10", "first 9", "second 11"],
        getItemsRelated: ['violinPlot1']
      },
      second7: {
        id: "second 7",
        itemsRelated: ["item 13", "first 9", "second 7"],
        getItemsRelated: ['violinPlot1']
      },
      second8: {
        id: "second 8",
        itemsRelated: ["item 11", "first 9", "second 8"],
        getItemsRelated: ['violinPlot1']
      }
    }
  },
  violinPlot3: {
    index1: {
      item8: {
        id: "item 8",
        itemsRelated: ["item 5", "first 9", "second 3"],
        getItemsRelated: ['violinPlot1']
      },
      item9: {
        id: "item 9",
        itemsRelated: ["item 5", "first 9", "second 3", "second 1"],
        getItemsRelated: ['violinPlot2']
      },
      item10: {
        id: "item 10",
        itemsRelated: ["item 8", "first 1", "second 8", "second 1"],
        getItemsRelated: ['violinPlot4']
      },
      item11: {
        id: "item 11",
        itemsRelated: ["item 13", "first 9", "second 3"],
        getItemsRelated: ['violinPlot3']
      }
    },
    index2: {
      first10: {
        id: "first 10",
        itemsRelated: ["item 5", "first 13", "second 3", "second 6"],
        getItemsRelated: ['violinPlot1']
      },
      first11: {
        id: "first 11",
        itemsRelated: ["item 5", "first 9", "second 3"],
        getItemsRelated: ['violinPlot2']
      },
      first12: {
        id: "first 12",
        itemsRelated: ["item 5", "first 9", "second 3"],
        getItemsRelated: ['violinPlot4']
      },
      first13: {
        id: "first 13",
        itemsRelated: ["item 5", "first 1", "second 3"],
        getItemsRelated: ['violinPlot1']
      }
    },
    index3: {
      second9: {
        id: "second 9",
        itemsRelated: ["item 5", "first 9", "second 3"],
        getItemsRelated: ['violinPlot3']
      },
      second10: {
        id: "second 10",
        itemsRelated: ["item 5", "first 9", "second 3"],
        getItemsRelated: ['violinPlot2']
      },
      second11: {
        id: "second 11",
        itemsRelated: ["item 5", "first 9", "second 3"],
        getItemsRelated: ['violinPlot1']
      }
    }
  },
  violinPlot4: {
    index1: {
      item12: {
        id: "item 12",
        itemsRelated: ["item 5", "first 9", "second 3"],
        getItemsRelated: ['violinPlot2']
      },
      item13: {
        id: "item 13",
        itemsRelated: ["item 5", "first 9", "second 3", "second 1"],
        getItemsRelated: ['violinPlot4']
      },
      item14: {
        id: "item 14",
        itemsRelated: ["item 8", "first 1", "second 8", "second 1"],
        getItemsRelated: ['violinPlot2']
      }
    },
    index2: {
      first14: {
        id: "first 14",
        itemsRelated: ["item 5", "first 9", "second 11", "second 6"],
        getItemsRelated: ['violinPlot1']
      },
      first15: {
        id: "first 15",
        itemsRelated: ["item 5", "first 9", "second 3"],
        getItemsRelated: ['violinPlot1']
      }
    },
    index3: {
      second12: {
        id: "second 9",
        itemsRelated: ["item 5", "first 9", "second 3"],
        getItemsRelated: ['violinPlot4']
      },
      second13: {
        id: "second 10",
        itemsRelated: ["item 5", "first 9", "second 3"],
        getItemsRelated: ['violinPlot2']
      },
      second14: {
        id: "second 11",
        itemsRelated: ["item 5", "first 9", "second 3"],
        getItemsRelated: ['violinPlot1']
      }
    }
  }
};

export default groups;
