import React from 'react'
import Keypad from '../keypad/Keypad'

class SettingsPasscode extends React.Component {
    state = {
        settingsPasscodeText: '',
    }
    handleButtonPress = (index,value) => {
        if(value === 'Clear') {
            this.setState({settingsPasscodeText: ''})
        } else if(value === 'Enter') {
            if(this.state.settingsPasscodeText === this.props.settingsPasscode) {
                this.setState({settingsPasscodeText: 'Entry is correct'})
                setTimeout(()=> this.setState({settingsPasscodeText: ''}),1500)
                setTimeout(()=> {
                    this.props.handleState('settings',true)
                    this.props.handleState('modal',null)
                },2000)
            } else {
                this.setState({settingsPasscodeText: 'Entry is incorrect'})
                setTimeout(()=> this.setState({settingsPasscodeText: ''}),1500)
            }
        } else {    
            let text = this.state.settingsPasscodeText
            text = text + value
            this.setState({settingsPasscodeText: text})
        }
    }
    handleBackspace = () => {
        let text = this.state.settingsPasscodeText
        let exitedText = text.slice(0, -1)
        this.setState({settingsPasscodeText: exitedText})
    }
    render() {
        return (
            <div id='settings-passcode'>
                <h3 id='settings-passcode-message'>Enter the passcode to access system settings</h3>
                <Keypad
                    // states
                    keypadText={this.state.settingsPasscodeText}
                    width='50%'
                    height='75%'
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