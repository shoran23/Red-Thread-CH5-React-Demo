import React from 'react'
import './dpad.scss'

class DpadArrow extends React.Component {
    calculateBorderWidth = ()=> {
        
    }
    setArrayType = (type) => {
        switch(type) {
            case 'up': return <div className='dpad-arrow-up'
                style={{
                    // width: '0', 
                    // height: '0', 
                    // borderLeft: '20px solid transparent',
                    // borderRight: '20px solid transparent',
                    // borderBottom: '20px solid black',
                }}
            />
            case 'down': return <div className='dpad-arrow-down'
                style={{
                    width: '0', 
                    height: '0', 
                    borderLeft: '20px solid transparent',
                    borderRight: '20px solid transparent',
                    borderTop: '20px solid black',
                }}
            />
            case 'left': return <div className='dpad-arrow-left'
                style={{
                    width: '0',
                    height: '0', 
                    borderTop: '20px solid transparent',
                    borderBottom: '20px solid transparent',
                    borderRight: '20px solid black',
                }}
            />
            case 'right':  return <div className='dpad-arrow-right'
                style={{
                    width: '0',
                    height: '0', 
                    borderTop: '20px solid transparent',
                    borderBottom: '20px solid transparent',
                    borderLeft: '20px solid black',
                }}
            />
        }
    }
    render() {
        return (
            this.setArrayType(this.props.arrowType)
        )
    }
}
class Dpad extends React.Component {
    render() {
        return (
            <div className='dpad'
                style = {{
                    width: this.props.width,
                    height: this.props.height,
                }}
            >
                <button className='dpad-button' id='dpad-top'><DpadArrow arrowType='up'/></button>
                <button className='dpad-button' id='dpad-left'><DpadArrow arrowType='left'/></button>
                <button className='dpad-button' id='dpad-center'
                    style={{
                        fontSize: '18px',
                    }}
                >Select</button>
                <button className='dpad-button' id='dpad-right'><DpadArrow arrowType='right'/></button>
                <button className='dpad-button' id='dpad-down'><DpadArrow arrowType='down'/></button>
            </div>
        )
    }
}
export default Dpad