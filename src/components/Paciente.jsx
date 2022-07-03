import React from 'react'

const Paciente = () => {
  return (
    <div className='mx-5 my-10 bg-white shadow-md p-10 rounded-xl'>
                {/* NOMBRE DE MASCOTA */}
                <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre:{' '}
                    <span className='font-normal normal-case'>Hook</span>
                </p>
                {/* NOMBRE DE PROPIETARIO */}
                <p className='font-bold mb-3 text-gray-700 uppercase'>PROPIETARIO:{' '}
                    <span className='font-normal normal-case'>Rick</span>
                </p>
                {/* EMAIL */}
                <p className='font-bold mb-3 text-gray-700 uppercase'>Correo electrónico:{' '}
                    <span className='font-normal normal-case'>correo@correo.com</span>
                </p>
                {/* FECHA ALTA */}
                <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta:{' '}
                    <span className='font-normal normal-case'>10 Diciembre 2022</span>
                </p>
                {/* SINTOMAS */}
                <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas:{' '}
                    <span className='font-normal normal-case'>Lorem ipsum dolor sit amet.</span>
                </p>
    </div>
  )
}

export default Paciente
