import React from 'React'

class VideoConferencingDialButton extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.feedback ?
                    <button className='video-conferencing-dial-button-active' id={this.props.id}>{this.props.name}</button>
                :
                    <button className='video-conferencing-dial-button-inactive' id={this.props.id}>{this.props.name}</button>
                }   
            </React.Fragment>
        )
    }
}
class VideoConferencingDialButtons extends React.Component {
    render() {
        return (
            <div className='video-conferencing-dial-buttons'>
                <VideoConferencingDialButton
                    name='Dial'
                    id='video-conferencing-dial-button-top'
                />
                <VideoConferencingDialButton
                    name='Hang Up'
                    id="video-conferencing-dial-button-middle-top"
                />
                <VideoConferencingDialButton
                    name='Redial'
                    id='video-conferencing-dial-button-middle'
                />
                <VideoConferencingDialButton
                    name='Clear'
                    id='video-conferencing-dial-button-middle-bottom'
                />
                <VideoConferencingDialButton
                    name='Keypad'
                    id='video-conferencing-dial-button-bottom'
                />
            </div>
        )
    }
}
export default VideoConferencingDialButtons