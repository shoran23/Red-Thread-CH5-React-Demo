import React from 'react'
import Keypad from '../../keypad/Keypad'
import VideoConferencingDialButtons from './VideoConferencingDialButtons.js'
import HorizontalFader from './../../horizontal-fader/HorizontalFader.js'



class VideoConferencingDial extends React.Component {
    appendKeypadText = (index,value) => {
        this.props.handleState('vcKeypadText',this.props.vcKeypadText + value)
    }
    backspaceKeypadText = () => {
        let keypadText = this.props.vcKeypadText.slice(0,-1)
        this.props.handleState('vcKeypadText',keypadText)
    }
    handleFaderMute = index => {
        this.props.pulseControlSignal(this.props.acFader.muteJoin)
    }
    handleFaderLevel = (value) => {
        let scaledLevel = value * 655.35
        this.props.sendControlSignal('n',this.props.acFader.levelJoin,scaledLevel)
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
                    <HorizontalFader
                        // states
                        index={0}
                        fader={this.props.vcFader}
                        // functions
                        handleFaderMute={this.handleFaderMute}
                        handleFaderLevel={this.handleFaderLevel}
                    />
                </div>
            </div>
        )
    }
}
export default VideoConferencingDial