import React from 'react'
import './drop-down.scss'

class DropDown extends React.Component {
    state = {
        show: false,
        items: ['Item 1','Item 2','Item 3','Item 4','Item 5','Item 6','Item 7']
    }
    handleState = (key,value) => {
        this.setState({[key]: value})
    }
    render() {
        return (
            <React.Fragment>
                {this.state.show ?
                    <div className='drop-down-items'>
                        {this.state.items.map(item => (
                            <button onClick={()=> this.handleState('show',false)}>{item}</button>
                        ))}
                    </div>
                :
                    <button onClick={()=> this.handleState('show',true)}>Show</button>
                }
            </React.Fragment>
        )
    }
}
export default DropDown