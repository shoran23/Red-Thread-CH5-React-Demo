import React from 'react'

class Welcome extends React.Component {
    render() {
        return (
            <div id='welcome' onClick={()=> this.props.handleState('fullScreen',null)}> 
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