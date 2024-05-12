import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import BrandJson from '../../../assets/brands.json';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';

interface Brand {
    id: number,
    name: string,
    logo: string,
    code: string
}

const BrandTable = () => {

    let emptyBrand: Brand = {
        id: 0,
        name: '',
        logo: '',
        code: ''
    }

    const [brands, setBrands] = useState<Brand[]>(BrandJson);
    const [brandDialog, setBrandDialog] = useState<boolean>(false);
    const [deleteBrandDialog, setDeleteBrandDialog] = useState<boolean>(false);
    const [deleteBrandsDialog, setDeleteBrandsDialog] = useState<boolean>(false);
    const [brand, setBrand] = useState<Brand>(emptyBrand);
    const [selectedBrands, setSelectedBrands] = useState<Brand[]>([]);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [globalFilter, setGlobalFilter] = useState<string>('');
    const toast = useRef<Toast>(null);
    const dt = useRef<DataTable<Brand[]>>(null);

    const openNew = () => {
        setBrand(emptyBrand);
        setSubmitted(false);
        setBrandDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setBrandDialog(false);
    };

    const hideDeleteBrandDialog = () => {
        setDeleteBrandDialog(false);
    };

    const hideDeleteBrandsDialog = () => {
        setDeleteBrandsDialog(false);
    };

    const saveBrand = () => {
        console.log("here there abhinav3254");

    };

    const editBrand = (brand: Brand) => {
        setBrand({ ...brand });
        setBrandDialog(true);
    };

    const confirmDeleteBrand = (brand: Brand) => {
        setBrand(brand);
        setDeleteBrandDialog(true);
    };

    const deleteBrand = () => {
        let _brands = brands.filter((val) => val.id !== brand.id);

        setBrands(_brands);
        setDeleteBrandDialog(false);
        setBrand(emptyBrand);
        toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Brand Deleted', life: 3000 });
    };

    const findIndexById = (id: number) => {
        let index = -1;

        for (let i = 0; i < brands.length; i++) {
            if (brands[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    };

    const exportCSV = () => {
        dt.current?.exportCSV();
    };

    const confirmDeleteSelected = () => {
        setDeleteBrandsDialog(true);
    };

    const deleteSelectedProducts = () => {
        let _brands = brands.filter((val) => !selectedBrands.includes(val));

        setBrands(_brands);
        setDeleteBrandsDialog(false);
        setSelectedBrands([]);
        toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Brands Deleted', life: 3000 });
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        const val = (e.target && e.target.value) || '';
        let _brand = { ...brand };

        // @ts-ignore
        _brand[name] = val;

        setBrand(_brand);
    };

    const leftToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button label="New" icon="pi pi-plus" severity="success" onClick={openNew} />
                <Button label="Delete" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedBrands || !selectedBrands.length} />
            </div>
        );
    };

    const rightToolbarTemplate = () => {
        return <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />;
    };

    const imageBodyTemplate = (rowData: Brand) => {
        return <img src={rowData.logo} alt={rowData.logo!} style={{ width: '64px' }} />;
    };

    const actionBodyTemplate = (rowData: Brand) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editBrand(rowData)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeleteBrand(rowData)} />
            </React.Fragment>
        );
    };

    const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 className="m-0">Manage Brands</h4>
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search" />
                <InputText type="search" placeholder="Search..." onInput={(e) => { const target = e.target as HTMLInputElement; setGlobalFilter(target.value); }} />
            </IconField>
        </div>
    );

    const productDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" onClick={saveBrand} />
        </React.Fragment>
    );
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteBrandDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteBrand} />
        </React.Fragment>
    );

    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteBrandsDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );

    return (
        <div>
            <div>
                <Toast ref={toast} />
                <div className="card">
                    <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

                    <DataTable ref={dt} value={brands} selection={selectedBrands}
                        onSelectionChange={(e) => {
                            if (Array.isArray(e.value)) {
                                setSelectedBrands(e.value);
                            }
                        }}
                        dataKey="id" paginator rows={10} scrollable scrollHeight='480px' rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" globalFilter={globalFilter} header={header}
                        selectionMode="multiple"
                    >
                        <Column selectionMode="multiple" exportable={false}></Column>
                        <Column field="id" header="ID" sortable style={{ minWidth: '12rem' }}></Column>
                        <Column field="code" header="Code" sortable style={{ minWidth: '12rem' }}></Column>
                        <Column field="name" header="Name" sortable style={{ minWidth: '16rem' }}></Column>
                        <Column field="image" header="Image" body={imageBodyTemplate}></Column>
                        <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
                    </DataTable>
                </div>

                <Dialog visible={brandDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Brand Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                    {brand.logo && (
                        <div style={{ textAlign: 'center', margin: '50px 0' }}>
                            <img src={brand.logo} alt="" className="w-10rem" />
                        </div>
                    )}
                    <div style={{ display: 'flex', flexDirection: 'column', margin: '20px 0' }}>
                        <label htmlFor="logo" className="font-bold">
                            Upload Logo
                        </label>
                        <input id='logo' type="file" accept=".png, .gif, .svg, .jpeg, .jpg" />
                    </div>
                    <div className="field">
                        <label htmlFor="name" className="font-bold">
                            Name
                        </label>
                        <InputText id="name" value={brand.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !brand.name })} />
                        {submitted && !brand.name && <small className="p-error">Name is required.</small>}
                    </div>
                </Dialog>

                <Dialog visible={deleteBrandDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteBrandDialog}>
                    <div className="confirmation-content">
                        <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                        {brand && (
                            <span>
                                Are you sure you want to delete <b>{brand.name}</b>?
                            </span>
                        )}
                    </div>
                </Dialog>

                <Dialog visible={deleteBrandsDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteBrandsDialog}>
                    <div className="confirmation-content">
                        <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                        {brand && <span>Are you sure you want to delete the selected products?</span>}
                    </div>
                </Dialog>
            </div>
        </div>
    )
}

export default BrandTable