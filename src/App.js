import React from 'react'
import './app.scss'

import Header from './components/header/Header.js'
import Center from './components/center/Center.js'
import Footer from './components/footer/Footer'

import * as CrComLib from '@crestron/ch5-crcomlib'
import {bridgeReceiveIntegerFromNative, bridgeReceiveBooleanFromNative, bridgeReceiveStringFromNative, bridgeReceiveObjectFromNative} from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib'
window['bridgeReceiveIntegerFromNative'] = bridgeReceiveIntegerFromNative 
window['bridgeReceiveBooleanFromNative'] = bridgeReceiveBooleanFromNative
window['bridgeReceiveStringFromNative'] = bridgeReceiveStringFromNative
window['bridgeReceiveObjectFromNative'] = bridgeReceiveObjectFromNative


class App extends React.Component {
    state = {
        centerComponent: 'matrix',
        sourceIndex: 0,
        sources: [
            {name: 'Wall Laptop', videoInput: 7, audioInput: 12, icon: ''},
            {name: 'Table Laptop', videoInput: 8, audioInput: 13, icon: ''},
            {name: 'Document Camera', videoInput: 1, audioInput: 5, icon: ''},
            {name: 'Cable TV', videoInput: 4, audioInput: 8, icon: ''},
            {name: 'Blu-ray', videoInput: 5, audioInput: 10, icon: ''},
            {name: 'VTC Speaker', videoInput: 2, audioInput: 6, icon: ''},
            {name: 'VTC Content', videoInput: 3, audioInput: 7, icon: ''},
        ],
        displays: [
            {name: 'Left Display', join: '101', sourceIndex: 0, power: true, listen: false},
            {name: 'Right Display', join: '102', sourceIndex: 0, power: false, listen: false},
            {name: 'Side Display', join: '103', sourceIndex: 4, power: true, listen: false}
        ],
        mics: [
            {name: 'Wireless Mic 1', feedback: 50, mute: false, levelJoin: '44', muteJoin: '404'},
            {name: 'Wireless Mic 2', feedback: 50, mute: false, levelJoin: '45', muteJoin: '405'},
            {name: 'Wireless Mic 3', feedback: 50, mute: false, levelJoin: '46', muteJoin: '406'},
            {name: 'Wireless Mic 4', feedback: 50, mute: false, levelJoin: '47', muteJoin: '407'},
            {name: 'Floor Box Mic 1', feedback: 50, mute: false, levelJoin: '48', muteJoin: '408'},
            {name: 'Floor Box Mic 2', feedback: 50, mute: false, levelJoin: '49', muteJoin: '409'},
            {name: 'Floor Box Mic 3', feedback: 50, mute: false, levelJoin: '50', muteJoin: '410'},
            {name: 'Floor Box Mic 4', feedback: 50, mute: false, levelJoin: '51', muteJoin: '411'},
        ],
        acKeypadText: '',
        acDial: false,
        acFader: [{name: 'Call Volume', feedback: 50, mute: false, levelJoin: '42', muteJoin: '402'}]
    }
    /* STATE MANAGEMENT *****************************************************************************************************************************/
    handleState = (key,value) => {
        this.setState({[key]: value})
    }
    handleDisplayState = (index,key,value) => {
        let displays = this.state.displays
        displays[index][key] = value
        this.setState({displays})
    }
    handleMicState = (index,key,value) => {
        let mics = this.state.mics
        mics[index][key] = value
        this.setState({mics})
    }
    /* CONTROL SYSTEM COMMUNICATION ******************************************************************************************************************/
    sendControlSignal = (type,join,value) => {
        CrComLib.publishEvent(type,join,value)
    }
    render() {

        return (
            <div className='app'>
                <Header />
                <Center
                    // states
                    centerComponent={this.state.centerComponent}
                    sources={this.state.sources}
                    displays={this.state.displays}
                    sourceIndex={this.state.sourceIndex}
                    mics={this.state.mics}
                    acKeypadText={this.state.acKeypadText}
                    acDial={this.state.acDial}
                    acFader={this.state.acFader}
                    // functions
                    handleState={this.handleState}
                    handleDisplayState={this.handleDisplayState}
                    handleMicState={this.handleMicState}
                />
                <Footer/>
            </div>
        )
    }
}
export default App