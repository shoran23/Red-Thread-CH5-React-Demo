import React from 'react'
import './center-navigation.scss'

class CenterNavigationButton extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.button.component === this.props.centerComponent ?
                    <button className='center-navigation-button-active' onClick={()=> this.props.handleState('centerComponent',this.props.button.component)}>{this.props.button.name}</button>
                :
                    <button className='center-navigation-button-inactive' onClick={()=> this.props.handleState('centerComponent',this.props.button.component)}>{this.props.button.name}</button>
                }
            </React.Fragment>
        )
    }
}
class CenterNavigation extends React.Component {
    state = {
        buttons: [
            {name: 'Video Routing', component: 'matrix'},
            {name: 'Audio Zone', component: 'audio-zone'},
            {name: 'Audio Conferencing', component: 'ac'},
            {name: 'Video Conferencing', component: 'vc'}
        ]
    }
    render() {
        return (
            <div className='center-navigation'>
                <div className='center-navigation-button-list'>
                    {this.state.buttons.map((button,index) => (
                        <CenterNavigationButton
                            // states
                            key={index}
                            button={button}
                            centerComponent={this.props.centerComponent}
                            // functions
                            handleState={this.props.handleState}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
export default CenterNavigation