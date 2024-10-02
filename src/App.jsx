import { useState } from 'react'
import './App.css'
import AddEvent from './Components/AddEvent/AddEvent'
import { Route, Routes } from 'react-router-dom'
import Events from './Components/Events/Events'
// import Events from './Components/Events/Events'

function App() {
  const [events, setEvents] = useState([])
  return (
    <div>
      <Routes>
        <Route path='/' element={<Events events={events} />} />
        <Route path='/add-event' element={<AddEvent setEvents={setEvents} />} />
      </Routes>
    </div>
  )
}

export default App
