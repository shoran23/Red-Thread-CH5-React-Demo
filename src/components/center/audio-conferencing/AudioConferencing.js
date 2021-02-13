import React from 'react'
import './audio-conferencing.scss'

import Keypad from '../../keypad/Keypad.js'
import AcDialControls from './AcDialControls.js'
import VerticalFader from '../../vertical-fader/VerticalFader'

class AudioConferencing extends React.Component {
    appendKeypadText = value => {
        this.props.handleState('acKeypadText',this.props.acKeypadText + value)
    }
    backspaceKeypadText = () => {
        console.log('backspace')
        let keypadText = this.props.acKeypadText.slice(0,-1)
        this.props.handleState('acKeypadText',keypadText)
    }
    clearKeypadText = () => {
        this.props.handleState('acKeypadText','')
    }
    render() {
        return (
            <div className='audio-conferencing'>
                <Keypad
                    // states
                    keypadText={this.props.acKeypadText}  
                    width='30%'
                    height='65%'  
                    // functions
                    appendKeypadText={this.appendKeypadText}
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
                    mic={this.props.acFader[0]}
                />
            </div>
        )
    }
}
export default AudioConferencing