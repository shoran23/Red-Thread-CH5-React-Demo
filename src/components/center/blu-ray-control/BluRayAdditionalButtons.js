import React from 'react'

class BluRayAdditionalButton extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.index === this.props.selectedButton ?
                    <button className='blu-ray-additional-button-active' id={`blu-ray-additional-button-${this.props.index}`} onTouchStart={()=> this.props.handlePress(this.props.index)} onTouchEnd={this.props.handleRelease}>{this.props.button.name}</button>
                :
                    <button className='blu-ray-additional-button-inactive' id={`blu-ray-additional-button-${this.props.index}`} onTouchStart={()=> this.props.handlePress(this.props.index)} onTouchEnd={this.props.handleRelease}>{this.props.button.name}</button>
                }
            </React.Fragment>
        )
    }
}
class BluRayAdditionalButtons extends React.Component {
    state = {
        buttons: [
            {name: 'Home', join: '831'},
            {name: 'Menu', join: '832'},
            {name: 'Return', join: '833'},
            {name: 'Exit', join: '834'},
            {name: 'Eject', join: '835'}
        ],
        selectedButton: null,
    }
    handlePress = (index) => {
        this.setState({selectedButton: index})
        this.props.pulseControlSignal(this.state.buttons[index].join)
    }
    handleRelease = () => {
        this.setState({selectedButton: null})
    }
    render() {
        return (
            <div className='blu-ray-additional-buttons'>
                {this.state.buttons.map((button,index) => (
                    <BluRayAdditionalButton
                        // states
                        key={index}
                        index={index}
                        button={button}
                        selectedButton={this.state.selectedButton}
                        // functions
                        handlePress={this.handlePress}
                        handleRelease={this.handleRelease}
                    />
                ))}
            </div>
        )
    }
}
export default BluRayAdditionalButtons