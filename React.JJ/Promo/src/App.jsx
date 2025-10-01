// import { usestate } from 'react'
import './App.css'

function App() {
  return (
    <div>
       <Header name={"deepak"}/>
       <Header name={"harsh"}/>
       <Header />
       <Header />
    </div>
  )
}

function Header(props) {
  return (
    <div>
      go fuck yourself {props.name}
    </div>
  )
}

export default App
