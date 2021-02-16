import React from 'react'
import './audio-control.scss'
import VerticalFader from '../../vertical-fader/VerticalFader.js'

class AudioControl extends React.Component {
    handleFaderMute = index => {
        this.props.pulseControlSignal(this.props.mics[index].muteJoin)
    }
    handleFaderLevel = (index,value) => {
        let scaledLevel = value * 655.35
        this.props.sendControlSignal('n',this.props.mics[index].levelJoin,scaledLevel)
    }
    render() {
        return (
            <div className='audio-control'>
                {this.props.mics.map((mic,index) => (
                    <VerticalFader
                        // states
                        key={index}
                        index={index}
                        mic={mic}
                        // functions
                        handleFaderMute={this.handleFaderMute}
                        handleFaderLevel={this.handleFaderLevel}
                    />
                ))}
            </div>
        )
    }
}
export default AudioControl