import React from 'react'

class Welcome extends React.Component {
    welcomePress = () => {
        this.props.handleState('fullScreen',null)
        this.props.getSettings()
    }
    render() {
        return (
            <div id='welcome' onClick={this.welcomePress}> 
                <div className='full-screen-header'></div>
                <div className='full-screen-center'>
                    <h1 className='full-screen-title'>RED THREAD</h1>
                    <p id='welcome-message'>Touch the screen to begin</p>
                </div>
                <div className='full-screen-footer'></div>
            </div>
        )
    }
}
export default Welcome