import React from 'react'
import './blu-ray-control.scss'
import '../../keypad/keypad.scss'

import Keypad from '../../keypad/Keypad'
import Dpad from '../../dpad/Dpad'
import BluRayAdditionalButtons from './BluRayAdditionalButtons'
import BluRayTransport from './BluRayTransport'

class BluRayControl extends React.Component {
    state = {
        keypadJoins: ['811','812','813','814','815','816','817','818','819','820','821','822'],
        dpadJoins: ['']
    }
    keypadPress = (index,value) => {
        this.props.pulseControlSignal(this.state.keypadJoins[index])
        console.log(this.state.keypadJoins[index])
    }
    render() {
        return (
            <div className='blu-ray-control'>
                <div className='blu-ray-control-container' id='blu-ray-control-keypad'>
                    <Keypad
                        // states
                        width='85%'
                        height='75%'
                        showText={false}
                        miscLeft='Last'
                        miscRight='Enter'
                        // functions
                        pressFunction={this.keypadPress}
                    />
                </div>
                <div className='blu-ray-control-container' id='blu-ray-control-dpad'>
                    <Dpad
                        width='325px'
                        height='325px'
                    />
                </div>
                <div className='blu-ray-control-container' id='blu-ray-control-additional'>
                    <BluRayAdditionalButtons
                        // functions
                        pulseControlSignal={this.props.pulseControlSignal}
                    />
                </div>
                <div className='blu-ray-control-container' id='blu-ray-control-transport'>
                    <BluRayTransport
                        // functions
                        pulseControlSignal={this.props.pulseControlSignal}
                    />
                </div>
            </div>
        )
    }
}
export default BluRayControl