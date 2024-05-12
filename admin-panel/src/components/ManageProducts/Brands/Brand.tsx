import React from 'react'
import './Brand.scss'
import brandsJson from '../../../assets/brands.json';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import BrandTable from './BrandTable';

const Brand = () => {

    const imageBodyTemplate = (brand: any) => {
        return <img src={brand.logo} alt={brand.name} className="w-2rem h-2rem" />;
    };

    const leftToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button label="New" icon="pi pi-plus" severity="success" />
                <Button label="Delete" icon="pi pi-trash" severity="danger" />
            </div>
        );
    };

    const rightToolbarTemplate = () => {
        return <Button label="Export" icon="pi pi-upload" className="p-button-help" />;
    };

    const actionBodyTemplate = () => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" />
                <Button icon="pi pi-trash" rounded outlined severity="danger" />
            </React.Fragment>
        );
    };


    return (
        <div>
            <BrandTable />
        </div>
    )
}

export default Brand