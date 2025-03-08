import { Textbox } from './components/textbox/textbox'
import { Menu } from './components/menu/menu'
import Text from './components/text/text'

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

      <Textbox label='Label' placeholder='placeholder' />
      <Text.Title as='h1'>Hello World</Text.Title>
      <Text>Hola esto es mi texto gracias!</Text>
    </>
  )
}

export default App
