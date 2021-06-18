import React from 'react'
import './video-conferencing.scss'
import VideoConferencingNavigation from './VideoConferencingNavigation'
import VideoConferencingDial from './VideoConferencingDial'
import VideoConferencingDirectory from './VideoConferencingDirectory'
import VideoConferencingCameras from './VideoConferencingCameras'
import VideoConferencingContent from './VideoConferencingContent'

class VideoConferencing extends React.Component {
    state = {
        vcComponent: 'dial',
    }
    returnVcComponent = component => {
        switch(component) {
            case 'dial': return (
                <VideoConferencingDial
                    // states
                    vcKeypadText={this.props.vcKeypadText}
                    vcDial={this.props.vcDial}
                    vcFader={this.props.vcFader}
                    // functions
                    handleState={this.props.handleState}
                    pulseControlSignal={this.props.pulseControlSignal}
                    sendControlSignal={this.props.sendControlSignal}
                />
            )
            case 'directory': return (
                <VideoConferencingDirectory
                    // states
                    VcDirectoryItems={this.props.VcDirectoryItems}
                />
            )
            case 'cameras': return <VideoConferencingCameras
                // states
                vcCameraPresets={this.props.vcCameraPresets}
                vcCameras={this.props.vcCameras}
                vcSelectedCamera={this.props.vcSelectedCamera}
                vcSelectedCameraPreset={this.props.vcSelectedCameraPreset}
                // functions
                handleState={this.props.handleState}
            />
            case 'content': return <VideoConferencingContent
                // states
                vcContentSources={this.props.vcContentSources}
                vcSelectedContentSource={this.props.vcSelectedContentSource}
                vcContentIsSharing={this.props.vcContentIsSharing}
                // functions
                handleState={this.props.handleState}
                sendControlSignal={this.props.sendControlSignal}
                pulseControlSignal={this.props.pulseControlSignal}
            />
        }
    }
    handleVcComponent = component => {
        this.setState({vcComponent: component})
    }
    render() {
        return (
            <div className='video-conferencing'>
                <div id='video-conferencing-title'>
                    <h1>Video Conferencing</h1>
                </div>
                <VideoConferencingNavigation
                    // states
                    vcComponent={this.state.vcComponent}
                    // functions
                    handleVcComponent={this.handleVcComponent}
                />
                {this.returnVcComponent(this.state.vcComponent)}
            </div>
        )
    }
}
export default VideoConferencing