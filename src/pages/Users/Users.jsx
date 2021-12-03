import React, { useState } from 'react'
import DataTable from '../../components/DataTable';
import {Add, Edit} from '@mui/icons-material';
import {users} from '../../db/db'
import UserModal from './UserModal'

export default function Users() {
    const [data,setData] = useState(users)
    const [open,setOpen] = useState(false);

    // const handleDelete = (id) => {
    //     setData(data.filter((item) => item.id !== id));
    // }

    const handleClickOpen = () => {
      setOpen(true);
    };

    const columns = [
      { field: 'action', 
        headerName:<Add style={{marginLeft:"6px",
                                marginBottom:"0px !important",
                                paddingTop:"25px",
                                cursor : "pointer"}}
                        onClick={handleClickOpen}
                   />, 
        width: 70,
        sortable : false,
        renderCell : (params) => {
            return (
                <>
                 <Edit style={{marginLeft:"10px",
                               cursor:"pointer"}} onClick={handleClickOpen}/>
                </>
            )
        }
      },
      { field: 'id', headerName: 'ID', width: 70 , hide : true},
      { field: 'login', headerName: 'Логин', flex:1},
      { field: 'firstname', headerName: 'Имя', flex:1},
      { field: 'lastname', headerName: 'Фамилия',flex:1},
      { field: 'password', headerName: 'Пароль',type: 'password',flex:1},
    ];

    return (
            <>
              <DataTable header="Пользователи" columns={columns} data={data} setData={setData}/>    
              <UserModal open={open} setOpen={setOpen}/>
            </>
           )
}
