import React from 'react'
import Clock from './Clock'

function App() {
  const [isVisible, setIsVisible] = React.useState(true)

  setTimeout(() => setIsVisible(false), 5000)

  return (
    <>
      {isVisible && <Clock format="24" tz="IST" targetTz="GMT" />}
      {!isVisible && <p>App component</p>}
    </>
  )
}

export default App
