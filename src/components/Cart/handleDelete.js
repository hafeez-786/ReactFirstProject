import React, {Component} from 'react'

handleDelete = item => {
  var newArr = [];
  const newState = this.props.documentation;
  for (var key in newState) {
    if (newState.hasOwnProperty(key)) {
      let data = newState[key];
      data.id = key;
      newArr.push(newState[key]);
    }
    const sliceArr = newArr.slice();
    if (sliceArr.indexOf(item) > -1) {
      sliceArr.slice(sliceArr.indexOf(item), 1);
    }
    console.log('New Array', sliceArr);
    this.setState({ data: sliceArr });
  }
};

export default handleDelete