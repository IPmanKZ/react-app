import React, { useState } from "react";
import DataTable from "../../components/DataTable";
import { Add, Edit } from "@mui/icons-material";
import { users } from "../../db/db";
import UserModal from "./UserModal";

export default function Users() {
  const [data, setData] = useState(users);
  const [dialogState, setDialogState] = useState({ open: false, action: null });
  const [editedObj, setEditedObj] = useState();
  let newArray;

  const makeAction = (action) => {
    switch (action) {
      case "add":
        editedObj.id = Math.round(Date.now() + Math.random())
        newArray = data.concat(editedObj)
        setData(newArray);
        break;
      case "change":
        const elementsIndex = data.findIndex(
          (item) => item.id === editedObj.id
        );
        newArray = [...data];
        newArray[elementsIndex] = { ...newArray[elementsIndex], ...editedObj };
        console.log(newArray);
        setData(newArray);
        break;
      case "delete":
        setData(data.filter((item) => item.id !== editedObj.id));
        break;
      default: break;
        // console.log("No case detected for action - ", action);
    }
  };

  const handleClickOpen = (params) => {
    setEditedObj(params.row);
    setDialogState({ open: true , action: params.row ? `change`:`add`});
  };

  const columns = [
    {
      field: "action",
      headerName: (
        <Add
          style={{
            marginLeft: "6px",
            marginBottom: "0px !important",
            paddingTop: "25px",
            cursor: "pointer",
          }}
          onClick={handleClickOpen}
        />
      ),
      width: 70,
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Edit
              style={{ marginLeft: "10px", cursor: "pointer" }}
              onClick={() => handleClickOpen(params)}
            />
          </>
        );
      },
    },
    { field: "id", headerName: "ID", width: 70, hide: true },
    { field: "login", headerName: "Логин", flex: 1 },
    { field: "firstname", headerName: "Имя", flex: 1 },
    { field: "lastname", headerName: "Фамилия", flex: 1 },
    { field: "password", headerName: "Пароль", type: "password", flex: 1 },
  ];

  return (
    <>
      <DataTable
        header="Пользователи"
        columns={columns}
        data={data}
        setData={setData}
      />
      <UserModal
        dialogState={dialogState}
        setDialogState={setDialogState}
        editedObj={editedObj}
        setEditedObj={setEditedObj}
        makeAction={makeAction}
      />
    </>
  );
}
