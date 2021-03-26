import React from 'react'
import './settings-sources.scss'

class SettingsSource extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.index === this.props.selectedSettingSource ? 
                    <div className='settings-source-active'>{this.props.source.name}</div>
                :
                    <div className='settings-source-inactive'>{this.props.source.name}</div>
                }
            </React.Fragment>
        )
    }
}

class SettingsSources extends React.Component {
    render() {
        return (
            <div id='settings-sources' className='settings-content-component'>
                <div id='settings-sources-header'>
                    <div>Source Settings</div>
                    <button>Add Source</button>
                </div>
                <div id='settings-sources-list'>
                    {this.props.sources.map((source,index) => (
                        <SettingsSource 
                            // states
                            key={index}
                            index={index}
                            source={source}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
export default SettingsSources