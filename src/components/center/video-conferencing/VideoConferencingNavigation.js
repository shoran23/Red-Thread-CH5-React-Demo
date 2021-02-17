import React from 'react'

class VideoConferenceNavigationButton extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.button.component === this.props.vcComponent ?
                    <button className='video-conferencing-navigation-button-active' onClick={()=> this.props.handleVcComponent(this.props.button.component)}>{this.props.button.name}</button>
                :
                    <button className='video-conferencing-navigation-button-inactive' onClick={()=> this.props.handleVcComponent(this.props.button.component)}>{this.props.button.name}</button>
                }
            </React.Fragment>
        )
    }
}

class VideoConferencingNavigation extends React.Component {
    state = {
        buttons: [
            {name: 'Dial', component: 'dial'},
            {name: 'Directory', component: 'directory'},
            {name: 'Cameras', component: 'cameras'},
            {name: 'Content', component: 'content'},
        ]
    }
    render() {
        return (
            <div className='video-conferencing-navigation'>
                {this.state.buttons.map((button,index) => (
                    <VideoConferenceNavigationButton
                        // states
                        key={index}
                        index={index}
                        button={button}
                        vcComponent={this.props.vcComponent}
                        // functions
                        handleVcComponent={this.props.handleVcComponent}
                    />
                ))}
            </div>
        )
    }
}
export default VideoConferencingNavigation