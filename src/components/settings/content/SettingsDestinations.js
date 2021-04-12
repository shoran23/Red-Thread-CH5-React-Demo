import React from 'react'

class SettingsDestination extends React.Component {
    handleChange = e => {
        this.props.handleStateArray('displays',this.props.index,e.target.name,e.target.value)
    }
    handleDestinationDelete = () => {
        this.props.handleStateArrayDeleteItem('displays',this.props.index)
    }
    render() {
        return (
            <div className='settings-destination settings-item'>
                <form className='settings-destination-form settings-form'>
                    <div className='settings-destination-col settings-col'>
                        <label for='name'>Name</label>
                        <input
                            className='settings-destination-name'
                            type='text'
                            name='name'
                            value={this.props.display.name}
                            onChange={this.handleChange}
                        />
                    </div>
                </form>
                <button className='settings-item-remove' onClick={this.handleDestinationDelete}>Remove</button>
            </div>
        )
    }
}
class SettingsDestinations extends React.Component {
    render() {
        return (
            <div id='settings-destinations' className='settings-content-component'>
                <div className='settings-header' id='settings-destinations-header'>
                    <h3 className='settings-title'>Destinations Settings</h3>
                    <button className='settings-item-add' id='settings-destinations-add'>Add Destination</button>
                </div>
                <div className='settings-list' id='settings-destination-list'>
                    {this.props.displays.map((display,index) => (
                        <SettingsDestination
                            // states
                            key={index}
                            index={index}
                            display={display}
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
export default SettingsDestinations