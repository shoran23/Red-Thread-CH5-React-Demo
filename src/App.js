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
            {name: 'No Source', videoInput: 0, audioInput: 0, icon: ''},
            {name: 'Wall Laptop', videoInput: 7, audioInput: 12, icon: ''},
            {name: 'Table Laptop', videoInput: 8, audioInput: 13, icon: ''},
            {name: 'Document Camera', videoInput: 1, audioInput: 5, icon: ''},
            {name: 'Cable TV', videoInput: 4, audioInput: 8, icon: ''},
            {name: 'Blu-ray', videoInput: 5, audioInput: 10, icon: ''},
            {name: 'VTC Speaker', videoInput: 2, audioInput: 6, icon: ''},
            {name: 'VTC Content', videoInput: 3, audioInput: 7, icon: ''},
        ],
        displays: [
            {name: 'Left Display', sourceIndex: 0, power: true, listen: false, routeJoin: '101', powerJoin: '51', listenJoin: '61'},
            {name: 'Right Display', sourceIndex: 0, power: false, listen: false, routeJoin: '102', powerJoin: '52', listenJoin: '62'},
            {name: 'Side Display', sourceIndex: 4, power: true, listen: false, routeJoin: '103', powerJoin: '53', listenJoin: '63'},
        ],
        mics: [
            {name: 'Wireless Mic 1', feedback: 0, mute: false, levelJoin: '44', muteJoin: '404'},
            {name: 'Wireless Mic 2', feedback: 0, mute: false, levelJoin: '45', muteJoin: '405'},
            {name: 'Wireless Mic 3', feedback: 0, mute: false, levelJoin: '46', muteJoin: '406'},
            {name: 'Wireless Mic 4', feedback: 0, mute: false, levelJoin: '47', muteJoin: '407'},
            {name: 'Floor Box Mic 1', feedback: 0, mute: false, levelJoin: '48', muteJoin: '408'},
            {name: 'Floor Box Mic 2', feedback: 0, mute: false, levelJoin: '49', muteJoin: '409'},
            {name: 'Floor Box Mic 3', feedback: 0, mute: false, levelJoin: '50', muteJoin: '410'},
            {name: 'Floor Box Mic 4', feedback: 0, mute: false, levelJoin: '51', muteJoin: '411'},
        ],
        acKeypadText: '',
        acDial: false,
        acFader: [{name: 'Call Volume', feedback: 0, mute: false, levelJoin: '42', muteJoin: '402'}],
        vcKeypadText: '',
        vcDial: false,
        vcFader: [{name: 'Call Volume', feedback: 0, mute: false, levelJoin: '43', muteJoin: '403'}],
        VcDirectoryItems: [
            {name: 'Contact 1'},
            {name: 'Contact 2'},
            {name: 'Contact 3'},
            {name: 'Contact 4'},
            {name: 'Contact 5'},
            {name: 'Contact 6'},
            {name: 'Contact 7'},
            {name: 'Contact 8'},
            {name: 'Contact 9'},
            {name: 'Contact 10'},
            {name: 'Contact 11'},
            {name: 'Contact 12'},
            {name: 'Contact 13'},
            {name: 'Contact 14'},
            {name: 'Contact 15'},
            {name: 'Contact 16'},
            {name: 'Contact 17'},
            {name: 'Contact 18'},
            {name: 'Contact 19'},
            {name: 'Contact 20'},
        ],
        vcCameraPresets: ['Preset 1','Preset 2','Preset 3','Preset 4','Preset 5'],
        vcCameras: ['Near Camera','Far Camera'],
        vcSelectedCamera: null,
        vcSelectedCameraPreset: null,
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
    handleAcFaderState = (key,value) => {
        let acFader = this.state.acFader
        acFader[0][key] = value
        this.setState({acFader})
    }
    /* CONTROL SYSTEM FEEDBACK **********************************************************************************************************************/
    handleDisplayRouteFeedback = (displayIndex,videoInput) => {
        let displaySourceIndex = 0
        for(let sourceIndex = 0;sourceIndex<this.state.sources.length;sourceIndex++) {
            if(this.state.sources[sourceIndex].videoInput === videoInput) {
                displaySourceIndex = sourceIndex;
            }
        }
        this.handleDisplayState(displayIndex,'sourceIndex',displaySourceIndex)
        if(this.state.displays[displayIndex].listen === true) {
            this.sendControlSignal('n','100',this.state.sources[this.state.displays[displayIndex].sourceIndex].audioInput)
        }
    }
    handleMicLevelFeedback = (index,value) => {
        let scaledFeedback = value / 655.35    
        this.handleMicState(index,'feedback',scaledFeedback)
    }
    handleAcFaderLevelFeedback = (value) => {
        let scaledFeedback = value / 655.35
        this.handleAcFaderState('feedback',scaledFeedback)
    }
    handleVcContacts = () => {
        class VcDirectoryItem {
            constructor(name,join) {
                this.name = name
                this.join = join
            }
        }
    }
    /* CONTROL SYSTEM COMMUNICATION ******************************************************************************************************************/
    sendControlSignal = (type,join,value) => {
        CrComLib.publishEvent(type,join,value)
    }
    pulseControlSignal = (join) => {
        console.log('pulse control signal')
        this.sendControlSignal('b',join,true)
        setTimeout(()=> this.sendControlSignal('b',join,false),330)
    }
    subscribe = () => {
        // subscribe display states
        {this.state.displays.map((display,index) => {
            CrComLib.subscribeState('n',display.routeJoin,(value)=> this.handleDisplayRouteFeedback(index,value))
            CrComLib.subscribeState('b',display.powerJoin,(value)=> this.handleDisplayState(index,'power',value))
        })}
        // subscibe mic faders
        {this.state.mics.map((mic,index) => {
            CrComLib.subscribeState('b',mic.muteJoin,(value)=> this.handleMicState(index,'mute',value))
            CrComLib.subscribeState('n',mic.levelJoin,(value)=> this.handleMicLevelFeedback(index,value))
        })}
        // subscribe ac fader
        CrComLib.subscribeState('b',this.state.acFader[0].muteJoin,(value)=> this.handleAcFaderState('mute',value))
        CrComLib.subscribeState('n',this.state.acFader[0].levelJoin,(value)=> this.handleAcFaderLevelFeedback(value))
    }
    render() {
        console.log(this.state.vcContacts)
        return (
            <div className='app'>
                <Header 
                    jsonTest={this.state.jsonTest}
                />
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
                    vcKeypadText={this.state.vcKeypadText}
                    vcDial={this.state.vcDial}
                    vcFader={this.state.vcFader}
                    VcDirectoryItems={this.state.VcDirectoryItems}
                    vcCameraPresets={this.state.vcCameraPresets}
                    vcCameras={this.state.vcCameras}
                    vcSelectedCamera={this.state.vcSelectedCamera}
                    vcSelectedCameraPreset={this.state.vcSelectedCameraPreset}
                    // functions
                    handleState={this.handleState}
                    handleDisplayState={this.handleDisplayState}
                    handleMicState={this.handleMicState}
                    sendControlSignal={this.sendControlSignal}
                    pulseControlSignal={this.pulseControlSignal}
                    handleAcFaderState={this.handleAcFaderState}
                />
                <Footer/>
            </div>
        )
    }
    componentDidMount() {
        this.subscribe()
    }
}
export default App