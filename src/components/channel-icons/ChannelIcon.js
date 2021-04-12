import React from 'react'
import Television from './images/Television.png'
import Select from 'react-select'

class ChannelIcon extends React.Component {
    state = {
        images: {} 
    }
    importAll = (r) => {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        this.setState({images})
    }
    handleIcon = image => {
        let keys = Object.keys(this.state.images)
        let keyFound = false
        let options = []
        for(let key of keys) {
            let editedKey = key.replace('.png','')
            options.push({label: editedKey, value: editedKey})
        }
        for(let key of keys) {                  // this can be improved
            if(`${image}.png` === key) {
                keyFound = true
                break;
            }
        }
        if(image === 'dropdown') {
            return (
                <Select 
                    className={this.props.className}
                    id={this.props.id} 
                    value={this.props.selectValue}
                    onChange={this.props.handleSelect}
                    options={options}
                    isClearable={true}
                />
            )
        } else {
            if(keyFound === true) {
                return <img className={this.props.className} id={this.props.id} src={this.state.images[`${image}.png`]}/> 
            } else {
                return <img className={this.props.className} id={this.props.id} src={Television}/>
            }
        }
    }
    render() {
        return (
            <React.Fragment>
                {this.handleIcon(this.props.icon)}
            </React.Fragment>
        )
    }
    componentDidMount() {
        this.importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/))
    }
}
export default ChannelIcon