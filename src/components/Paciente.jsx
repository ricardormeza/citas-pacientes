import React from 'react'

const Paciente = ({paciente}) => {
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
    </div>
  )
}

export default Paciente
