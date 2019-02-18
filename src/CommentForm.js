import React, { Component } from 'react';
import {connect} from 'react-redux';

class CommentForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault(); //ให้คงอยู่หน้าเดิม
        const name = this.getName.value; //ดึงค่าจากตัวแปล getName
        const message = this.getMessage.value; //ดึงค่าจากตัวแปล getMessage
        //Object จัดเก็บข้อมูล
        const data = {
            id: new Date(),
            name,
            message,
            editing:false
        }
        this.props.dispatch({
            type:'ADD_COMMENT',
            data
        });

        this.getName.value="";  //เมื่อกด Submit ข้อมูลจะรีเซ็ต
        this.getMessage.value="";
        console.log(data);
    }

    render() {
        return (
            <div>
                <h1>Add Comment</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" placeholder="ป้อนชื่อ" ref={(input)=>this.getName = input} /><br /><br />
                    <textarea required row="" cols="28" placeholder="ข้อความ" ref={(input)=>this.getMessage = input} /><br /><br />
                    <button>Comment</button>
                </form>
            </div>
        );
    }
}
export default connect()(CommentForm);