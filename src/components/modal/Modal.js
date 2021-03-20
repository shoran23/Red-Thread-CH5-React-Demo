import React from 'react'
import './modal.scss'

import Shutdown from './Shutdown'
import IncomingAc from './IncomingAc'
import IncomingVc from './IncomingVc'

class Modal extends React.Component {
    returnModalComponent = component => {
        switch(component) {
            case 'shutdown': return (
                <Shutdown
                    // functions
                    handleState={this.props.handleState}
                    systemShutdown={this.props.systemShutdown}
                />
            )
            case 'incoming-vc': return (
                <IncomingVc/>
            )
        }
    }
    render() {
        return (
            <div id='modal'>
                {this.returnModalComponent(this.props.modal)}
            </div>
        )
    }
}
export default Modal