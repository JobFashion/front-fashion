import React from 'react';
import { Link } from 'react-router-dom';
import RegisterComponent from '../components/register/Register';
import { icons } from '../utils/assetsLoader';

export function Register() {
  return (
    <div className='flex flex-col items-center justify-center px-6 py-4'>
      <img alt='logo' src={icons.logo} />
      <h2 className='my-5 font-bold text-2xl'>Registro</h2>
      <RegisterComponent />
      <small className='mt-1'><Link to='/'>Volver</Link></small>
    </div>
  );
}
