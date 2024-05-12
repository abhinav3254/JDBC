import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Nav.scss'
import logo from '../../assets/logo.svg'

const Nav = () => {
    const navigate = useNavigate();
    return (
        <div className='Nav'>
            <img src={logo} alt="" />
            <div>
                <p onClick={() => { navigate('/dashboard') }} className='NavItems'>Home</p>
                <p className='NavItems'>Anayltics</p>
                <p onClick={() => { navigate('/manage-products') }} className='NavItems'>Manage Products</p>
                <i className='pi pi-align-justify NavItems'></i>
            </div>
        </div>
    )
}

export default Nav