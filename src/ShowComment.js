import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import EditComponet from './EditComponent';
class ShowComment extends Component {
    render() {
        return (
            <div>
                <h1>Show All Comment</h1>
                {this.props.comments.map((comment) => (
                    <div key={comment.id}>
                        {comment.editing ? <EditComponet comment={comment} key={comment.id} /> : 
                        <Comment key={comment.id} comment={comment} />}
                    </div>
                ))}
            </div>
            );
        }
    }
const mapStateToProps = (state) => {
    return {
                    comments: state
            }
        }
export default connect(mapStateToProps)(ShowComment);