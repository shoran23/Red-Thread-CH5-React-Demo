import React from 'react'
import './dpad.scss'

class DpadArrow extends React.Component {
    render() {
        return (
            <div id={`dpad-arrow-${this.props.button}`}/>
        )
    }
}
class DpadButton extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.button === this.props.activeButton ?
                    <button className='dpad-button' id={`dpad-${this.props.button}-active`} onMouseDown={()=> this.props.handlePress(this.props.button)} onMouseUp={this.props.handleRelease}><DpadArrow button={this.props.button} state='active'/></button> 
                :
                    <button className='dpad-button' id={`dpad-${this.props.button}-inactive`} onMouseDown={()=> this.props.handlePress(this.props.button)} onMouseUp={this.props.handleRelease}><DpadArrow button={this.props.button} state='inactive'/></button>
                }
            </React.Fragment>
        )
    }
}
class Dpad extends React.Component {
    state = {
        activeButton: '',
    }
    handlePress = button => {
        this.setState({activeButton: button})
    }
    handleRelease = () => {
        this.setState({activeButton: ''})
    }
    render() {
        console.log(this.state.activeButton)
        return (
            <div className='dpad'
                style = {{
                    width: this.props.width,
                    height: this.props.height,
                }}>
                <DpadButton 
                    // states
                    button='up'
                    activeButton={this.state.activeButton}
                    inactiveColor='whitesmoke'
                    activeColor='#61bed4'

                    // functions
                    handlePress={this.handlePress}
                    handleRelease={this.handleRelease}
                />
                <DpadButton 
                    // states
                    button='left'
                    activeButton={this.state.activeButton}
                    // functions
                    handlePress={this.handlePress}
                    handleRelease={this.handleRelease}
                />
                <button className='dpad-button' id='dpad-center'
                    style={{
                        fontSize: '18px',
                    }}
                >Select</button>
                <DpadButton 
                    // states
                    button='right'
                    activeButton={this.state.activeButton}
                    // functions
                    handlePress={this.handlePress}
                    handleRelease={this.handleRelease}
                />
                <DpadButton 
                    // states
                    button='down'
                    activeButton={this.state.activeButton}
                    // functions
                    handlePress={this.handlePress}
                    handleRelease={this.handleRelease}
                />
            </div>
        )
    }
}
export default Dpad