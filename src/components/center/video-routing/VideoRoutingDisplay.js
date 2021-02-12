import React from 'react'

class VideoRoutingDisplay extends React.Component {
    render() {
        return (
            <React.Fragment>
                {!this.props.display.power ?
                    <div className='video-routing-display'>
                        <div className='video-routing-display-bezel'>
                            <div className='video-routing-display-screen-off' onClick={()=> this.props.handleDisplayState(this.props.index,'sourceIndex',this.props.sourceIndex)}>
                                <div className='video-routing-display-screen-off-glare-left'></div>
                                <div className='video-routing-display-screen-off-glare-right'></div>
                            </div>
                        </div>
                    </div> 
                :
                    <div className='video-routing-display'>
                        <div className='video-routing-display-bezel'>
                            <div className='video-routing-display-screen-on' onClick={()=> this.props.handleDisplayState(this.props.index,'sourceIndex',this.props.sourceIndex)}>
                                {this.props.display.sourceIndex != null ?
                                    this.props.sources[this.props.display.sourceIndex].name
                                :
                                    <div></div>
                                }
                            </div>
                        </div>
                    </div> 
                }
            </React.Fragment> 
        )
    }
}
export default VideoRoutingDisplay