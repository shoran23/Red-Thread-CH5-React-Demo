import React from 'react'
import './full-screen.scss'
import Welcome from './Welcome'
import Cooling from './Cooling'

class FullScreen extends React.Component {
    returnModelComponent = component => {
        switch(component) {
            case 'welcome': return (
                <Welcome 
                    // functions
                    handleState={this.props.handleState}
                    getSettings={this.props.getSettings}
                />
            )
            case 'cooling': return (
                <Cooling
                    // functions
                    handleState={this.props.handleState}
                />
            )
        }
    }
    render() {
        return (
            <div id='full-screen'>
                {this.returnModelComponent(this.props.fullScreen)}
            </div>
        )
    }
}
export default FullScreen