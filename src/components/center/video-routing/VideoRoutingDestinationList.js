import React from 'react'
import VideoRoutingDisplay from './VideoRoutingDisplay'
import VideoRoutingProjector from './VideoRoutingProjector'

class VideoRoutingDestinationList extends React.Component {
    handleDisplayListen = (index) => {
        this.props.sendControlSignal('n','100',this.props.sources[this.props.displays[index].sourceIndex].audioInput)
        for(let displayIndex=0;displayIndex<this.props.displays.length;displayIndex++) {
            if(displayIndex === index) {
                this.props.handleDisplayState(displayIndex,'listen',true)
            } else {
                this.props.handleDisplayState(displayIndex,'listen',false)
            }
        }
    }
    handleDisplayRoute = (index) => {
        console.log(typeof(this.props.displays[index].routeJoin))
        this.props.sendControlSignal('n',this.props.displays[index].routeJoin,this.props.sources[this.props.sourceIndex].videoInput) 
    }
    render() {
        return (
            <div className='video-routing-destination-list'>
                {this.props.displays.map((display,index) => (
                    <div className='video-routing-destination-list-item'>
                        <h3>{display.name}</h3>
                        {display.icon === 'display' ?
                            <VideoRoutingDisplay
                                // states
                                key={index}
                                index={index}
                                display={display}
                                sources={this.props.sources}
                                sourceIndex={this.props.sourceIndex}
                                // functions
                                handleDisplayState={this.props.handleDisplayState}
                                handleDisplayRoute={this.handleDisplayRoute}
                            />
                        :
                            <VideoRoutingProjector
                                // states
                                key={index}
                                index={index}
                                display={display}
                                sources={this.props.sources}
                                sourceIndex={this.props.sourceIndex}
                                // functions
                                handleDisplayState={this.props.handleDisplayState}
                                handleDisplayRoute={this.handleDisplayRoute}
                            />
                        }
                        {display.power ?
                            <button className='video-routing-display-power-on' key={index + 10} onClick={()=> this.props.pulseControlSignal(display.powerJoin)}>Turn Off</button>
                        :
                            <button className='video-routing-display-power-off' key={index + 10} onClick={()=> this.props.pulseControlSignal(display.powerJoin)}>Turn On</button>
                        }

                        {display.listen ?
                            <button className='video-routing-display-listen-on' key={index + 20} onClick={()=> this.handleDisplayListen(index)}>Listen</button>
                        :
                            <button className='video-routing-display-listen-off' key={index + 20} onClick={()=> this.handleDisplayListen(index)}>Listen</button>
                        }
                    </div>
                ))}
            </div>
        )
    }
}
export default VideoRoutingDestinationList