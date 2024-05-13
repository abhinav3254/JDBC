import React, { useState, useEffect } from 'react';
import CategroryData from '../../../assets/cat.json';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Divider } from 'primereact/divider';
import './Categories.scss'
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';


export interface CombineCategory {
    gender: string
    categories: Category[]
}

export interface Category {
    id: number
    name: string
    subcategories: Subcategory[]
}

export interface Subcategory {
    id: number
    subCategoryName: string
    category: number
}

const Categories = () => {

    const data: CombineCategory[] = CategroryData;
    const [showEdit, setShowEdit] = useState(false);
    const [genderData, setGenderData] = useState<CombineCategory | null>(null);
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState('');

    const openDialogWithCategoryData = (genderData: CombineCategory) => {
        setGenderData(genderData);
        setShowEdit(true);
    };

    // Function to close the dialog
    const onHideDialog = () => {
        setShowEdit(false);
        setGenderData(null);
    };

    return (
        <div>
            <div className='ActionButton'>
                <Button label="New" severity="success" icon="pi pi-plus" />
                <Button label="Export" icon="pi pi-upload" severity="help" />
            </div>
            <Accordion multiple>
                {data.map((genderBased) => (
                    <AccordionTab header={genderBased.gender} key={genderBased.gender}>
                        <div className='AccordionTab'>
                            <div className='CategoryCardContainer'>
                                {genderBased.categories.map((category) => (
                                    <div className='CategoryCard' key={category.id}>
                                        <div className='CategoryCardHeader'>
                                            <h5>{category.name}</h5>
                                            <i className="pi pi-trash" style={{ color: 'red' }}></i>
                                        </div>
                                        <Divider />
                                        <div className='CategoryCardHeaderTable'>
                                            {category.subcategories.map((subCategory) => (
                                                <div key={subCategory.id} className='CategoryCardHeaderTableElements'>
                                                    <p>{subCategory.subCategoryName}</p>
                                                    <div className='CategoryCardHeaderTableElementsOptions'>
                                                        <i className="pi pi-pencil" onClick={() => { openDialogWithCategoryData(genderBased) }} style={{ color: 'black' }}></i>
                                                        <i className="pi pi-trash" style={{ color: 'red' }}></i>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Dialog header="Category" visible={showEdit} style={{ width: '50vw' }} onHide={onHideDialog}>
                                <div>
                                    <Dropdown
                                        options={data.map(genderBased => ({ label: genderBased.gender, value: genderBased.gender }))}
                                        value={selectedGender}
                                        onChange={(e) => setSelectedGender(e.value)}
                                        optionLabel="label"
                                        placeholder="Select a Gender"
                                        className="w-full md:w-14rem"
                                    />
                                    {selectedGender && (
                                        <Dropdown
                                            options={data.find(genderBased => genderBased.gender === selectedGender)?.categories.map(category => ({ label: category.name, value: category.name }))}
                                            value={selectedCategory}
                                            onChange={(e) => setSelectedCategory(e.value)}
                                            optionLabel="label"
                                            placeholder="Select a Category"
                                            className="w-full md:w-14rem"
                                        />
                                    )}
                                    {selectedCategory && (
                                        <Dropdown
                                            options={data.find(genderBased => genderBased.gender === selectedGender)?.categories.find(category => category.name === selectedCategory)?.subcategories.map(subCategory => ({ label: subCategory.subCategoryName, value: subCategory.subCategoryName }))}
                                            value={selectedSubCategory}
                                            onChange={(e) => setSelectedSubCategory(e.value)}
                                            optionLabel="label"
                                            placeholder="Select a Subcategory"
                                            className="w-full md:w-14rem"
                                        />
                                    )}
                                    <Button label="Submit" icon="pi pi-check" />
                                </div>
                            </Dialog>

                        </div>
                    </AccordionTab>
                ))}
            </Accordion>
        </div>
    )
}

export default Categories