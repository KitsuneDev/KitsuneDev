import BIRDS from 'vanta/dist/vanta.birds.min'
import React from 'react'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

class AnimatedBackground extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div style={{position: 'absolute'}}>
      <div ref={this.vantaRef} style={{position: 'fixed', zIndex: '-100', width: '100%', height: '100%'}}></div>
      {this.props.children}
    </div>
  }
}

export {AnimatedBackground}