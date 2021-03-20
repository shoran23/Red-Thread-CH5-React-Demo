import React from 'react'

class VideoConferencingContentSource extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.index === this.props.vcSelectedContentSource ?
                    <button className='video-conferencing-content-source-active'>{this.props.source.name}</button>
                :
                    <button className='video-conferencing-content-source-inactive'>{this.props.source.name}</button>
                }
            </React.Fragment>
        )
    }
}

class VideoConferencingContent extends React.Component {
    render() {
        return (
            <div className='video-conferencing-content'>
                <div className='video-conferencing-content-options'>
                    <button>Start Sending Content</button>
                    <button>Stop Sending Content</button>
                </div>
                <div className='video-conferencing-content-sources'>
                    {this.props.vcContentSources.map((source,index) => (
                        <VideoConferencingContentSource
                            // states
                            key={index}
                            index={index}
                            source={source}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
export default VideoConferencingContent