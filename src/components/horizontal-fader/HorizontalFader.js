import React from 'react'
import './horizontal-fader.scss'

class HorizontalFader extends React.Component {
    state = {
        startingLevel: 0,
        trackX: false,
    }
    /* LEVEL FUNCTIONS *************************************************************************************/
    changeLevel = e => {
        let upperFeedbackLimit = 90
        let lowerFeedbackLimit = -10
        if(this.state.trackX === true) {
            let setValue = this.state.startingLevel - e.touches[0].clientX
            if(setValue > 0) {
                if(this.props.fader.feedback < upperFeedbackLimit) {
                    this.props.handleFaderLevel(this.props.index,this.props.fader.feedback + 1)
                }
            } else {
                if(this.props.fader.feedback < lowerFeedbackLimit) {
                    this.props.handleFaderLevel(this.props.index,this.props.fader.feedback - 1)
                }
            }
        }
    }
    startLevel = e => {
        this.setState({startingLevel: e.touches[0].clientX})
        this.setState({trackX: true})
    }
    stopLevel = e => {
        this.setState({trackY: false})
    }
    render() {
        return (
            <div className='horizontal-fader'>
                <div className='horizontal-fader-name' onMouseUp={this.stopLevel}>{this.props.fader[0].name}</div>
                <div className='horizontal-fader-container' onTouchEnd={this.stopLevel}>
                    <div className='horizontal-fader-button-container' onTouchEnd={this.stopLevel}>
                        {false ?
                            <button className='horizontal-fader-mute-on' onClick={this.props.handleFaderMute}>Muted</button>
                        :
                            <button className='horizontal-fader-mute-off' onClick={this.props.handleFaderMute}>Mute</button>
                        }   
                    </div>
                    <div className='horizontal-fader-slide-track' onTouchEnd={this.stopLevel}>
                        <div className='horizontal-fader-slider' onTouchStart={this.startLevel} onTouchMove={this.changeLevel} onTouchEnd={this.stopLevel}>
                            <div className='horizontal-fader-slider-detail' onTouchStart={this.startLevel} onTouchMove={this.changeLevel} onTouchEnd={this.stopLevel}></div>
                        </div>
                        <div className='horizontal-fader-slider-feedback'
                            onTouchEnd={this.stopLevel}
                            style={{
                                height: `${this.props.fader[0].feedback}%`
                            }}
                        >
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HorizontalFader
