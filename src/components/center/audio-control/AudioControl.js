import React from 'react'
import './audio-control.scss'

import VerticalFader from '../../vertical-fader/VerticalFader.js'

class AudioControl extends React.Component {
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
                        handleMicState={this.props.handleMicState}
                    />
                ))}
            </div>
        )
    }
}
export default AudioControl