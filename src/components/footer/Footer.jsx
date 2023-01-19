import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                  <Link to="/" className="nav-link px-2 text-muted">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link px-2 text-muted">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link px-2 text-muted">Service</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link px-2 text-muted">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link px-2 text-muted">Privacy Policy</Link>
                </li>
            </ul>
            <p className="text-center text-muted">© 2021 Company, Inc</p>
        </footer>
    )
}

export default Footer