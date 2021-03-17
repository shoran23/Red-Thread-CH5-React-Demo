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
                    <button className='video-conferencing-camera-preset-active' onClick={()=> this.props.handleState('vcSelectedCameraPreset',this.props.index)}>{this.props.preset}</button>
                :
                    <button className='video-conferencing-camera-preset-inactive' onClick={()=> this.props.handleState('vcSelectedCameraPreset',this.props.index)}>{this.props.preset}</button>
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
                    <button>Self View</button>
                    <button>Maximize</button>
                    <button>Minimize</button>
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
                        <button>Zoom In</button>
                        <button>Zoom Out</button>
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
                    <h5>Camera Presets</h5>
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