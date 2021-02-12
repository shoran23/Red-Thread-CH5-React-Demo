import React from 'react'
import './app.scss'

import Header from './components/header/Header.js'
import Center from './components/center/Center.js'
import Footer from './components/footer/Footer'

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
            {name: 'Left Display', join: '101', sourceIndex: 0, power: true},
            {name: 'Right Display', join: '102', sourceIndex: 0, power: false},
            {name: 'Side Display', join: '103', sourceIndex: 4, power: true}
        ]
    }
    handleState = (key,value) => {
        this.setState({[key]: value})
    }
    handleDisplayState = (index,key,value) => {
        let displays = this.state.displays
        displays[index][key] = value
        this.setState({displays})
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
                    // functions
                    handleState={this.handleState}
                    handleDisplayState={this.handleDisplayState}
                />
                <Footer/>
            </div>
        )
    }
}
export default App