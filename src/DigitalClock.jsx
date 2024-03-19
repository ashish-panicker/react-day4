import React from 'react'

const DigitalClock = () => {
  const [date, setDate] = React.useState({ val: new Date() })

  React.useEffect(() => {
    const timer = setInterval(() => setDate({ val: new Date() }), 1000)

    // Cleanup function to clear interval when component unmounts
    return () => {
      clearInterval(timer)
    }
  }, []) // Empty dependency array means effect runs only once after initial render

  return (
    <div>
      <h1>{date.val.toLocaleString()}</h1>
    </div>
  )
}

export default DigitalClock
