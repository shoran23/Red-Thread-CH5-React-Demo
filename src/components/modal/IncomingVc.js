import React from 'react'

class IncomingVc extends React.Component {
    render() {
        return (
            <div className='incoming'>
                <p className='incoming-messages'>Incoming Video Conference Call</p>
                <p className='incoming-messages'>Would you like to answer?</p> 
                <div className='incoming-options'>
                    <button className='incoming-answer'>Yes (Answer)</button>
                    <button className='incoming-decline'>No (Decline)</button>
                </div>
            </div>
        )
    }
}
export default IncomingVc