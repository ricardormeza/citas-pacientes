import React from 'react'
import { useState, useEffect } from 'react'
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente  }) => { 
    const [nombre, setNombre] = useState(''); 
    const [propietario, setPropietario] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [fecha, setFecha] = useState(''); 
    const [sintomas, setSintomas] = useState(''); 

    const [error, setError ] = useState(false);

    useEffect( () => {
        // console.log(paciente);
        if( Object.keys(paciente).length > 0 ) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        // VALIDACION DE FORMULARIO
        if([ nombre, propietario, email, fecha, sintomas ].includes('') ){
            console.log('Hay al menos un campo vacio.')

            setError(true)
            return;
        }
        // El else se elimina y se coloca el return de la ln 21
        // else{
        //     console.log('todos llenos')
        // }

        setError(false)

        //Objeto de paciente
        const objetoPaciente ={
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas
        }

        if(paciente.id){
            // console.log('Editando el registro')
            objetoPaciente.id = paciente.id
            // console.log(objetoPaciente)
            // console.log(paciente)

            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id ===
                paciente.id ? objetoPaciente : pacienteState)

                setPacientes(pacientesActualizados)
                setPaciente({})
        }else{
            // console.log('Nuevo registro')
            objetoPaciente.id = generarId(); 
            setPacientes([...pacientes, objetoPaciente]);
        }
        // REINICIAR EL FORMULARIO
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

    return (
        <div className='md:w-1/2 lg:w-2/5 mx-5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

            <p className='text-lg mt-5 text-center mb-10'>Añade Pacientes y {''}
                <span className='text-indigo-600 font-bold'>Administralos</span>
            </p>

            <form 
                onSubmit={handleSubmit}
                className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
                >
                    {/* MENSAJE DE ERRO  && significa que si -error es true entonces imprime si hay error */}
                { error && <Error> <p> Todos los campos son obligatorios </p> </Error> }
                    {/* MENSAJE DE ERRO  FIN*/}
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
                        value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />
            </form>
        </div>
    )
}

export default Formulario
