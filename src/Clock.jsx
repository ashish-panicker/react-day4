import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    // properties are initialized via the constructor
    super(props)

    // const [text, setText] = React.useState('hello')
    this.state = { time: new Date() }

    console.log('Clock component constructor.')
  }

  componentDidMount() {
    console.log('component did mount')
    this.timerId = setInterval(() => this.tick(), 1000)
  }

  componentDidUpdate() {
    console.log('Component updated')
    console.log(this.state)
  }

  componentWillUnmount() {
    console.log('Component unmount')
    clearInterval(this.timerId)
  }

  tick() {
    this.setState({ time: new Date() })
  }

  render() {
    return (
      <div>
        <p>{this.state.time.toUTCString()}</p>
      </div>
    )
  }
}

export default Clock
