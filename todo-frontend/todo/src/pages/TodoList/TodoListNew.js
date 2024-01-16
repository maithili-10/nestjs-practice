import { useState, useEffect } from "react";
import { Card, Row, Col, Button, Modal } from "antd";
import "../../styles/ButtonStyle.css";
import {  useNavigate } from "react-router-dom";
import TodoListTable from './TodoListTable';
import TodoCreateForm from "./TodoCreateForm";
import { getTodos } from '../../services/api';

const TodoList = () => {
  

  const [visible, setVisible] = useState(false);
  const [isadd, setIsadd] = useState(false);
 
 
  //states
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const loadTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };


  useEffect(() => {
    loadTodos()
    
  }, []);


  const showModal = () => {
    setIsadd(true);
    setVisible(true);
  };
  const handleCancel = (e) => {
    setIsadd(false);
    setVisible(false);
  };

  const onSubmit=()=>{
    
  }
  

  //form value role select

  return (
    <>
   

      <form onSubmit={onSubmit}>
        <div>
          <Card
           
            style={{
              borderRadius: "3px",
            }}
          >
            <div>
              <Row
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                
                <Col
                  span={2}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Button
                    type="secondary"
                    className="btnStyle"
                    onClick={showModal}
                  >
                   Create Todo
                  </Button>
                  <div>
                    {isadd && isadd ? (
                      <Modal
                        title="Create Todo"
                        open={visible}
                        footer={null}
                        width={700}
                        closable={true}
                        onCancel={handleCancel}
                      >
                        <TodoCreateForm
                         handleCancel={handleCancel}
                         data={todos}
                       loadTodos={loadTodos}
                        />
                      </Modal>
                    ) : (
                      ""
                    )}
                  </div>
                 
                </Col>
              </Row>
            </div>
          </Card>
         
          <TodoListTable
            data={todos}
            loading={loading}
            loadTodos={loadTodos}
          />
           
       
        </div>
      </form>
    </>
  );
};
export default TodoList;
