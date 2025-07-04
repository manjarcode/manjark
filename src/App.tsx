import { Textbox } from './components/textbox/textbox'
import { Menu } from './components/menu/menu'
import { Text } from './components/text/text'
import { ToggleGroup } from './components/tooglegroup/tooglegroup'
import { useState } from 'react'
import { DateRange, DateRangeType } from './components/dateRange/dateRange'
import { initialDateRange } from './utils'

function App() {
  const [value, setValue] = useState<string>('')
  const [dateRange, setDateRange] = useState<DateRangeType>(initialDateRange())
  return (
    <>   
      <div style={{display:'flex'}}>
        Menu
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

      <Textbox label='Label' placeholder='placeholder' description='esto es una description' suffix="€" className="w-max"/>
      <Textbox label='Label' placeholder='placeholder' description='esto tambien' />
      <Text.Title as='h1'>Hello World</Text.Title>
      <Text>Hola esto es mi texto gracias!</Text>
      <ToggleGroup label="Esto es el label" onChange={value => {
          console.log('value', value)
          setValue(value)
        }} value={value}>
        <ToggleGroup.Item value="uno">Uno</ToggleGroup.Item>
        <ToggleGroup.Item value="dos">Dos</ToggleGroup.Item>
        <ToggleGroup.Item value="tres">Tres</ToggleGroup.Item>
      </ToggleGroup>

      <DateRange value={dateRange} onChange={(dateRange: DateRangeType) => setDateRange(dateRange)} />
      <div className="mt-4">
        <Text>Selected Date Range: {dateRange.start.toLocaleDateString()} - {dateRange.end.toLocaleDateString()}</Text>
      </div>
    </>
  )
}

export default App
