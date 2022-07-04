import React from 'react'

const Paciente = ({paciente, setPaciente}) => {
    // console.log(paciente)
    const { nombre, propietario, email, fecha, sintomas } = paciente
  return (
    <div className='mx-5 my-10 bg-white shadow-md p-10 rounded-xl'>
                {/* NOMBRE DE MASCOTA */}
                <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre:{' '}
                    <span className='font-normal normal-case'>{nombre}</span>
                </p>
                {/* NOMBRE DE PROPIETARIO */}
                <p className='font-bold mb-3 text-gray-700 uppercase'>PROPIETARIO:{' '}
                    <span className='font-normal normal-case'>{propietario}</span>
                </p>
                {/* EMAIL */}
                <p className='font-bold mb-3 text-gray-700 uppercase'>Correo electrónico:{' '}
                    <span className='font-normal normal-case'>{email}</span>
                </p>
                {/* FECHA ALTA */}
                <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta:{' '}
                    <span className='font-normal normal-case'>{fecha}</span>
                </p>
                {/* SINTOMAS */}
                <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas:{' '}
                    <span className='font-normal normal-case'>{sintomas}</span>
                </p>
                <div className='flex justify-between'>
                    <button 
                        type="button"
                        className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700
                        rounded text-white font-bold uppercase'
                        onClick={() => setPaciente(paciente)}
                        >
                        Editar
                    </button>

                    <button 
                        type="button"
                        className='py-2 px-10 bg-red-600 hover:bg-red-700
                        rounded text-white font-bold uppercase'
                        >
                        Eliminar
                    </button>
                </div>
    </div>
  )
}

export default Paciente
