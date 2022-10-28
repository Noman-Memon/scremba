import React from 'react'
import Logo from '../image/react-logo.png'

export default function Header() {
  return (
    <div>
      <header>
        <nav>
          <img src={Logo} alt="logo" width="80px" />
        </nav>
      </header>
    </div>
  )
}
