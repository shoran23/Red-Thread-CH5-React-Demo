import React from 'react'
import './center.scss';

import CenterNavigation from './navigation/CenterNavigation'
import VideoRouting from './video-routing/VideoRouting'
import AudioConferencing from './audio-conferencing/AudioConferencing'
import AudioControl from './audio-control/AudioControl'

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
                />
            )
            case 'audio-control': return (
                <AudioControl
                    // states
                    mics={this.props.mics}
                    // functions
                    handleMicState={this.props.handleMicState}
                />
            )
            case 'ac': return (
                <AudioConferencing
                    // states
                    acKeypadText={this.props.acKeypadText}
                    // functions
                    handleState={this.props.handleState}
                />
            )
            case 'vc': return 'Video Conferencing'
            case 'catv': return 'Cable TV'
            case 'blu-ray': return 'Blu-ray'
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