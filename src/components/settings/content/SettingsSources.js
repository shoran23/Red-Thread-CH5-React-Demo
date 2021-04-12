import React from 'react'
import SourceIcon from '../../source-icon/SourceIcon'

class SettingsSource extends React.Component {
    handleChange = e => {
        this.props.handleStateArray('sources',this.props.index,e.target.name,e.target.value)
    }
    handleIconChange = icon => {
        this.props.handleStateArray('sources',this.props.index,'icon',icon.value)
    }
    handleSourceDelete = () => {
        this.props.handleStateArrayDeleteItem('sources',this.props.index)
    }
    render() {
        return (
            <React.Fragment>
                {this.props.index > 0 ? 
                    <div className='settings-source settings-item'>
                        <form className='settings-source-form settings-form'>
                            <div className='settings-source-col settings-col'>
                                <label for='name'>Name</label>
                                <input
                                    className='settings-source-name'
                                    type='text'
                                    name='name'
                                    value={this.props.source.name}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className='settings-source-col settings-col'>
                                <label for='video-input'>Video Input</label>
                                <input
                                    className='settings-source-video-input'
                                    type='number'
                                    name='videoInput'
                                    value={this.props.source.videoInput}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className='settings-source-col settings-col'>
                                <label for='audio-input'>Audio Input</label>
                                <input
                                    className='settings-source-audio-input'
                                    type='number'
                                    name='audioInput'
                                    value={this.props.source.audioInput}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </form>
                        <SourceIcon
                            className='settings-source-icon settings-icon'
                            icon={this.props.source.icon}
                        />  
                        <SourceIcon
                            className='settings-source-icon-select settings-icon-select'
                            icon={'dropdown'}   
                            value={this.props.source.icon}
                            handleSelect={this.handleIconChange}
                        />
                        <button className='settings-source-remove settings-item-remove' onClick={this.handleSourceDelete}>Remove</button>
                    </div>
                :
                    <React.Fragment/>
                }
            </React.Fragment>
        )
    }
}

class SettingsSources extends React.Component {
    render() {
        return (
            <div id='settings-sources' className='settings-content-component'>
                <div className='settings-header' id='settings-sources-header'>
                    <h3 className='settings-title'>Source Settings</h3>
                    <button className='settings-sources-add settings-item-add' onClick={()=> this.props.handleStateArrayIncrease('sources',{name: '', videoInput: 0, audioInput: 0, icon: ''})}>Add Source</button>
                </div>
                <div className='settings-list' id='settings-sources-list'>
                    {this.props.sources.map((source,index) => (
                        <SettingsSource 
                            // states
                            key={index}
                            index={index}
                            source={source}
                            // functions
                            handleStateArray={this.props.handleStateArray}
                            handleStateArrayDeleteItem={this.props.handleStateArrayDeleteItem}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
export default SettingsSources