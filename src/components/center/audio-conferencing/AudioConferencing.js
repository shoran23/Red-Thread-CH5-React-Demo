import React from 'react'
import './audio-conferencing.scss'

import Keypad from '../../keypad/Keypad.js'
import AcDialControls from './AcDialControls.js'
import VerticalFader from '../../vertical-fader/VerticalFader'

class AudioConferencing extends React.Component {
    appendKeypadText = (index,value) => {
        this.props.handleState('acKeypadText',this.props.acKeypadText + value)
    }
    backspaceKeypadText = () => {
        let keypadText = this.props.acKeypadText.slice(0,-1)
        this.props.handleState('acKeypadText',keypadText)
    }
    clearKeypadText = () => {
        this.props.handleState('acKeypadText','')
    }
    handleFaderMute = (index) => {
        this.props.pulseControlSignal(this.props.acFader[0].muteJoin)
    }
    handleFaderLevel = (index,value) => {
        let scaledLevel = value * 655.35
        this.props.sendControlSignal('n',this.props.acFader[0].levelJoin,scaledLevel)
    }
    render() {
        return (
            <div className='audio-conferencing'>
                <Keypad
                    // states
                    keypadText={this.props.acKeypadText}  
                    width='30%'
                    height='65%'  
                    showText={true}
                    miscLeft='*'
                    miscRight='#'
                    // functions
                    pressFunction={this.appendKeypadText}
                    backspaceKeypadText={this.backspaceKeypadText}
                />
                <AcDialControls
                    // states
                    acDial={this.props.acDial}
                    // functions
                    handleState={this.props.handleState}
                    clearKeypadText={this.clearKeypadText}
                />
                <VerticalFader
                    // states
                    index={0}
                    mic={this.props.acFader[0]}
                    // functions
                    handleFaderMute={this.handleFaderMute}
                    handleFaderLevel={this.handleFaderLevel}
                />
            </div>
        )
    }
}
export default AudioConferencing