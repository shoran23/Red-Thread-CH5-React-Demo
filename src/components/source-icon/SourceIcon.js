import React from 'react'
import Select from 'react-select'

class SourceIcon extends React.Component {
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
        let thisKey = ''

        console.log(this.state.images)

        for(let key of keys) {
            options.push({label: key.replace(/\.(png|jpe?g|svg)$/g,''), value: key})
        }
        for(let key of keys) {                  // this can be improved
            if(key.search(image) > -1) {
                keyFound = true
                thisKey = key
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
                return <img className={this.props.className} id={this.props.id} src={this.state.images[thisKey]}/> 
            } else {
                return 
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
export default SourceIcon