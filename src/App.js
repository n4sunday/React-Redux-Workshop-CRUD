import React, { Component } from 'react';
import CommentForm from './CommentForm';
import ShowComment from './ShowComment';

class App extends Component {
  render() {
    return (
      <div>
        Hello World
        <CommentForm/>
        <ShowComment/>
      </div>
    );
  }
}
export default App;
