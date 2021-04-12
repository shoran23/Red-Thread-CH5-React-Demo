import React from 'react'
import SettingsSources from './content/SettingsSources'
import SettingsDestinations from './content/SettingsDestinations'
import SettingsAudio from './content/SettingsAudio'
import SettingsVideoConf from './content/SettingsVideoConf'
import SettingsCableTV from './content/SettingsCableTV'
import SettingsBluRay from './content/SettingsBluray'
import SettingsFetch from './content/SettingsFetch'
import SettingsIconDev from './content/SettingsIconDev'

class SettingsContent extends React.Component {
    handleReturnComponent = component => {
        switch(component) {
            case 'Sources': return (
                <SettingsSources 
                    // states
                    sources={this.props.sources}
                    // functions
                    handleStateArray={this.props.handleStateArray}
                    handleStateArrayIncrease={this.props.handleStateArrayIncrease}
                    handleStateArrayDeleteItem={this.props.handleStateArrayDeleteItem}
                />
            )
            case 'Destinations': return (
                <SettingsDestinations
                    // states
                    displays={this.props.displays}
                    // functions
                    handleStateArray={this.props.handleStateArray}
                    handleStateArrayIncrease={this.props.handleStateArrayIncrease}
                    handleStateArrayDeleteItem={this.props.handleStateArrayDeleteItem}
                />
            )
            case 'Audio': return <SettingsAudio/>
            case 'Video Conference': return <SettingsVideoConf/>
            case 'Cable TV': return (
                <SettingsCableTV
                    // states
                    catvPresets={this.props.catvPresets}
                    // functions
                    handleStateArray={this.props.handleStateArray}
                    handleStateArrayIncrease={this.props.handleStateArrayIncrease}
                    handleStateArrayDeleteItem={this.props.handleStateArrayDeleteItem}
                />
            )
            case 'Blu-ray': return <SettingsBluRay/>
            case 'Fetch': return <SettingsFetch/>
            case 'Icon Development': return <SettingsIconDev/>
        }
    }
    render() {
        return (
            <div id='settings-content'>
                {this.handleReturnComponent(this.props.selectedNavigation)}
            </div>
        )
    }
}
export default SettingsContent