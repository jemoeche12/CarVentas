
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a CarVentas" />
    <style>
      {
        `
          width: 100%;
        `
      }
    </style>
    </>
  )
}
 
export default App
