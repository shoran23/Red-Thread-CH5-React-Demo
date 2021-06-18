import React from 'react'
import Dpad from './../../dpad/Dpad'

class VideoConferencingCameraButton extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.index === this.props.vcSelectedCamera ?
                    <button className='video-conferncing-camera-active' onClick={()=> this.props.handleState('vcSelectedCamera',this.props.index)}>{this.props.camera}</button>
                :
                    <button className='video-conferncing-camera-inactive' onClick={()=> this.props.handleState('vcSelectedCamera',this.props.index)}>{this.props.camera}</button>
                }
            </React.Fragment>
        )
    }
}
class VideoConferencingCameraPresetButton extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.index === this.props.vcSelectedCameraPreset ?
                    <button className='video-conferencing-camera-preset-active' className='video-conferencing-camera-list-buttons' onClick={()=> this.props.handleState('vcSelectedCameraPreset',this.props.index)}>{this.props.preset}</button>
                :
                    <button className='video-conferencing-camera-preset-inactive' className='video-conferencing-camera-list-buttons' onClick={()=> this.props.handleState('vcSelectedCameraPreset',this.props.index)}>{this.props.preset}</button>
                }
            </React.Fragment>
        )
    }
}
class VideoConferencingCameras extends React.Component {
    render() {
        return (
            <div className='video-conferencing-camera'>
                <div className='video-conferencing-camera-col'>
                    <div className='video-conferencing-camera-list-label'>Self View</div>
                    <button className='video-conferencing-camera-list-buttons'>Self View</button>
                    <button className='video-conferencing-camera-list-buttons'>Maximize</button>
                    <button className='video-conferencing-camera-list-buttons'>Minimize</button>
                </div>
                <div id='video-conferencing-camera-area'>
                    <div id='video-conferencing-camera-list'>
                        {this.props.vcCameras.map((camera,index) => (
                            <VideoConferencingCameraButton
                                // states
                                key={index}
                                index={index}
                                camera={camera}
                                vcSelectedCamera={this.props.vcSelectedCamera}
                                // functions
                                handleState={this.props.handleState}
                            />
                        ))}
                    </div>
                    <div id='video-conferencing-camera-zoom'>
                        <button className='video-conferencing-camera-zoom-buttons' id='video-conferencing-camera-zoom-in'>Zoom In</button>
                        <button className='video-conferencing-camera-zoom-buttons'>Zoom Out</button>
                    </div>
                    <div id='video-conferencing-camera-ptz'>
                        <Dpad
                            width={'300px'}
                            height={'300px'}
                        />
                    </div>
                </div>
                <div className='video-conferencing-camera-col'>
                    {/* preset saved feedback */}
                    <div className='video-conferencing-camera-list-label'>Camera Presets</div>
                    {this.props.vcCameraPresets.map((preset,index) => (
                        <VideoConferencingCameraPresetButton
                            // states
                            key={index}
                            index={index}
                            preset={preset}
                            vcSelectedCameraPreset={this.props.vcSelectedCameraPreset}
                            // functions
                            handleState={this.props.handleState}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
export default VideoConferencingCameras