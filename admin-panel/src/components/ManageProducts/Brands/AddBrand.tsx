import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './AddBrand.scss'

const AddBrand = () => {

    const [name, setName] = useState('');

    return (
        <div>
            <div className='Form'>
                <InputText className='Name' placeholder='Brand Name' value={name} onChange={(e) => setName(e.target.value)} />
                <div className='Upload'>
                    <input type="file" name="myImage" accept=".png, .gif, .svg, .jpeg, .jpg" />
                </div>
                <Button className='Btn' icon="pi pi-check" />
            </div>
        </div >
    )
}

export default AddBrand