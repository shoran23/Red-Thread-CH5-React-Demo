import React from 'react'
import Keypad from '../keypad/Keypad'

class SettingsPasscode extends React.Component {
    state = {
        settingsPasscodeText: '',
        settingsPasscodeFeedback: '',
    }
    handleButtonPress = (index,value) => {
        if(value === 'Clear') {
            this.setState({settingsPasscodeText: ''})
            this.setState({settingsPasscodeFeedback: ''})
        } else if(value === 'Enter') {
            if(this.state.settingsPasscodeText === this.props.settingsPasscode) {
                this.setState({settingsPasscodeFeedback: 'Entry is correct'})
                setTimeout(()=> this.setState({settingsPasscodeFeedback: ''}),1500)
                setTimeout(()=> {
                    this.props.handleState('settings',true)
                    this.props.handleState('modal',null)
                },2000)
            } else {
                this.setState({settingsPasscodeFeedback: 'Entry is incorrect'})
                setTimeout(()=> this.setState({settingsPasscodeFeedback: ''}),1500)
            }
        } else {    
            let text = this.state.settingsPasscodeText
            let feedback = this.state.settingsPasscodeFeedback
            text = text + value
            feedback = feedback + '*'
            this.setState({settingsPasscodeText: text})
            this.setState({settingsPasscodeFeedback: feedback})
        }
    }
    handleBackspace = () => {
        let text = this.state.settingsPasscodeText
        let feedback = this.state.settingsPasscodeFeedback
        let editedText = text.slice(0, -1)
        let editedFeedback = feedback.slice(0,-1)
        this.setState({settingsPasscodeText: editedText})
        this.setState({settingsPasscodeFeedback: editedFeedback})
    }
    render() {
        return (
            <div id='settings-passcode'>
                <button id='settings-passcode-cancel' onClick={()=> this.props.handleState('modal',null)}>Cancel</button>
                <h3 id='settings-passcode-message'>Enter the passcode to access system settings</h3>
                <Keypad
                    // states
                    keypadText={this.state.settingsPasscodeFeedback}
                    width='50%'
                    height='65%'
                    showText={true}
                    miscLeft='Clear'
                    miscRight='Enter'
                    // functions
                    pressFunction={this.handleButtonPress}
                    backspaceKeypadText={this.handleBackspace}
                />
            </div>
        )
    }
}
export default SettingsPasscode