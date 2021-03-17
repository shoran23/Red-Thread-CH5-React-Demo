import React from 'react' 
import './vertical-fader.scss'

class VerticalFader extends React.Component {
    state = {
        startingLevel: 0,
        trackY: false,
    }
    /* LEVEL FUNCTIONS ******************************************************************************/
    changeLevel = e => {
        let upperFeedbackLimit = 90
        let lowerFeedbackLimit = -10
        if(this.state.trackY === true) {
            let setValue = this.state.startingLevel - e.touches[0].clientY
            if(setValue > 0) {
                if(this.props.mic.feedback < upperFeedbackLimit) {
                    this.props.handleFaderLevel(this.props.index,this.props.mic.feedback + 1)
                }
            } else {
                if(this.props.mic.feedback > lowerFeedbackLimit ) {
                    this.props.handleFaderLevel(this.props.index,this.props.mic.feedback - 1)
                }
            }
        }
    }
    startLevel = e => {
        this.setState({startingLevel: e.touches[0].clientY})
        this.setState({trackY: true})
    }
    stoplevel = () => {
        this.setState({trackY: false})
    }
    render() {
        return (
            <div className='vertical-fader'>
                <h5 className='vertical-fader-name' onMouseUp={this.stoplevel}>{this.props.mic.name}</h5>
                <div className='vertical-fader-container' onTouchEnd={this.stoplevel}>
                    <div className='vertical-fader-slide-track' onTouchEnd={this.stoplevel}>
                        <div className='vertical-fader-slider' onTouchStart={this.startLevel} onTouchMove={this.changeLevel} onTouchEnd={this.stopLevel}>
                            <div className='vertical-fader-slider-detail' onTouchStart={this.startLevel} onTouchMove={this.changeLevel} onTouchEnd={this.stoplevel}></div>
                        </div>
                        <div className='vertical-fader-slider-feedback'
                            onTouchEnd={this.stoplevel}
                            style={{
                                height: `${this.props.mic.feedback}%`
                            }}
                        ></div>
                    </div>
                    {this.props.mic.mute ?
                        <button className='vertical-fader-mute-on' onClick={()=> this.props.handleFaderMute(this.props.index)}>Muted</button>
                    :
                        <button className='vertical-fader-mute-off' onClick={()=> this.props.handleFaderMute(this.props.index)}>Mute</button>
                    }
                </div>
            </div>
        )
    }
}
export default VerticalFader