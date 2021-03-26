import React from 'react'
import SettingsSources from './content/SettingsSources'
import SettingsDestinations from './content/SettingsDestinations'
import SettingsAudio from './content/SettingsAudio'
import SettingsVideoConf from './content/SettingsVideoConf'
import SettingsCableTV from './content/SettingsCableTV'
import SettingsBluRay from './content/SettingsBluray'

class SettingsContent extends React.Component {
    handleReturnComponent = component => {
        switch(component) {
            case 'Sources': return (
                <SettingsSources 
                    // states
                    sources={this.props.sources}
                />
            )
            case 'Destinations': return <SettingsDestinations/>
            case 'Audio': return <SettingsAudio/>
            case 'Video Conference': return <SettingsVideoConf/>
            case 'Cable TV': return <SettingsCableTV/>
            case 'Blu-ray': return <SettingsBluRay/>
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