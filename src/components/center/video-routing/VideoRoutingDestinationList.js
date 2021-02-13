import React from 'react'
import VideoRoutingDisplay from './VideoRoutingDisplay'

class VideoRoutingDestinationList extends React.Component {
    render() {
        return (
            <div className='video-routing-destination-list'>
                {this.props.displays.map((display,index) => (
                    <div className='video-routing-destination-list-item'>
                        <h3>{display.name}</h3>
                        <VideoRoutingDisplay
                            // states
                            key={index}
                            index={index}
                            display={display}
                            sources={this.props.sources}
                            sourceIndex={this.props.sourceIndex}
                            // functions
                            handleDisplayState={this.props.handleDisplayState}
                        />
                        {display.power ?
                            <button className='video-routing-display-power-on' key={index + 10} onClick={()=> this.props.handleDisplayState(index,'power',false)}>Turn Off</button>
                        :
                            <button className='video-routing-display-power-off' key={index + 10} onClick={()=> this.props.handleDisplayState(index,'power',true)}>Turn On</button>
                        }

                        {display.listen ?
                            <button className='video-routing-display-listen-on' key={index + 20} onClick={()=> this.props.handleDisplayState(index,'listen',false)}>Listen</button>
                        :
                            <button className='video-routing-display-listen-off' key={index + 20} onClick={()=> this.props.handleDisplayState(index,'listen',true)}>Listen</button>
                        }
                    </div>
                ))}
            </div>
        )
    }
}
export default VideoRoutingDestinationList