import React from 'react'

class VideoConferencingContentSource extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.index === this.props.vcSelectedContentSource ?
                    <button className='video-conferencing-content-source-active' onClick={()=> this.props.handleSelectContentSource(this.props.index)}>{this.props.source.name}</button>
                :
                    <button className='video-conferencing-content-source-inactive' onClick={()=> this.props.handleSelectContentSource(this.props.index)}>{this.props.source.name}</button>
                }
            </React.Fragment>
        )
    }
}
class VideoConferencingContent extends React.Component {
    handleSelectContentSource = source => {
        this.props.sendControlSignal('n','721',this.props.vcContentSources[source].videoInput)
        this.props.sendControlSignal('n','722',this.props.vcContentSources[source].audioInput)
    }
    handleContentShare = state => {
        if(state === 'start') {
            this.props.pulseControlSignal('721')
        } else {
            this.props.pulseControlSignal('722')
        }
    }
    render() {
        return (
            <div id='video-conferencing-content'>
                <div id='video-conferencing-content-sources'>
                    {this.props.vcContentSources.map((source,index) => (
                        <VideoConferencingContentSource
                            // states
                            key={index}
                            index={index}
                            source={source}
                            vcSelectedContentSource={this.props.vcSelectedContentSource}
                            vcContentSources={this.props.vcContentSources}
                            // functions
                            handleSelectContentSource={this.handleSelectContentSource}
                        />
                    ))}
                </div>
                <div id='video-conferencing-content-options'>
                    {this.props.vcContentIsSharing ?
                        <React.Fragment>
                            <button id='video-conferencing-content-start-active' className='video-conferencing-content-option' onClick={()=> this.handleContentShare('start')}>Start Sending Content</button>
                            <button id='video-conferencing-content-stop-inactive' className='video-conferencing-content-option' onClick={()=> this.handleContentShare('stop')}>Stop Sending Content</button>
                        </React.Fragment>
                    :
                        <React.Fragment>
                            <button id='video-conferencing-content-start-inactive' className='video-conferencing-content-option' onClick={()=> this.handleContentShare('start')}>Start Sending Content</button>
                            <button id='video-conferencing-content-stop-active' className='video-conferencing-content-option' onClick={()=> this.handleContentShare('stop')}>Stop Sending Content</button>
                        </React.Fragment>
                    }
                </div>
            </div>
        )
    }
}
export default VideoConferencingContent