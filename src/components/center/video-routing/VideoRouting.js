import React from 'react'
import './video-routing.scss'
import VideoRoutingSourceList from './VideoRoutingSourceList'
import VideoRoutingDestinationList from './VideoRoutingDestinationList'

class VideoRouting extends React.Component {
    render() {
        return (
            <div className='video-routing'>
                <VideoRoutingSourceList
                    // states
                    sources={this.props.sources}
                    sourceIndex={this.props.sourceIndex}
                    // functions
                    handleState={this.props.handleState}
                />
                <VideoRoutingDestinationList
                    // states
                    sources={this.props.sources}
                    displays={this.props.displays}
                    sourceIndex={this.props.sourceIndex}
                    // functions
                    handleDisplayState={this.props.handleDisplayState}
                    sendControlSignal={this.props.sendControlSignal}
                    pulseControlSignal={this.props.pulseControlSignal}
                />
            </div>
        )
    }
}
export default VideoRouting