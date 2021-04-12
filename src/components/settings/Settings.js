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
        console.log('local settings = ',this.state.settings)
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
                    displays={this.props.displays}
                    catvPresets={this.props.catvPresets}
                    // functions
                    handleStateArray={this.props.handleStateArray}
                    handleStateArrayIncrease={this.props.handleStateArrayIncrease}
                    handleStateArrayDeleteItem={this.props.handleStateArrayDeleteItem}
                />
            </div>
        )
    }
}
export default Settings