import React from 'react'

class VideoRoutingProjector extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='video-routing-projector' onClick={()=> this.props.handleDisplayRoute(this.props.index)}>
                    <div className='video-routing-projector-body'>
                        <div className='video-routing-projector-lens-bezel'>
                            {this.props.display.power ?
                                <div className='video-routing-projector-lens-on'>
                                    <div className='video-routing-projector-lens-inner-on'></div>
                                </div>
                            :
                                <div className='video-routing-projector-lens-off'>
                                    <div className='video-routing-projector-lens-inner-off'></div>
                                </div>
                            }
                        </div>
                        <div className='video-routing-projector-source'>
                            {this.props.display.sourceIndex != null ?
                                this.props.sources[this.props.display.sourceIndex].name
                            :
                                <div></div>
                            }
                        </div>
                    </div>
                    <div className='video-routing-projector-feet'>
                        <div className='video-routing-projector-left-foot'/>
                        <div className='video-routing-projector-right-foot'/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default VideoRoutingProjector