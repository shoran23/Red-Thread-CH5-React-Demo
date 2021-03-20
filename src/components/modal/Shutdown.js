import React from 'react'

class Shutdown extends React.Component {
    render() {
        return (
            <div id='shutdown'>
                <p id='shutdown-messages'>Are you sure you want to shut the system down?</p>
                <div id='shutdown-options'>
                    <button id='shutdown-confirm' onClick={this.props.systemShutdown}>Yes (Shutdown)</button>
                    <button id='shutdown-cancel' onClick={()=> this.props.handleState('modal',null)}>No (Cancel)</button>
                </div>
            </div>
        )
    }
}
export default Shutdown