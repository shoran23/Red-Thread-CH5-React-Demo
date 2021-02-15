import React from 'react'
import './audio-conferencing.scss'

class AcDialControlsButton extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.feedback ?
                    <button className='audio-conferencing-dial-controls-button-active'
                        onClick={this.props.function}
                        style={{
                            backgroundColor: this.props.activeColor,
                        }}
                    >{this.props.name}</button>
                :
                    <button className='audio-conferencing-dial-controls-button-inactive'
                        onClick={this.props.function}
                        style={{
                            backgroundColor: this.props.inactiveColor,
                        }}
                    >{this.props.name}</button>
                }
            </React.Fragment>
        )
    }
}
class AcDialControls extends React.Component {
    setDialTrue = () => {
        this.props.handleState('acDial',true)
    }
    setDialFalse = () => {
        this.props.handleState('acDial',false)
    }
    render() {
        return (
            <div className='audio-conferencing-dial-controls'>
                <div className='audio-conferencing-dial-controls-container'>
                    <AcDialControlsButton
                        name='Dial'
                        feedback={this.props.acDial}
                        activeColor='lightgreen'
                        inactiveColor='whitesmoke'
                        function={this.setDialTrue}
                    />
                    <AcDialControlsButton
                        name='Hang Up'
                        feedback={!this.props.acDial}
                        activeColor='red'
                        inactiveColor='whitesmoke'
                        function={this.setDialFalse}
                    />
                    <AcDialControlsButton
                        name='Redial'
                    />
                    <AcDialControlsButton
                        name='Clear'
                        function={this.props.clearKeypadText}
                    />
                </div>
            </div>
        )
    }
}
export default AcDialControls