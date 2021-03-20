import React from 'react'

class Guage extends React.Component {

    render() {
        return (
            <div className='guage'
                style={{
                    width: this.props.width,
                    height: this.props.height,
                    backgroundColor: this.props.mainColor,
                    border: `8px solid ${this.props.borderColor}`,
                    overflow: 'hidden',
                    borderRadius: '100px',
                }}
            >
                <div className='guage-feedback'
                    style={{
                        backgroundColor: this.props.feedbackColor,
                        height: '100%',
                        width: `${this.props.feedbackLevel}%`,
                    }}
                >    
                </div>
            </div>
        )
    }
}
export default Guage
