import React from 'react'

class VideoConferencingDirectoryItem extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.index === this.props.selectedItem?
                    <button className='video-conferencing-directory-item-active' onClick={()=> this.props.handleState('selectedItem',this.props.index)}>{this.props.directoryItem.name}</button>
                :
                    <button className='video-conferencing-directory-item-inactive' onClick={()=> this.props.handleState('selectedItem',this.props.index)}>{this.props.directoryItem.name}</button>
                }
            </React.Fragment>
        )
    }
}
class VideoConferencingDirectory extends React.Component {
    state = {
        selectedItem: null,
    }
    handleState = (key,value) => {
        this.setState({[key]: value})
    }
    render() {
        return (
            <div id='video-conferencing-directory'>
                <div className='video-conferencing-directory-col' id='video-conferencing-directory-left'>
                    <button>Local Phonebook</button>
                    <button>Download Phonebook</button>
                </div>
                <div id='video-conferencing-directory-center'>
                    {this.props.VcDirectoryItems.map((directoryItem,index) => (
                        <VideoConferencingDirectoryItem
                            // states
                            key={index}
                            index={index}
                            directoryItem={directoryItem}
                            selectedItem={this.state.selectedItem}
                            // functions
                            handleState={this.handleState}
                        />
                    ))}
                </div>
                <div className='video-conferencing-directory-col' id='video-conferencing-direcotry-right'>
                    <button>Dial Selected</button>
                    <button>Hang Up</button>
                </div>
            </div>
        )
    }
}
export default VideoConferencingDirectory