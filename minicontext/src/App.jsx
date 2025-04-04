
import './App.css'
import { Datacontext, DataProvider } from './Component/Contextdata'
// import ContextData from 'Components/ContextData'
import Home from './Component/Home'


function App() {

  

  return (
   <>
   <div>
    <DataProvider>
    <Home/>
    </DataProvider>
   </div>
   
   
   </>
  )
}

export default App
