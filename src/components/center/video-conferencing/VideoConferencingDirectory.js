import React from 'react'

class VideoConferencingDirectoryItem extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.index === this.props.selectedContact ?
                    <button className='video-conferencing-contact-active'>{this.props.contact.name}</button>
                :
                    <button className='video-conferencing-contact-inactive'>{this.props.contact.name}</button>
                }
            </React.Fragment>
        )
    }
}
class VideoConferenceingDirectory extends React.Component {
    render() {
        return (
            <div className='video-conferencing-directory'>
                Video Conferencing Directory
            </div>
        )
    }
}
export default VideoConferenceingDirectory