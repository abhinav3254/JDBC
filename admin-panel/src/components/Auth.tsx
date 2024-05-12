import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import './Auth.scss';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const goToDashBoard = () => {
        navigate('dashboard');
    }

    return (
        <div className="Auth">
            <div className="Login">
                <img src="https://plus.unsplash.com/premium_photo-1661384118133-8f8b6eef9715?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5hbHl0aWNzfGVufDB8fDB8fHww" alt="" />
                <div className="Creds">
                    <p>Welcome to Admin Panel</p>
                    <InputText className="Email" placeholder="Email" value={value} onChange={(e) => setValue(e.target.value)} />
                    <InputText className="Email" placeholder="Password" value={value} onChange={(e) => setValue(e.target.value)} />
                    <Button className="LoginBtn" label="Login" icon="pi pi-check" onClick={() => goToDashBoard()} />
                </div>
            </div>
        </div>
    )
}

export default Auth