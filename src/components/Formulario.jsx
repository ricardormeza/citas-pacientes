import React from 'react'
import { useState, useEffect } from 'react'

const Formulario = () => { 
    const [nombre, setNombre] = useState(''); 
    const [propietario, setPropietario] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [fecha, setFecha] = useState(''); 
    const [sintomas, setSintomas] = useState(''); 

    const [error, setError ] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();

        // VALIDACION DE FORMULARIO
        if([ nombre, propietario, email, fecha, sintomas ].includes('') ){
            console.log('Hay al menos un campo vacio.')

            setError(true)
        }else{
            console.log('todos llenos')
        }

        // console.log('Enviando formulario...')
    }

    return (
        <div className='md:w-1/2 lg:w-2/5 mx-5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

            <p className='text-lg mt-5 text-center mb-10'>Añade Pacientes y {''}
                <span className='text-indigo-600 font-bold'>Administralos</span>
            </p>

            <form 
                
                className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
                onSubmit={handleSubmit}
                >
                <div className='mb-5 '>
                    <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>
                        Nombre Mascota
                    </label>
                    <input 
                        id='mascota'
                        type="text"
                        placeholder='Nombre de la mascota'
                        className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md'
                        value={nombre}
                        onChange={ (e) => setNombre (e.target.value) }
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>
                        Nombre propietario
                    </label>
                    <input 
                        id='propietario'
                        type="text"
                        placeholder='Nombre del propietario'
                        className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md'
                        value={propietario}
                        onChange={ (e) => setPropietario (e.target.value) }
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>
                        Email
                    </label>
                    <input 
                        id='email'
                        type="email"
                        placeholder='Email contacto'
                        className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md'
                        value={email}
                        onChange={ (e) => setEmail (e.target.value) }
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>
                        Fecha de alta paciente
                    </label>
                    <input 
                        id='alta'
                        type="date"
                        className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md'
                        value={fecha}
                        onChange={ (e) => setFecha (e.target.value) }
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>
                        Sintomas
                    </label>
                    <textarea name="" 
                    id="sintomas" 
                    cols="30" 
                    rows="5"
                    className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md'
                    placeholder='Descripción de Sintomas de la mascota.'
                    value={sintomas}
                    onChange={ (e) => setSintomas (e.target.value) }
                    ></textarea>
                    
                </div>
                <input type="submit"
                        className='bg-indigo-600 w-full 
                        p-3 text-white rounded-md 
                        hover:bg-indigo-700 
                        uppercase font-bold
                        cursor-pointer
                        transition-all'
                        value="Agregar Paciente"
                />
            </form>
        </div>
    )
}

export default Formulario
