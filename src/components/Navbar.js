import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <nav>
        <h1>Bob's Bistro</h1>

        <div>
          <ul style={{ display: 'inline-grid' }}>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <h1>My awesome website in React</h1>
        <h3>Reasons I love React</h3>
        <ol style={{ display: 'inline-grid' }}>
          <li>It's composable</li>
          <li>It's declarative</li>
          <li>It's a hireable skill</li>
          <li>It's actively maintained by skilled people</li>
        </ol>
      </nav>
    </div>
  )
}
