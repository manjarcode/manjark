import { Input } from './components/input/input'
import { Menu } from './components/menu'

function App() {
  return (
    <>   
      <div style={{display:'flex'}}>
        Esto es una prueba
        <Menu>
          <Menu.Item value="home" onClick={() => console.log('Home clicked')}>
            Home
          </Menu.Item>
          <Menu.ItemLink value="about" href="/about">
            About
          </Menu.ItemLink>
          <Menu.ItemLink value="contact" href="/contact"> 
            Contact
          </Menu.ItemLink>
        </Menu>
      </div>

      <Input label='Label' placeholder='placeholder' />
    </>
  )
}

export default App
