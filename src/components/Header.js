import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-container'>
        <h1 className='header-title'>Allan Munene</h1>
        <div className='header-sub'>
            <Link className='header-buttons' to={'/'}>Blog list</Link>
            <Link className='header-buttons' to={'/author'}>About the author</Link>
        </div>
    </div>
  )
}

export default Header