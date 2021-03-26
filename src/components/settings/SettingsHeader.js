import React from 'react'

class SettingsHeader extends React.Component {
    render() {
        return (
            <div id='settings-header'>
                <button onClick={()=> this.props.handleState('settings',false)}>Exit Settings</button>
            </div>
        )
    }
}
export default SettingsHeader