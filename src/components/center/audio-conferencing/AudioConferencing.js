import React from 'react'
import './audio-conferencing.scss'

import Keypad from '../../keypad/Keypad.js'

class AudioConferencing extends React.Component {
    appendKeypadText = value => {
        this.props.handleState('acKeypadText',this.props.acKeypadText + value)
    }
    backspaceKeypadText = () => {
        console.log('backspace')
        let keypadText = this.props.acKeypadText.slice(0,-1)
        this.props.handleState('acKeypadText',keypadText)
    }
    render() {
        return (
            <div className='audio-conferencing'>
                <Keypad
                    // states
                    keypadText={this.props.acKeypadText}    
                    // functions
                    appendKeypadText={this.appendKeypadText}
                    backspaceKeypadText={this.backspaceKeypadText}
                />
            </div>
        )
    }
}
export default AudioConferencing