import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const LoginPage = () => {

  const {handleSubmit, register,reset}=useForm();

  const createToken= useAuth();

  const submit = data =>{
    //console.log(data)
    const url='https://e-commerce-api-v2.academlo.tech/api/v1/users/login';
               
    createToken(url, data)
    reset({
      email:'',
      password:'',
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="user">Email</label>
          <input {...register('email')} id='user' type="email" />
        </div>

        <div>
          <label htmlFor="key">Password</label>
          <input {...register('password')} id='key' type="password" />
        </div>
        <button>Submit</button>
      </form>
      <p>Registrate <Link to='/register'>aquí</Link> </p>
    </div>
  )
}

export default LoginPage