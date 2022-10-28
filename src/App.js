import './App.css'
import Navbar from './components/Navbar'
import Logo from './image/react-logo.png'

function App() {
  return (
    <>
      <div className="App">
        <header>
          <nav>
            <img src={Logo} alt="logo" width="80px" />
          </nav>
        </header>
        <Navbar />
        <footer>
          <h1>Its a Footer</h1>
        </footer>
      </div>
    </>
  )
}

export default App
