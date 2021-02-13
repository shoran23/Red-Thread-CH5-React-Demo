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
            let setValue = this.state.startingLevel - e.clientY
            if(setValue > 0) {
                if(this.props.mic.feedback < upperFeedbackLimit) {
                    this.props.handleMicState(this.props.index,'feedback',this.props.mic.feedback + 1)
                }
            } else {
                if(this.props.mic.feedback > lowerFeedbackLimit) {
                    this.props.handleMicState(this.props.index,'feedback',this.props.mic.feedback - 1)
                }
            }
        }
    }
    /* MUTE FUNCTIONS **********************************************************************************/
    toggleMute = () => {
        this.props.handleMicState(this.props.index,'mute',!this.props.mic.mute)
    }
    startLevel = e => {
        this.setState({startingLevel: e.clientY})
        this.setState({trackY: true})
    }
    stoplevel = () => {
        this.setState({trackY: false})
    }
    render() {
        return (
            <div className='vertical-fader'>
                <h5 onMouseUp={this.stoplevel}>{this.props.mic.name}</h5>
                <div className='vertical-fader-container' onMouseUp={this.stoplevel}>
                    <div className='vertical-fader-slide-track' onMouseUp={this.stoplevel}>
                        <div className='vertical-fader-slider' onMouseDown={this.startLevel} onMouseMove={this.changeLevel} onMouseUp={this.stopLevel}>
                            <div className='vertical-fader-slider-detail' onMouseDown={this.startLevel} onMouseMove={this.changeLevel} onMouseUp={this.stoplevel}></div>
                        </div>
                        <div className='vertical-fader-slider-feedback'
                            onMouseUp={this.stoplevel}
                            style={{
                                height: `${this.props.mic.feedback}%`
                            }}
                        ></div>
                    </div>
                    {this.props.mic.mute ?
                        <button className='vertical-fader-mute-on' onClick={this.toggleMute}>Muted</button>
                    :
                        <button className='vertical-fader-mute-off' onClick={this.toggleMute}>Mute</button>
                    }
                </div>
            </div>
        )
    }
}
export default VerticalFader