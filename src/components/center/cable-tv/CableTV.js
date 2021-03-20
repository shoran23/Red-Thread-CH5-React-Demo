import React from 'react'
import './cable-tv.scss'
import Keypad from '../../keypad/Keypad'
import Dpad from '../../dpad/Dpad'

class CableTVControl extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.index === this.props.selectedControl ?
                    <button className='cable-tv-control-active' 
                        onMouseDown={()=> this.props.handleControlPress(this.props.index)} 
                        onMouseUp={this.props.handleControlRelease}
                        onMouseOut={this.props.handleControlRelease}
                    >
                        {this.props.control.label}
                    </button>
                :
                    <button className='cable-tv-control-inactive' 
                        onMouseDown={()=> this.props.handleControlPress(this.props.index)} 
                        onMouseUp={this.props.handleControlRelease}
                        onMouseOut={this.props.handleControlRelease}
                    >
                        {this.props.control.label}
                    </button>
                }
            </React.Fragment>
        )
    }
}
class CableTVPreset extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.index === this.props.selectedPreset ?
                    <button className='cable-tv-preset-active' 
                        onMouseDown={()=> this.props.handlePresetPress(this.props.index)}
                        onMouseUp={this.props.handlePresetRelease}
                        onMouseOut={this.props.handlePresetRelease}
                    >
                        {this.props.preset.label}
                    </button>
                :
                    <button className='cable-tv-preset-inactive'
                        onMouseDown={()=> this.props.handlePresetPress(this.props.index)}
                        onMouseUp={this.props.handlePresetRelease}
                        onMouseOut={this.props.handlePresetRelease}
                    >
                        {this.props.preset.label}
                    </button>
                }
            </React.Fragment>
        )
    }
}
class CableTV extends React.Component {
    state = {
        selectedControl: null,
        controls: [
            {label:'Menu', join: '811'},
            {label: 'Guide', join: '812'},
            {label: 'Exit', join: '813'},
            {label: 'Channel Up', join: '814'},
            {label: 'Channel Down', join: '815'}],
        presets: [
            {label: 'ESPN', channel: '136'},
            {label: 'ABC', channel: '125'},
            {label: 'NBC', channel: '113'},
            {label: 'CBS', channel: '103'},
            {label: 'CNN', channel: '140'}
        ],
        keypadDigits: [
            {label: '0', join: '800'},
            {label: '1', join: '801'},
            {label: '2', join: '802'},
            {label: '3', join: '803'},
            {label: '4', join: '804'},
            {label: '5', join: '805'},
            {label: '6', join: '806'},
            {label: '7', join: '807'},
            {label: '8', join: '808'},
            {label: '9', join: '809'},
            {label: 'Last', join: '810'},
            {label: 'Enter', join: '811'},
        ],
        selectedPreset: null,
    }
    handleControlPress = index => {
        this.setState({selectedControl: index})
        this.props.pulseControlSignal(this.state.controls[index].join)
    }
    handleControlRelease = () => {
        this.setState({selectedControl: null})
    }
    handleKeypadPress = (index,button) => {
        for(let keypadDigit of this.state.keypadDigits) {
            if(keypadDigit.label === button) {
                this.props.pulseControlSignal(keypadDigit.join)
                break;
            }
        }
    }
    handlePresetPress = index => {
        this.setState({selectedPreset: index})
        this.props.sendControlSignal('s','801',this.state.presets[index].channel)
    }
    handlePresetRelease = () => {
        this.setState({selectedPreset: null})
    }
    render() {
        return (
            <div id='cable-tv'>
                <div id='cable-tv-keypad' className='cable-tv-col'>
                    <Keypad
                        // states
                        width={'250px'}
                        height={'300px'}
                        miscLeft={'Last'}
                        miscRight={'Enter'}
                        // functions
                        pressFunction={this.handleKeypadPress}
                    />
                </div>
                <div id='cable-tv-dpad' className='cable-tv-col'>
                    <Dpad
                        width={'250px'}
                        height={'250px'}
                    />
                </div>
                <div id='cable-tv-controls' className='cable-tv-col'>
                    {this.state.controls.map((control,index) => (
                        <CableTVControl
                            // states
                            key={index}
                            index={index}
                            control={control}
                            selectedControl={this.state.selectedControl}
                            // functions
                            handleControlPress={this.handleControlPress}
                            handleControlRelease={this.handleControlRelease}
                        />
                    ))}
                </div>
                <div id='cable-tv-presets'>
                        <div id='cable-tv-presets-label'>Channel Presets</div>
                        <div id='cable-tv-presets-list'>
                            {this.state.presets.map((preset,index) => (
                                <CableTVPreset
                                    // states
                                    key={index}
                                    index={index}
                                    preset={preset}
                                    selectedPreset={this.state.selectedPreset}
                                    // functions
                                    handlePresetPress={this.handlePresetPress}
                                    handlePresetRelease={this.handlePresetRelease}
                                />
                            ))}
                        </div>
                </div> 
            </div>
        )
    }
}
export default CableTV
