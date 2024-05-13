import React, { useState } from 'react';
import './Extra.scss';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Occasion from '../../../assets/Occasion.json';
import { InputSwitch } from 'primereact/inputswitch';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';

interface OccasionData {
    id: number;
    label: string;
    name: string;
    status: boolean;
}


const Extra = () => {
    const [occasionData, setOccasionData] = useState<OccasionData[]>(Occasion);

    const handleStatusChange = (occasionId: number) => {
        const updatedData = occasionData.map((occasion) => {
            if (occasion.id === occasionId) {
                occasion.status = !occasion.status;
            }
            return occasion;
        });
        setOccasionData(updatedData);
    };

    const showStatus = (data: OccasionData) => {
        return (
            <div className='SwitchCase'>
                <InputSwitch
                    checked={data.status}
                    onChange={() => handleStatusChange(data.id)}
                />
            </div>
        );
    };


    return (
        <div className='Extra'>
            <div className='ExtraAccordion'>
                <div className='ExtraAccordionTab'>
                    <Accordion multiple>
                        <AccordionTab header="Occasion">
                            <div className='OccasionHeader'>
                                <Button label='New' icon='pi pi-plus' severity='success'></Button>
                                <Button label='Export' icon='pi pi-upload' severity='help'></Button>
                            </div>
                            <div className='Occasion'>
                                <DataTable scrollable scrollHeight={'400px'} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} value={Occasion} showGridlines tableStyle={{ width: '100%' }}>
                                    <Column field="id" header="ID"></Column>
                                    <Column field="label" header="Label"></Column>
                                    <Column field="name" header="Name"></Column>
                                    <Column body={showStatus}></Column>
                                </DataTable>
                            </div>
                        </AccordionTab>
                    </Accordion>
                </div>
                <div className='ExtraAccordionTab'>
                    <Accordion multiple>
                        <AccordionTab header="Occasion">
                            <div className='OccasionHeader'>
                                <Button label='New' icon='pi pi-plus' severity='success'></Button>
                                <Button label='Export' icon='pi pi-upload' severity='help'></Button>
                            </div>
                            <div className='Occasion'>
                                <DataTable scrollable scrollHeight={'400px'} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} value={Occasion} showGridlines tableStyle={{ width: '100%' }}>
                                    <Column field="id" header="ID"></Column>
                                    <Column field="label" header="Label"></Column>
                                    <Column field="name" header="Name"></Column>
                                    <Column body={showStatus}></Column>
                                </DataTable>
                            </div>
                        </AccordionTab>
                    </Accordion>
                </div>
            </div>
            <div className='ExtraAccordion'>
                <div className='ExtraAccordionTab'>
                    <Accordion multiple>
                        <AccordionTab header="Package Dimensions">
                            <div className='OccasionHeader'>
                                <Button label='New' icon='pi pi-plus' severity='success'></Button>
                                <Button label='Export' icon='pi pi-upload' severity='help'></Button>
                            </div>
                            <div className='Occasion'>
                                <DataTable scrollable scrollHeight={'400px'} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} value={Occasion} showGridlines tableStyle={{ width: '100%' }}>
                                    <Column field="id" header="ID"></Column>
                                    <Column field="label" header="Label"></Column>
                                    <Column field="name" header="Name"></Column>
                                    <Column body={showStatus}></Column>
                                </DataTable>
                            </div>
                        </AccordionTab>
                    </Accordion>
                </div>
                <div className='ExtraAccordionTab'>
                    <Accordion multiple>
                        <AccordionTab header="Product Dimensions">
                            <div className='OccasionHeader'>
                                <Button label='New' icon='pi pi-plus' severity='success'></Button>
                                <Button label='Export' icon='pi pi-upload' severity='help'></Button>
                            </div>
                            <div className='Occasion'>
                                <DataTable scrollable scrollHeight={'400px'} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} value={Occasion} showGridlines tableStyle={{ width: '100%' }}>
                                    <Column field="id" header="ID"></Column>
                                    <Column field="label" header="Label"></Column>
                                    <Column field="name" header="Name"></Column>
                                    <Column body={showStatus}></Column>
                                </DataTable>
                            </div>
                        </AccordionTab>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Extra