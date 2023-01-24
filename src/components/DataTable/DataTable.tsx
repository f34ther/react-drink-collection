import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useGetData } from '../../custom_hooks';
import { server_calls } from '../../Api';
import {
    Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';
import { DrinkForm } from '../DrinkForm';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    { field: 'base', headerName: 'Base', flex: 1 },
    { field: 'amount_of_base', headerName: 'Amount of Base', flex: 1 },
    { field: 'mixer', headerName: 'Mixer', flex: 1 },
    { field: 'amount_of_mixer', headerName: 'Amount of Mixer', flex: 1 },
    { field: 'blend', headerName: 'Blend', flex: 1 },

];

interface gridData {
    data: {
        id?: string
    }
}

export const DataTable = () => {

    let { contactData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({ data: {} });
    const [selectionModel, setSelectionModel] = useState<any>([]);


    let handleOpen = () => {
        setOpen(true)
    };
    let handleClose = () => {
        setOpen(false)
    };

    let deleteData = () => {
        server_calls.delete(selectionModel);
        getData();
        setTimeout(() => { window.location.reload(); }, 1000)
    }
    return (
        <div style={{ height: 400, width: '100%' }}>
            <h2>My Recipes</h2>

            <DataGrid rows={contactData} columns={columns} pageSize={5} checkboxSelection={true}
                onSelectionModelChange={(item) => {
                    setSelectionModel(item)
                }}
            />

            <Button onClick={handleOpen}>Update</Button>
            <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update Recipe {selectionModel}</DialogTitle>
                <DialogContent>
                    <DialogContentText>Update Recipe</DialogContentText>
                    <DrinkForm id={selectionModel!} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleClose} color="primary">Done</Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}