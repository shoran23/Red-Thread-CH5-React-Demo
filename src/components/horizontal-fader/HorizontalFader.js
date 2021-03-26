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
        let lowerFeedbackLimit = 1
        let adjustmentInterval = 2
        if(this.state.trackX === true) {
            let setValue = this.state.startingLevel - e.touches[0].clientX
            console.log(setValue)
            if(setValue > 0) {
                if(this.props.fader.feedback -  adjustmentInterval >= lowerFeedbackLimit) {
                    this.props.handleFaderLevel(this.props.index,this.props.fader.feedback - adjustmentInterval)
                } else {
                    if(this.props.fader.feedback > lowerFeedbackLimit) {
                        this.props.handleFaderLevel(this.props.index,this.props.fader.feedback - 1)
                    }
                }
            } else {
                if(this.props.fader.feedback + adjustmentInterval <= upperFeedbackLimit) {
                    this.props.handleFaderLevel(this.props.index,this.props.fader.feedback + adjustmentInterval)
                } else {
                    if(this.props.fader.feedback < upperFeedbackLimit) {
                        this.props.handleFaderLevel(this.props.index,this.props.fader.feedback + 1)
                    }
                }
            }
        }
    }
    startLevel = e => {
        this.setState({startingLevel: e.touches[0].clientX})
        this.setState({trackX: true})
    }
    stopLevel = e => {
        this.setState({trackX: false})
    }
    render() {
        console.log(this.state.trackX)
        return (
            <div className='horizontal-fader'
                style={{
                    width: `${this.props.width}`,
                    height: `${this.props.height}`,
                }}
            >
                <div className='horizontal-fader-name' onTouchEnd={this.stopLevel}
                    style={{
                        color: this.props.fontColor,
                    }}
                >
                    {this.props.fader.name}
                </div>
                <div className='horizontal-fader-container' onTouchEnd={this.stopLevel}>
                    <div className='horizontal-fader-button-container' onTouchEnd={this.stopLevel}>
                        {this.props.fader.mute ?
                            <button className='horizontal-fader-mute-on' onClick={this.props.handleFaderMute}>Muted</button>
                        :
                            <button className='horizontal-fader-mute-off' onClick={this.props.handleFaderMute}>Mute</button>
                        }   
                    </div>
                    <div className='horizontal-fader-slide-track'  onTouchStart={this.startLevel} onTouchMove={this.changeLevel} onTouchEnd={this.stopLevel}>
                    <div className='horizontal-fader-slider-feedback'
                            onTouchEnd={this.stopLevel}
                            style={{
                                width: `${this.props.fader.feedback}%`
                            }}
                        >
                        </div>
                        <div className='horizontal-fader-slider' onTouchStart={this.startLevel} onTouchMove={this.changeLevel} onTouchEnd={this.stopLevel}>
                            <div className='horizontal-fader-slider-detail' onTouchStart={this.startLevel} onTouchMove={this.changeLevel} onTouchEnd={this.stopLevel}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HorizontalFader
