import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow(!show);
    }
    return (
        <header className="bg-blue-gray-500 flex text-white  justify-between px-5 py-2  items-baseline sticky top-0 z-10">

            <div className=''>
                <NavLink to='/'> <h1>Movie API</h1> </NavLink>

                {show && <nav className="msm:flex msm:flex-col space-y-1 mt-3 hidden">
                    <NavLink to=''>Popular</NavLink>
                    <NavLink to=''>Top Rated</NavLink>
                    <NavLink to=''>Upcoming</NavLink>
                </nav>
                }

            </div>
            <div className=''>
                

                <nav className="space-x-5 flex msm:hidden items-baseline">
                    <NavLink to='/movie/popular'>Popular</NavLink>
                    <NavLink to='/movie/top_rated'>Top Rated</NavLink>
                    <NavLink to='movie/upcoming'>Upcoming</NavLink>

                </nav>
            </div>
            <div>
            {show ? <button onClick={toggle} className="hidden msm:flex"><i className="fa-solid fa-xmark fa-lg"></i> </button> : <button onClick={toggle} className="hidden msm:flex"><i className="fa-solid fa-bars fa-lg"></i></button>}


            </div>

        </header>
    )
}

export default Header
