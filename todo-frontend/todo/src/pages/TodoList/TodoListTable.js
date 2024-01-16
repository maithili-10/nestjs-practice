
import { Table, Modal, Dropdown, Tag, message, Button } from "antd";
import { useState } from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import { FaBars } from "react-icons/fa6";
import TodoEditForm from "./TodoEditForm";
import TodoDeleteForm from "./TodoDeleteForm";


const TodoListTable = ({ data, loading,  loadTodos }) => {
 
 
  //states
  const [visible, setVisible] = useState(false);
  const [rowdata, setRowdata] = useState({});
  const [changerole, setChangeRole] = useState(false);
  const [EditAdmin, setEditAdmin] = useState(false);
  const [changestatus, setChangeStatus] = useState(false);
  const [resetpwd, setResetpwd] = useState(false);
  const[isEdit,setIsEdit]=useState(false);
  const[isDelete,setIsDelete]=useState(false)
  const [status, setStatus] = useState(1);
  const userid = rowdata.userid;
  console.log(EditAdmin)
  //on form submit request to backend
  const onSubmit = async (e) => {
    // try {
    //   e.preventDefault();

    //   setStatus(!status);

    //   const path = `/admin/status/toggle/${userid}`;
    //   // sending request
    //   const res = await PutApi.PutApiRequest(path);
    //   //if success
    //   if (res && res.status == true) {
    //     message.success(lang.label_statusupdation);
    //     handleCancel();
    //     getUsers();
    //   }
    // } catch (e) {
    //   message.error(e.message);
    // }
  };
  //menu items in table
  const items = [
    {
      key: 1,
      label:"Edit Todo",
    },
    {
      key: 2,
      label: "Delete Todo",
    },

  ];

  //onclick of option in table
  const onClick = ({ key }) => {
    console.log(key)
    if (key == 1) {
      handleEditTodo();
    }
    else if (key == 2) {
      handleDeleteTodo();
    }
   
  };
  // columns of table
  const columns = [
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
   
    {
      title:"Action",
      key: "action",
      render: (_, record) => {
        return (
          <>
         <Button onClick={()=>{handleEditTodo()}}>Edit</Button>
         <Button onClick={()=>{handleDeleteTodo()}}>Delete</Button></>
          
        
        );
      },
    },
  ];
  //for closing the popup
  const handleCancel = () => {
   setIsEdit(false);
   setIsDelete(false)
    setVisible(false);
  };

  //for onclick of options in table

  const handleEditTodo = () => {
   
    setIsEdit(true);
    setIsDelete(false)
    setVisible(true);
  };
  const handleDeleteTodo = () => {
  
    setIsEdit(false);
    setIsDelete(true)
    setVisible(true);
  };
 
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <Table
        size="small"
        style={{ width: "50%" }}
        columns={columns}
        dataSource={data}
        bordered
        pagination={false}
        loading={loading}
        onRow={(record) => {
          return {
            onClick: () => {
              setRowdata(record);
            },
          };
        }}
      />
      <div>
      {(isEdit ||isDelete) && (
        <Modal
          closeIcon={null}
          title={
            isEdit
              ?"Edit" 
              : isDelete
              ?"Delete"
            
           :
        ""  }
          open={visible}
          onCancel={handleCancel}
          footer={null}
          width={isEdit ? 500 : isDelete ? 300 : ""}
          color={"#004A7F"}
        >
         { isEdit ?  <TodoEditForm handleCancel={handleCancel} rowdata={rowdata} loadTodos={loadTodos}/>:
         <TodoDeleteForm  handleCancel={handleCancel} rowdata={rowdata} loadTodos={loadTodos}/>}
       
        </Modal>
      )}
      </div>
    </div>
  );
};

export default TodoListTable;
