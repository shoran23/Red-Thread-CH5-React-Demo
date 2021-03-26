import React from 'react'
import SettingsHeader from './SettingsHeader'
import SettingsNavigation from './SettingsNavigation'
import SettingsContent from './SettingsContent'
import './settings.scss'

class Settings extends React.Component {
    state = {
        selectedNavigation: 'Destinations',
        selectedSettingSource: null,
    }
    handleState = (key,value) => {
        this.setState({[key]: value})
    }
    render() {
        return (
            <div id='settings'>
                <SettingsHeader
                    // functions
                    handleState={this.props.handleState}
                />
                <SettingsNavigation
                    // states
                    selectedNavigation={this.state.selectedNavigation}
                    // functions
                    handleState={this.handleState}
                />
                <SettingsContent
                    // states
                    selectedNavigation={this.state.selectedNavigation}
                    selectedSettingSource={this.state.selectedSettingSource}
                    sources={this.props.sources}
                />
            </div>
        )
    }
}
export default Settings