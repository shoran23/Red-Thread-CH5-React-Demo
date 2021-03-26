import React from 'react'
import './footer.scss'
import HorizontalFader from '../horizontal-fader/HorizontalFader'

class Footer extends React.Component {
    handleFaderMute = (index) => {
        this.props.pulseControlSignal(this.props.progFader[0].muteJoin)
    }
    handleFaderLevel = (index,value) => {
        let scaledLevel = value * 655.35
        this.props.sendControlSignal('n',this.props.progFader[0].levelJoin,scaledLevel)
    }
    render() {
        return (
            <div className='footer'>
                <button id='footer-settings' onClick={()=> this.props.handleState('modal','settings-passcode')}>Settings</button>
                <div className='footer-fader-container'>
                    <HorizontalFader
                        // states
                        index={0}
                        fader={this.props.progFader[0]}
                        width='100%'
                        height='88%'
                        fontColor='whitesmoke'
                        // function
                        handleFaderMute={this.handleFaderMute}
                        handleFaderLevel={this.handleFaderLevel}
                    />     
                </div>
            </div>
        )
    }
}
export default Footer