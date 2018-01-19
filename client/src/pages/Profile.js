import React, { Component } from 'react'
import Slider from 'react-rangeslider'

class Horizontal extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 0
    }
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = value => {
    this.setState({
      value: value
    })
  };

  handleChangeComplete = () => {
    console.log('Change event completed')
  };

  render () {
    const { value } = this.state
    return (
      <div className='slider'>
      <h1> Food </h1>
        <Slider
          min={0}
          max={5000}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        <div className='value'>{value}</div>
      </div>
    )
  }
}


class Horizontal extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 0
    }
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = value => {
    this.setState({
      value: value
    })
  };

  handleChangeComplete = () => {
    console.log('Change event completed')
  };

  render () {
    const { value } = this.state
    return (
      <div className='slider'>
      <h1> Transporation </h1>
        <Slider
          min={0}
          max={5000}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        <div className='value'>{value}</div>
      </div>
    )
  }
}




class Horizontal extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 0
    }
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = value => {
    this.setState({
      value: value
    })
  };

  handleChangeComplete = () => {
    console.log('Change event completed')
  };

  render () {
    const { value } = this.state
    return (
      <div className='slider'>
      <h1> My Budget </h1>
        <Slider
          min={0}
          max={5000}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        <div className='value'>{value}</div>
      </div>
    )
  }
}




class Horizontal extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 0
    }
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = value => {
    this.setState({
      value: value
    })
  };

  handleChangeComplete = () => {
    console.log('Change event completed')
  };

  render () {
    const { value } = this.state
    return (
      <div className='slider'>
      <h1> Misc </h1>
        <Slider
          min={0}
          max={5000}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        <div className='value'>{value}</div>
      </div>
    )
  }
}
render (){
  const{price}

  return (
    <div className ="tuitioninput">
    <h1> Tuition </h1>
<NumberInput
    id="price"
    type="tel"                      // optional, input[type]. Defaults to "tel" to allow non numeric characters
    onChange={this.onPriceChange}   // function (value: number | null, event: Event)
    value={this.state.price}        // normal react input binding
    placeholder="Enter price"       // all other input properties are supported
    min={0}                         // optional, set minimum allowed value
    max={100000}                       // optional, set maximum allowed value
    format="0,0[.]00"               // optional, numbro.js format string. Defaults to "0,0[.][00]"
/>
</div>
}





export default Horizontal