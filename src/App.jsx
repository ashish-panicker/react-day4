import React from 'react'
import Clock from './Clock'
import DigitalClock from './DigitalClock'

function App() {
  // const [isVisible, setIsVisible] = React.useState(true)

  // setTimeout(() => setIsVisible((prevState) => !prevState), 5000)

  return (
    <>
      {/* {isVisible && <Clock format="24" tz="IST" targetTz="GMT" />}
      {!isVisible && <p>App component</p>} */}
      <DigitalClock />
    </>
  )
}

export default App
