import React from 'react'

class VideoRoutingDisplay extends React.Component {
    render() {
        return (
            <React.Fragment>
                {!this.props.display.power ?
                    <div className='video-routing-display' onClick={()=> this.props.handleDisplayRoute(this.props.index)}>
                        <div className='video-routing-display-bezel' onClick={()=> this.props.handleDisplayRoute(this.props.index)}>
                            <div className='video-routing-display-screen-off' onClick={()=> this.props.handleDisplayRoute(this.props.index)}>
                                <div className='video-routing-display-screen-off-glare-left' onClick={()=> this.props.handleDisplayRoute(this.props.index)}></div>
                                <div className='video-routing-display-screen-off-glare-right' onClick={()=> this.props.handleDisplayRoute(this.props.index)}></div>
                            </div>
                        </div>
                    </div> 
                :
                    <div className='video-routing-display' onClick={()=> this.props.handleDisplayRoute(this.props.index)}>
                        <div className='video-routing-display-bezel' onClick={()=> this.props.handleDisplayRoute(this.props.index)}>
                            <div className='video-routing-display-screen-on' onClick={()=> this.props.handleDisplayRoute(this.props.index)}>
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