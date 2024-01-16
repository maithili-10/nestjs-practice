

import {
    Button,
    Row,
    Col,
    message
  } from "antd";
import { deleteTodo } from "../../services/api";
  
  
  const TodoDeleteForm = ({ handleCancel,rowdata,loadTodos}) => {
   
    
    var id = rowdata.id;
    //states
    
  
    //on form submit
    const onSubmit = async (e) => {
        await deleteTodo(id);
        message.success("Successfully deleted todo")
    
    };
  
    return (
      <div
        style={{
          width: "97%",
          height: "100%",
          justifyContent: "space-evenly",
        }}
      >
        
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
              <Col span={24}>
              <h4 style={{color:"black"}}>Do you want to delete todo?</h4> 
              </Col>
            </Row>
  
            <div style={{ marginBottom: "10%", backgroundColor: "yellow" }}>
             
              <Button
                style={{
                  borderRadius: "3px",
                  color: "#405088",
                  position: "absolute",
                  right: "8%",
                  top: "78%",
                  bottom:"3%"
                }}
                onClick={handleCancel}
              >
             Cancel
              </Button>
              <Button
                style={{
                  borderRadius: "3px",
                  backgroundColor: "red",
                  color: "white",
                  position: "absolute",
                  right: "35%",
                  top: "78%",
                  bottom:"3%"
                }}
                htmlType="submit"
              >
              Delete
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  };
  
  export default TodoDeleteForm;
  
