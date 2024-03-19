import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    // properties are initialized via the constructor
    super(props)

    // const [text, setText] = React.useState('hello')
    this.state = { time: new Date() }

    console.log('Clock component constructor.')
  }

  /**
   * componentDidMount()
   * This method is called after the component has been mounted to the DOM. It's commonly used for data fetching, 
   * setting up subscriptions, or interacting with the DOM.
   */
  componentDidMount() {
    console.log('component did mount')
    this.timerId = setInterval(() => this.tick(), 1000)
  }

  /**
   * componentDidUpdate(prevProps, prevState)
   * This method is called after the component's props or state have changed, 
   * and the component has been re-rendered. It's often used for updating the DOM in response to prop or state changes.
   */
  componentDidUpdate() {
    console.log('Component updated')
    console.log(this.state)
  }

  /**
   * componentWillUnmount()
   * This method is called when the component is about to be removed from the DOM. 
   * It's used for cleanup tasks such as cancelling network requests or cleaning up subscriptions.
   */
  componentWillUnmount() {
    console.log('Component unmount')
    clearInterval(this.timerId)
  }

  tick() {
    this.setState({ time: new Date() })
  }

  /**
   * render(): This is the only required method in a class component. It returns the JSX that represents the component's UI.
   * 
   * @returns JSX UI
   */
  render() {
    return (
      <div>
        <p>{this.state.time.toUTCString()}</p>
      </div>
    )
  }
}

export default Clock
