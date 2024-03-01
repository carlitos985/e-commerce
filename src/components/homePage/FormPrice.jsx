import React from 'react'
import { useForm } from 'react-hook-form'

const FormPrice = ({setFormValue}) => {


    //Instalo la libreria react-hook-form, llamo el useForm con sus tres propiedades
    const {handleSubmit, register, reset}= useForm();
    //Funcion para manejar el formulario
    const submit =(data)=>{
        console.log(data);
        setFormValue({
            from: data.from || 0,
            to: data.to || Infinity,
        });
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="from"></label>
                <input {...register('from')} id='from' type="number" />
            </div>
            <div>
                <label id='to' htmlFor="to"></label>
                <input {...register('to')} id='to' type="number" />
            </div>
            <button>Filter Price</button>
        </form>
    </div>
  )
}

export default FormPrice