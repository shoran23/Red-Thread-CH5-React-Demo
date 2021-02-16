import React from 'react'
import './blu-ray-control.scss'

class BluRayTransportButton extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.index === this.props.selectedButton ?
                    <button className='blu-ray-control-transport-button-active' id={`blu-ray-control-transport-button-${this.props.index}`} onTouchStart={()=> this.props.pressButton(this.props.index)} onTouchEnd={this.props.releaseButton}>{this.props.button.name}</button>
                :
                    <button className='blu-ray-control-transport-button-inactive' id={`blu-ray-control-transport-button-${this.props.index}`} onTouchStart={()=> this.props.pressButton(this.props.index)} onTouchEnd={this.props.releaseButton}>{this.props.button.name}</button>
                }
            </React.Fragment>
        )
    }
}
class BluRayTransport extends React.Component {
    state = {
        buttons: [
            {name: 'previous',join: '801', icon: ''},
            {name: 'rewind', join: '802', icon: ''},
            {name: 'play', join: '803', icon: ''},
            {name: 'stop', join: '804', icon: ''},
            {name: 'pause', join: '805', icon: ''},
            {name: 'fast forward', join: '806', icon: ''},
            {name: 'next', join: '807', icon: ''},
        ],
        selectedButton: null,
    }
    pressButton = index => {
        this.setState({selectedButton: index})
        this.props.pulseControlSignal(this.state.buttons[index].join)
    }
    releaseButton = () => {
        this.setState({selectedButton: null})
    }
    render() {
        console.log(this.state.selectedButton)
        return (
            <div className='blu-ray-control-transport'>
                {this.state.buttons.map((button,index) => (
                    <BluRayTransportButton
                        // states
                        key={index}
                        index={index}
                        button={button}
                        selectedButton={this.state.selectedButton}
                        // functions
                        pressButton={this.pressButton}
                        releaseButton={this.releaseButton}
                    />
                ))}
            </div>
        )
    }
}
export default BluRayTransport