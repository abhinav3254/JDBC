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
    // const [genderData, setGenderData] = useState<CombineCategory | null>(null);
    const [selectedGender, setSelectedGender] = useState('');

    const openDialogWithCategoryData = (genderData: CombineCategory) => {
        // setGenderData(genderData);
        setShowEdit(true);
    };

    // Function to close the dialog
    const onHideDialog = () => {
        setShowEdit(false);
        // setGenderData(null);
    };

    return (
        <div>
            <Accordion multiple activeIndex={0}>
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
                            <Dialog header="Category" visible={showEdit} style={{ width: '50vw' }} onHide={() => setShowEdit(false)}>
                                <p className="m-0">
                                    <div>
                                        <Dropdown
                                            options={data.map(genderBased => ({ label: genderBased.gender, value: genderBased.gender }))}
                                            value={selectedGender}
                                            onChange={(e) => { setSelectedGender(e.value) }}
                                            optionLabel="label"
                                            placeholder="Select a Gender"
                                            className="w-full md:w-14rem"
                                        />
                                        {selectedGender}
                                        <div className="flex align-items-center">
                                            {data.map((gender) => (
                                                <div>
                                                    {/* here fixed the gender */}
                                                    {gender.gender == selectedGender && (
                                                        <div key={gender.gender}>
                                                            <RadioButton inputId="ingredient1" name={gender.gender} value={gender.gender} />
                                                            <label htmlFor="ingredient1" className="ml-2">{gender.gender}</label>
                                                            <div>
                                                                {gender.categories.map((category) => (
                                                                    <div>
                                                                        <RadioButton inputId="ingredient1" name={category.name} value={category.name} />
                                                                        <label htmlFor="ingredient1" className="ml-2">{category.name}</label>
                                                                        <div>
                                                                            {category.subcategories.map((subCategory) => (
                                                                                <div>
                                                                                    <RadioButton inputId="ingredient1" name={subCategory.subCategoryName} value={subCategory.subCategoryName} />
                                                                                    <label htmlFor="ingredient1" className="ml-2">{subCategory.subCategoryName}</label>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                            <Button label="Submit" icon="pi pi-check" />
                                        </div>
                                    </div>
                                </p>
                            </Dialog>
                        </div>
                    </AccordionTab>
                ))}

            </Accordion>
        </div>
    )
}

export default Categories