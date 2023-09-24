import React from 'react'

import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
        <h2 className='red-message'>Pagina non trovata</h2>
        <Link to="/">
            <button className="btn-2">Torna alla home</button>
        </Link>
    </>
  )
}

export default ErrorPage