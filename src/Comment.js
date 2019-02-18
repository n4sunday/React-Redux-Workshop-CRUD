import React, { Component } from 'react';
import {connect} from 'react-redux';
class Comment extends Component {
    render(){
        return (
            <div>
                <h2>{this.props.comment.name}</h2>
                <p>{this.props.comment.message}</p>
                
                <button onClick={()=>this.props.dispatch({type:'EDIT_COMMENT',id:this.props.comment.id})}>Edit</button>
                <button onClick={()=>this.props.dispatch({type:'DELETE_COMMENT',id:this.props.comment.id})}>Delete</button>
            </div>
        );
    }
}
export default connect()(Comment);