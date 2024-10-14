
import './App.css'
import Articles from './Components/Articles'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Posts from './Components/Posts'
import Topics from './Components/Topics'

function App() {
  return (
    <>
      <div style={{backgroundColor:"lightblue",paddingBottom:"130px"}}>
        <Navbar />
        <Home />
      </div>
        <Topics />
      <div style={{backgroundColor:"#d1d1d1"}}>
        <Articles />
      </div>
        <Posts />
    </>
  )
}

export default App
