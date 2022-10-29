import React from 'react'
import Logo from '../image/react-logo.png'

export default function Header() {
  return (
    <div>
      <header>
        <nav className="nav">
          <img src={Logo} alt="logo" width="60px" />
          <ul className="nav-item">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
