import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MedicineForm from './MedicineForm';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMedicines, getMedicines } from '../../../redux/Action/medicines.action';


function Medicines(props) {
    const [mData, setMData] = useState([]);
    const [update, setUpdate] = useState(false);

    const dispatch = useDispatch();
    const medicines = useSelector(state => state.medicines)

    useEffect(() => {
        dispatch(getMedicines())
    }, [])

    const handleFormSubmit = (data) => {
        console.log(data);
        let localData = JSON.parse(localStorage.getItem('medicines'))
        let id = Math.floor(Math.random() * 1000)

        if (localData) {
            if (update) {
                let index = localData.findIndex((v) => v.id === data.id)

                localData[index] = data

                localStorage.setItem('medicines', JSON.stringify(localData))

                setMData(localData)

                setUpdate(false)
            } else {
                localData.push({ id, ...data })
                localStorage.setItem('medicines', JSON.stringify(localData))
                setMData(localData)
            }
        } else {
            localStorage.setItem('medicines', JSON.stringify([{ id, ...data }]))
            setMData([{ id, ...data }])
        }
    }

    const handleDelete = (id) => {
        // let newList = mData.filter((v, index) => v.id !== id);
        // setMData(newList)
        // localStorage.setItem("medicines", JSON.stringify(newList))
        dispatch(deleteMedicines(id))
    }

    const handleEdit = (data) => {
        setUpdate(data)
    }

    const columns = [
        { field: 'name', headerName: 'Medicine Name', width: 140 },
        { field: 'price', headerName: 'Price', width: 100 },
        { field: 'expiry', headerName: 'Expiry', width: 120 },
        { field: 'desc', headerName: 'Description', width: 300 },
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
            <MedicineForm onHandleSubmit={handleFormSubmit} updateData={update}/>
            <div style={{ height: '75vh', width: '100%', marginTop: '15px' }}>
                <DataGrid
                    rows={medicines.medicines}
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

export default Medicines;

// console.log('Delete', id);
// let newList = mData.filter((Obj) => Obj.id !== id);
// setMData(newList);
// localStorage.setItem('medicines', JSON.stringify(newList))
// let localData = JSON.parse(localStorage.getItem('medicines'))
// let newList;

// mData.map((v, index) => {
//     if (id === v.id) {
//         newList = [...localData].splice(index, 1)
//     }
// })
// console.log(newList);
// setMData(newList)
// localStorage.setItem('medicines', JSON.stringify(newList))
// let setItem = mData.filter((v) => id !== v.id)

// setMData(setItem);
// localStorage.setItem("medicines", JSON.stringify(setItem));