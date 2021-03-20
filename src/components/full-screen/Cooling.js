import React from 'react'
import Guage from '../guage/Guage'

class Cooling extends React.Component {
    state = {
        feedbackLevel: 0,
    }
    runGuage = time => {
        let interval = (time * 1000) / 100
        for(let level=0;level<=100;level++) {
            setTimeout(() => {
                if(level < 100) {
                    this.setState({feedbackLevel: level})
                } else {
                    this.props.handleState('fullScreen','welcome')
                }
            }, level*interval)
        }
    }
    render() {
        return (
            <div id='cooling'>
                <div className='full-screen-header'></div>
                <div id='cooling-center'>
                    <div id='cooling-center-container'>
                        <h1 id='cooling-title'>Please wait while the system is shutting down.</h1>
                        <Guage
                            // states
                            width={'65%'}
                            height={'15%'}
                            feedbackColor={'#61bed4'}
                            mainColor={'#A9A9A9'}
                            borderColor={'#696969'}
                            feedbackLevel={this.state.feedbackLevel}
                        />
                    </div>
                </div>
                <div className='full-screen-footer'></div>
            </div>
        )
    }
    componentDidMount() {
        this.runGuage(10)
    }
}
export default Cooling