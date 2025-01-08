import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Card userName="Greek" link ="https://images.pexels.com/photos/772689/pexels-photo-772689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" about ="ancient Greek civilization, the period following Mycenaean civilization, which ended about 1200 bce, to the death of Alexander the Great, in 323 bce. It was a period of political, philosophical, artistic, and scientific achievements that formed a legacy with unparalleled influence. The larger historical period spanning from the output of ancient Greek author Homer in the 8th century bce to the decline of the Roman Empire in the 5th century ce is known as Classical antiquity, encompassing Greco-Roman culture, playing a major role in the Mediterranean sphere of influence and in the creation of Western civilization, and shaping areas as diverse as law, architecture, art, language, poetry, rhetoric, politics, and philosophy."/>
    <br />
    <Card userName ="Downtown" link ="https://images.pexels.com/photos/13339565/pexels-photo-13339565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" about="Downtown is a term primarily used in North America to refer to a city's sometimes commercial, cultural and often the historical, political, and geographic heart. It is often synonymous with its central business district (CBD). It may also be a center for shopping and entertainment. Downtowns typically contain a small percentage of a city's employment but are concentrated in services, including high-end services (office or white-collar jobs).[1][2] Sometimes, smaller downtowns include lower population densities and nearby lower incomes than suburbs.[3][4] It is often distinguished as a hub of public transit and culture.[5]"/>
    
    </>
  )
}

export default App
