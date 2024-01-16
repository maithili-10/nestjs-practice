

import { Input, Button, Row, Col, message } from "antd";
import { getTodos, addTodo, updateTodo, deleteTodo } from '../../services/api';
import {  useState } from "react";


const TodoCreateForm = ({ handleCancel , loadTodos,}) => {
  
  
  //states
  const [description, setDescription] = useState();
  

  //on form submit
  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      if (description.trim() === '') return;

      const addedTodo = await addTodo({
        description: description,
        status: false,
      });
  
      //if success
        message.success("added todo successfully")
        handleCancel();
       loadTodos();

    } catch (e) {
      var message1 = e.message;

      if (e?.status === 422) {
        message.error(e.data.message);
      }
    }
  }

  return (
    <div
      style={{
        width: "97%",
        height: "100%",
        justifyContent: "space-evenly",
      }}
    >
      <p
        style={{
          color: "#A5A5A5",
          fontSize: "14px",
          marginTop: "-1%",
          marginBottom: "3%",
        }}
      >
       Please fill info
      </p>
      <form onSubmit={onSubmit}>
        <div
          style={{
            marginLeft: "3%",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            marginRight: "-6%",
          }}
        >
          

       
          <Row>
            <Col span={12}>
              <label>
           Todo
                <span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <Input
                style={{
                  width: "186%",
                  borderRadius: "3px",
                  marginBottom: "5px",
                  marginTop: "5px",
                }}
                required
               
                placeholder="Enter Todo"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
               
              />
            </Col>
          </Row>
          <br />

          <div style={{ marginBottom: "10%", backgroundColor: "yellow" }}>
            <Button
              style={{
                borderRadius: "3px",
                backgroundColor: "#004A7F",
                color: "white",
                position: "absolute",
                right: "20%",
                top: "86%",
              }}
              htmlType="submit"
            >
            submit
            </Button>
            <Button
              style={{
                borderRadius: "3px",
                color: "#004A7F",
                position: "absolute",
                right: "8%",
                top: "86%",
              }}
              onClick={(e)=>{
               setDescription("")
                handleCancel();
              }}
            >
             Cancel
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoCreateForm;

