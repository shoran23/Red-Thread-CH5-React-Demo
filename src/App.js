import React from 'react'
import './app.scss'
import Header from './components/header/Header'
import Center from './components/center/Center'
import Footer from './components/footer/Footer'
import Modal from './components/modal/Modal'
import FullScreen from './components/full-screen/FullScreen'
import Settings from './components/settings/Settings'

import * as CrComLib from '@crestron/ch5-crcomlib'

import {bridgeReceiveIntegerFromNative, bridgeReceiveBooleanFromNative, bridgeReceiveStringFromNative, bridgeReceiveObjectFromNative} from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib'
window['bridgeReceiveIntegerFromNative'] = bridgeReceiveIntegerFromNative 
window['bridgeReceiveBooleanFromNative'] = bridgeReceiveBooleanFromNative
window['bridgeReceiveStringFromNative'] = bridgeReceiveStringFromNative
window['bridgeReceiveObjectFromNative'] = bridgeReceiveObjectFromNative

class App extends React.Component {
    state = {
        settings: false,
        settingsPasscode: '41794',
        modal: null,
        fullScreen: 'welcome',
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
            {name: 'Left Display', sourceIndex: 0, power: true, listen: false, routeJoin: '101', powerJoin: '51', powerOffJoin: '55', listenJoin: '61'},
            {name: 'Right Display', sourceIndex: 0, power: false, listen: false, routeJoin: '102', powerJoin: '52', powerOffJoin: '56', listenJoin: '62'},
            {name: 'Side Display', sourceIndex: 4, power: true, listen: false, routeJoin: '103', powerJoin: '53', powerOffJoin: '57',listenJoin: '63'},
        ],
        progFader: [{name: 'Media Volume', feedback: 0, mute: false, levelJoin: '41', muteJoin: '401'}],
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
        vcFader: [{name: 'Call Volume', feedback: 50, mute: false, levelJoin: '43', muteJoin: '403'}],
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
        ],
        vcCameraPresets: ['Preset 1','Preset 2','Preset 3','Preset 4','Preset 5'],
        vcCameras: ['Near Camera','Far Camera'],
        vcSelectedCamera: null,
        vcSelectedCameraPreset: null,
        vcContentSources: [
            {name: 'Wall Laptop', videoInput: 7, audioInput: 12, icon: ''},
            {name: 'Table Laptop', videoInput: 8, audioInput: 13, icon: ''},
            {name: 'Document Camera', videoInput: 1, audioInput: 5, icon: ''},
        ],
        vcSelectedContentSource: null,
        vcContentIsSharing: true,
        catvPresets: [
            {label: 'ESPN', channel: '136'},
            {label: 'AdultSwim', channel: '125'},
            {label: 'NBC', channel: '113'},
            {label: 'CNN', channel: '103'},
            {label: 'ComedyCentral', channel: '140'}
        ]
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
    handleVcFaderState = (key,value) => {
        let vcFader = this.state.vcFader
        vcFader[0][key] = value
        this.setState({vcFader})
    }
    handleProgFaderState = (key,value) => {
        let progFader = this.state.progFader
        progFader[0][key] = value
        this.setState({progFader})
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
    handleContentRouteFeedback = contentInput => {
        for(let sourceIndex=0;sourceIndex<this.state.vcContentSources.length;sourceIndex++) {
            if(this.state.vcContentSources[sourceIndex].videoInput === contentInput) {
                this.handleState('vcSelectedContentSource',sourceIndex)
                break;
            }
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
    handleVcFaderLevelFeedback = (value) => {
        let scaledFeedback = value / 655.35
        this.handleVcFaderState('feedback',scaledFeedback)
    }
    handleProgFaderLevelFeedback = value => {
        let scaledFeedback = value / 655.35
        this.handleProgFaderState('feedback',scaledFeedback)
    }
    handleVcContacts = (value) => {
        //var contacts = JSON.parse(value);
        let directory = this.state.VcDirectoryItems
        directory[0] = value
        this.setState({VcDirectoryItems: directory})
    }
    /* CONTROL SYSTEM COMMUNICATION ******************************************************************************************************************/
    sendControlSignal = (type,join,value) => {
        CrComLib.publishEvent(type,join,value)
    }
    pulseControlSignal = (join) => {
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
        // subscribe vc fader
        CrComLib.subscribeState('b',this.state.vcFader[0].muteJoin,(value)=> this.handleVcFaderState('mute',value))
        CrComLib.subscribeState('n',this.state.vcFader[0].levelJoin,(value)=> this.handleVcFaderLevelFeedback(value))
        // subscribe prog fader
        CrComLib.subscribeState('b',this.state.progFader[0].muteJoin,(value)=> this.handleProgFaderState('mute',value))
        CrComLib.subscribeState('n',this.state.progFader[0].levelJoin,(value)=> this.handleProgFaderLevelFeedback(value))
        // subscribe vc content share
        CrComLib.subscribeState('b','721',(value)=> this.handleState('vcContentIsSharing',value))
        CrComLib.subscribeState('n','721',(value)=> this.handleContentRouteFeedback(value))
        // subscribe directory
        CrComLib.subscribeState('s','1',(value)=> this.handleVcContacts(value))
    }
    /* SYSTEM FUNCTIONS ******************************************************************************************************************************/
    systemShutdown = () => {
        this.setState({fullScreen: 'cooling'})
        this.setState({modal: null})
        // deroute and power off all displays
        for(let display of this.state.displays) {
            this.sendControlSignal('n',display.routeJoin,0)
            this.pulseControlSignal(display.powerOffJoin)
        }
    } 
    render() {
        return (
            <div className='app'>
                {!this.state.settings ?
                    <React.Fragment>
                        {!this.state.fullScreen ?
                            <React.Fragment>
                                <Header 
                                    // states
                                    jsonTest={this.state.jsonTest}
                                    // functions
                                    handleState={this.handleState}
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
                                    vcContentSources={this.state.vcContentSources}
                                    vcSelectedContentSource={this.state.vcSelectedContentSource}
                                    vcContentIsSharing={this.state.vcContentIsSharing}
                                    catvPresets={this.state.catvPresets}
                                    // functions
                                    handleState={this.handleState}
                                    handleDisplayState={this.handleDisplayState}
                                    handleMicState={this.handleMicState}
                                    sendControlSignal={this.sendControlSignal}
                                    pulseControlSignal={this.pulseControlSignal}
                                    handleAcFaderState={this.handleAcFaderState}
                                />
                                <Footer
                                    // states
                                    progFader={this.state.progFader}
                                    // functions
                                    sendControlSignal={this.sendControlSignal}
                                    pulseControlSignal={this.pulseControlSignal}
                                    handleState={this.handleState}
                                />
                                {this.state.modal !== null ?
                                    <Modal
                                        // states
                                        modal={this.state.modal}
                                        settingsPasscode={this.state.settingsPasscode}
                                        // functions
                                        handleState={this.handleState}
                                        systemShutdown={this.systemShutdown}
                                    />
                                :
                                    <div></div>
                                }
                            </React.Fragment>
                        :
                            <FullScreen
                                // states
                                fullScreen={this.state.fullScreen}
                                settingsPasscode={this.state.settingsPasscode}
                                // functions
                                handleState={this.handleState}
                            />
                        }
                    </React.Fragment>
                :
                    <Settings
                        // states
                        sources={this.state.sources}
                        // functions
                        handleState={this.handleState}
                    />
                }
            </div>
        )
    }
    componentDidMount() {
        this.subscribe()
    }
}
export default App