import React from 'react'

const DigitalClock = () => {
  const [date, setDate] = React.useState({ val: new Date() })

  React.useEffect(() => {
    const timer = setInterval(() => setDate({ val: new Date() }), 1000)
  }, [])

  return (
    <div>
      <h1>{date.val.toLocaleString()}</h1>
    </div>
  )
}

export default DigitalClock
