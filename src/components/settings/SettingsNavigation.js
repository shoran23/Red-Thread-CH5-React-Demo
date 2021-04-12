import React from 'react'

class SettingsNavigationButton extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.button === this.props.selectedNavigation ?
                    <button className='settings-navigation-button-active' onClick={()=> this.props.handleState('selectedNavigation',this.props.button)}>{this.props.button}</button>
                :
                    <button className='settings-navigation-button-inactive' onClick={()=> this.props.handleState('selectedNavigation',this.props.button)}>{this.props.button}</button>
                }
            </React.Fragment>
        )
    }
}
class SettingsNavigation extends React.Component {
    state = {
        buttons: ['Sources','Destinations','Audio','Video Conference','Cable TV','Blu-ray','Fetch','Icon Development']
    }
    render() {
        return (
            <div id='settings-navigation'>
                <div id='settings-navigation-container'>
                    {this.state.buttons.map((button,index) => (
                        <SettingsNavigationButton
                            // states
                            key={index}
                            index={index}
                            button={button}
                            selectedNavigation={this.props.selectedNavigation}
                            // functions
                            handleState={this.props.handleState}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
export default SettingsNavigation