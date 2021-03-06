import React from 'react'
import './keypad.scss'

class KeypadButton extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.index === this.props.pressedButton ?
                    <button className='keypad-button-active' 
                        onMouseDown={()=> this.props.handlePress(this.props.index)} 
                        onMouseUp={()=> this.props.handleRelease(this.props.index)}
                        onTouchStart={()=> this.props.handlePress(this.props.index)} 
                        onTouchEnd={()=> this.props.handleRelease(this.props.index)}
                    >
                        {this.props.button}
                    </button>
                :
                    <button className='keypad-button-inactive' 
                        onMouseDown={()=> this.props.handlePress(this.props.index)} 
                        onMouseUp={()=> this.props.handleRelease(this.props.index)}
                        onTouchStart={()=> this.props.handlePress(this.props.index)} 
                        onTouchEnd={()=> this.props.handleRelease(this.props.index)}
                    >
                        {this.props.button}
                    </button>
                }
            </React.Fragment>            
        )
    }
}
class Keypad extends React.Component {
    state = {
        buttons: ['1','2','3','4','5','6','7','8','9',this.props.miscLeft,'0',this.props.miscRight],
        pressedButton: null,
    }
    handlePress = index => {
        this.props.pressFunction(index,this.state.buttons[index])
        this.setState({pressedButton: index})
    }
    handleRelease = () => {
        this.setState({pressedButton: null})
    }
    render() {
        return (
            <React.Fragment>
                <div className='keypad'
                    style={{
                        width: this.props.width,
                        height: this.props.height
                    }}
                >
                    {this.props.showText ?
                        <div className='keypad-text-container'>
                            <div className='keypad-text'>{this.props.keypadText}</div>
                            <button className='keypad-text-backspace' onClick={this.props.backspaceKeypadText}>{'<'}</button>
                        </div>
                    :
                        <div></div>
                    }
                    <div className='keypad-dial'> 
                        <div className='keypad-front'>
                            {this.state.buttons.map((button,index) => (
                               <KeypadButton
                                    // states
                                    key={index}
                                    index={index}
                                    button={button}
                                    pressedButton={this.state.pressedButton}
                                    // functions
                                    handlePress={this.handlePress}
                                    handleRelease={this.handleRelease}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Keypad