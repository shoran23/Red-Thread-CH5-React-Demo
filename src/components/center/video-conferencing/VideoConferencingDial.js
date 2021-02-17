import React from 'react'
import Keypad from '../../keypad/Keypad'
import VideoConferencingDialButtons from './VideoConferencingDialButtons.js'



class VideoConferencingDial extends React.Component {
    appendKeypadText = (index,value) => {
        this.props.handleState('vcKeypadText',this.props.vcKeypadText + value)
    }
    backspaceKeypadText = () => {
        let keypadText = this.props.vcKeypadText.slice(0,-1)
        this.props.handleState('vcKeypadText',keypadText)
    }
    render() {
        return (
            <div className='video-conferencing-dial'>
                <div id='video-conferencing-dial-keypad-container'>
                    <Keypad
                        // states
                        keypadText={this.props.vcKeypadText}
                        width='60%'
                        height='90%'
                        showText={true}
                        miscLeft='*'
                        miscRight='#'
                        // functions
                        pressFunction={this.appendKeypadText}
                        backspaceKeypadText={this.backspaceKeypadText}
                    />
                </div>
                <div id='video-conferencing-dial-buttons-container'>
                    <VideoConferencingDialButtons
                    
                    />
                </div>
                <div id='video-conferencing-dial-fader-container'>
                    Horizontal Fader
                </div>
            </div>
        )
    }
}
export default VideoConferencingDial