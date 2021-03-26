import React from 'react'

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
        return (
            <img className='channel-icon' id={this.props.id} src={this.state.images[`${image}.png`]}/>
        ) 
    }
    render() {
        console.log(this.state.images)
        return (
            <React.Fragment>
                {this.handleIcon(this.props.iconRequest)}
            </React.Fragment>
        )
    }
    componentDidMount() {
        this.importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
    }
}
export default ChannelIcon