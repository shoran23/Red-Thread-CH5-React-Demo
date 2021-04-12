import React from 'react'
import ChannelIcon from '../../channel-icons/ChannelIcon'

class ChannelPreset extends React.Component {
    handlePresetChange = (e) => {
        e.preventDefault()
        this.props.handleStateArray('catvPresets',this.props.index,e.target.name,e.target.value)
    }
    handleDeletePreset = e => {
        e.preventDefault()
        this.props.handleStateArrayDeleteItem('catvPresets',this.props.index)
    }
    handleIcon = icon => {
        if(icon !== null) {
            this.props.handleStateArray('catvPresets',this.props.index,'icon',icon.value)
        } else {
            this.props.handleStateArray('catvPresets',this.props.index,'icon','')
        }
    }
    render() {
        return (
            <div className='settings-channel-preset settings-item'>
                <ChannelIcon
                    // states
                    icon={this.props.selectValue}
                    className='settings-channel-icon settings-icon'
                />
                <ChannelIcon
                    // states
                    className='settings-channel-icon-select settings-icon-select'
                    icon={'dropdown'}
                    value={this.props.selectValue}
                    handleSelect={this.handleIcon}
                />
                <form className='settings-channel-form settings-form'>
                    <div className='settings-channel-form-col settings-col'>
                        <label for='channel'>Channel</label>
                        <input
                            type='text'
                            name='channel'
                            value={this.props.catvPresets[this.props.index].channel}
                            onChange={this.handlePresetChange}
                        />
                    </div>
                </form>
                <button className='settings-channel-remove settings-item-remove' onClick={this.handleDeletePreset}>Remove</button>
            </div>
        )
    }
}
class SettingsCableTV extends React.Component {
    state = {
        iconRequests: [],
        selectValue: '',
        testingIcon: '',
    }
    handleChange = e => {
        this.setState({[e.target.id]: e.target.value})
    }
    render() {
        return (
            <div id='settings-cable-tv' className='settings-content-component'>
                <div className='settings-header' id='settings-cable-tv-header'>
                    <h3 className='settings-title'>Cable TV Settings</h3>
                   <button className='settings-item-add' id='settings-add-channel-preset' onClick={()=> this.props.handleStateArrayIncrease('catvPresets',{icon: '', channel: ''})}>Add Channel Preset</button>
                </div>
                <div className='settings-list'  id='settings-channel-preset-list'>
                    {this.props.catvPresets.map((catvPreset,index) => (
                        <ChannelPreset
                            // states
                            key={index}
                            index={index}
                            icon={'dropdown'}
                            catvPreset={catvPreset}
                            catvPresets={this.props.catvPresets}                      
                            selectId='selectValue'
                            selectValue={this.props.catvPresets[index].icon}
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
export default SettingsCableTV