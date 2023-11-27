import React, { useEffect, useState } from 'react';
import DepartmentsForm from './DepartmentsForm';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { addDepartments, deleteDepartment, getDepartments, updateDepartments } from '../../../redux/Action/departments.action';

function Departments(props) {
    const [update, setUpdate] = useState(null);

    const dispatch = useDispatch()
    const departments = useSelector(state => state.departments)

    useEffect(() => {
        dispatch(getDepartments())
    },[])

    const handleFormSubmit = (data) => {
        if (update) {
            dispatch(updateDepartments(data))
        } else {
            dispatch(addDepartments(data))
        }
    }

    const handleDelete = (id) => {
        dispatch(deleteDepartment(id))
    }

    const handleEdit = (data) => {
        setUpdate(data)
    }

    const columns = [
        { field: 'name', headerName: 'Department Name', width: 140 },
        { field: 'short_desc', headerName: 'Short Description', width: 150 },
        { field: 'long_desc', headerName: 'Long Description', width: 300 },
        {
            field: 'action', headerName: 'Action', width: 300, renderCell: (params) => (
                <strong>
                    <EditIcon id='editico' onClick={() => handleEdit(params.row)} />
                    <DeleteIcon id='deleteico' onClick={() => { handleDelete(params.row.id) }} />
                </strong>
            )
        },
    ];
    
    return (
        <div className='container'>
            <DepartmentsForm onHandleSubmit={handleFormSubmit} updateData={update} />
            <div style={{ height: '75vh', width: '100%', marginTop: '15px' }}>
                <DataGrid
                    rows={departments.departments}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10, 15, 20]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}

export default Departments;