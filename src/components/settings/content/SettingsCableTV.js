import React from 'react'
import ChannelIcon from '../../channel-icons/ChannelIcon'

class ChannelPreset extends React.Component {
    render() {
        return (
            <div>
                <ChannelIcon
                    iconRequest={this.props.iconRequests[this.props.index]}
                />
                <form>
                    <input
                        id='iconRequest'
                        value={this.props.iconRequests[this.props.index]}
                        onChange={this.props.handleIconRequests}
                    />
                    <input/>
                </form>
            </div>
        )
    }
}
class SettingsCableTV extends React.Component {
    state = {
        iconRequests: []
    }
    handleChange = e => {
        this.setState({[e.target.id]: e.target.value})
    }
    render() {
        console.log(this.state.iconRequest)
        return (
            <div id='settings-cable-tv' className='settings-content-component'>
                <form>
                    <input
                        type='text'
                        id='iconRequest'
                        value={this.state.iconRequest}
                        onChange={this.handleChange}
                    />
                </form>
                <ChannelIcon
                    iconRequest={this.state.iconRequest}
                />


            </div>
        )
    }
}
export default SettingsCableTV