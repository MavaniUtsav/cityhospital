import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoctorsForm from './DoctorsForm';


function Doctors(props) {
    const [dData, setDData] = useState([]);
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('doctors'))

        if (localData) {
            setDData(localData)
        }
    }, [])

    const handleFormSubmit = (data) => {
        let localData = JSON.parse(localStorage.getItem('doctors'))
        let id = Math.floor(Math.random() * 1000)

        if (localData) {
            if (update) {
                let index = localData.findIndex((v) => v.id === data.id)

                localData[index] = data

                localStorage.setItem('doctors', JSON.stringify(localData))

                setDData(localData)

                setUpdate(false)
            } else {
                localData.push({ id, ...data })
                localStorage.setItem('doctors', JSON.stringify(localData))
                setDData(localData)
            }
        } else {
            localStorage.setItem('doctors', JSON.stringify([{ id, ...data }]))
            setDData([{ id, ...data }])
        }
    }

    const handleEdit = (data) => {
        // setValues(data)

        setUpdate(data)
    }

    const handleDelete = (id) => {
        let newList = dData.filter((v) => v.id !== id)
        setDData(newList)
        localStorage.setItem('doctors', JSON.stringify(newList))
    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'description', headerName: 'Description', width: 200 },
        { field: 'designation', headerName: 'Designation', width: 180 },
        { field: 'url', headerName: 'FB Profile_url', width: 200 },
        {
            field: 'action', headerName: 'Action', width: 300, renderCell: (params) => (
                <strong>
                    <EditIcon id='editico' onClick={() => {
                        handleEdit(params.row)
                    }} />
                    <DeleteIcon id='deleteico' onClick={() => { handleDelete(params.row.id) }} />
                </strong>
            )
        },
    ];

    return (
        <div className='container'>
            <DoctorsForm onSubmitClick={handleFormSubmit} updateData={update}/>
            <div style={{ height: 400, width: '100%', marginTop: '15px' }}>
                <DataGrid
                    rows={dData}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}

export default Doctors;