import React from 'react'
import './center.scss';

import CenterNavigation from './navigation/CenterNavigation'
import VideoRouting from './video-routing/VideoRouting'
import AudioConferencing from './audio-conferencing/AudioConferencing'
import VideoConferencing from './video-conferencing/VideoConferencing';
import AudioControl from './audio-control/AudioControl'

import BluRayControl from './blu-ray-control/BluRayControl'


class Center extends React.Component {
    returnComponent = component => {
        switch(component) {
            case 'matrix': return (
                <VideoRouting
                    // states
                    sources={this.props.sources}
                    displays={this.props.displays}
                    sourceIndex={this.props.sourceIndex}
                    // functions
                    handleState={this.props.handleState}
                    handleDisplayState={this.props.handleDisplayState}
                    sendControlSignal={this.props.sendControlSignal}
                    pulseControlSignal={this.props.pulseControlSignal}
                />
            )
            case 'audio-control': return (
                <AudioControl
                    // states
                    mics={this.props.mics}
                    // functions
                    handleMicState={this.props.handleMicState}
                    pulseControlSignal={this.props.pulseControlSignal}
                    sendControlSignal={this.props.sendControlSignal}
                />
            )
            case 'ac': return (
                <AudioConferencing
                    // states
                    acKeypadText={this.props.acKeypadText}
                    acDial={this.props.acDial}
                    acFader={this.props.acFader}
                    // functions
                    handleState={this.props.handleState}
                    sendControlSignal={this.props.sendControlSignal}
                    pulseControlSignal={this.props.pulseControlSignal}
                />
            )
            case 'vc': return (
                <VideoConferencing/>
            )
            case 'catv': return 'Cable TV'
            case 'blu-ray': return (
                <BluRayControl
                    // functions
                    pulseControlSignal={this.props.pulseControlSignal}
                />
            )   
        }
    }
    render() {
        return (
            <div className='center'>
                <CenterNavigation
                    // states
                    centerComponent={this.props.centerComponent}
                    // functions
                    handleState={this.props.handleState}
                />
                <div className='center-render'>
                    {this.returnComponent(this.props.centerComponent)}
                </div>
            </div>
        )
    }
}
export default Center