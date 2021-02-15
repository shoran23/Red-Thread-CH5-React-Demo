import React from 'react'

class VideoRoutingSourceButton extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.index > 0 ?
                    <React.Fragment>
                        {this.props.index === this.props.sourceIndex ?
                            <button className='video-routing-source-button-active' onClick={()=> this.props.handleState('sourceIndex',this.props.index)}>{this.props.source.name}</button>
                        :
                            <button className='video-routing-source-button-inactive' onClick={()=> this.props.handleState('sourceIndex',this.props.index)}>{this.props.source.name}</button>
                        }
                    </React.Fragment>
                :
                    <div></div>
                }
            </React.Fragment>
        )
    }
}
class VideoRoutingSourceList extends React.Component{
    render() {
        return (
            <div className='video-routing-source-list'>
                {this.props.sources.map((source,index) => (
                    <VideoRoutingSourceButton
                        // states
                        key={index}
                        index={index}
                        source={source}
                        sourceIndex={this.props.sourceIndex}
                        // functions
                        handleState={this.props.handleState}
                    />
                ))}
            </div>
        )
    }
}
export default VideoRoutingSourceList