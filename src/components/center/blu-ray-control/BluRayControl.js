import React from 'react'
import './blu-ray-control.scss'

import Dpad from '../../dpad/Dpad'

class BluRayControl extends React.Component {
    render() {
        return (
            <div className='blu-ray-control'>
                <div className='blu-ray-control-container' id='blu-ray-control-keypad'>Keypad Control</div>
                <div className='blu-ray-control-container' id='blu-ray-control-dpad'>
                    <Dpad
                        width='250px'
                        height='250px'
                    />
                </div>
                <div className='blu-ray-control-container' id='blu-ray-control-additional'>Additional Buttons</div>
                <div className='blu-ray-control-container' id='blu-ray-control-transport'>Transport</div>
            </div>
        )
    }
}
export default BluRayControl