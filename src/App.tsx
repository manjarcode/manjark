import { Menu } from './components/menu'

function App() {

  return (
    <>
      <Menu>
        <Menu.ItemLink value="home" href="/">
          Home
        </Menu.ItemLink>
        <Menu.ItemLink value="about" href="/about">
          About
        </Menu.ItemLink>
        <Menu.ItemLink value="contact" href="/contact"> 
          Contact
        </Menu.ItemLink>
      </Menu>
    </>
  )
}

export default App
