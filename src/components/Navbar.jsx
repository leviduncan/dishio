import React from 'react'
import SearchBar from './SearchBar'

const Navbar = ({ handleSearch, searchQuery }) => {
    return (
        <div className="top-bar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-5">
                <div className="container d-flex justify-content-center">
                    <h2><a className="navbar-brand" href="#">Recipe Hunt</a></h2>
                </div>
            </nav>
        </div>
    )
}

export default Navbar