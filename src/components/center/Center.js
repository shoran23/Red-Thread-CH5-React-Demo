import React from 'react'
import './center.scss';

import CenterNavigation from './navigation/CenterNavigation'
import VideoRouting from './video-routing/VideoRouting'

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
            case 'audio-zone': return 'Audio Zones'
            case 'ac': return 'Audio Conferencing'
            case 'vc': return 'Video Conferencing'
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