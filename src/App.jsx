
import './App.css'
import FavoriteColor from './components/FavoriteColor'
import LayoutCine from './components/LayoutCine'
import Toolbar from "./components/Toolbar"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      {/*
      <h1>Añadiendo interacción</h1>

      <h3>Respondiendo a eventos</h3>

      <Toolbar
        onPlayMovie = {()=> alert("Playing")}
        onUploadImage = {()=> alert("Uploading")}
      />

      <FavoriteColor/>
      */}
      <LayoutCine/>
    </>
  )
}

export default App
