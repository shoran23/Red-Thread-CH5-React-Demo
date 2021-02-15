import React from 'react'

import './blu-ray.scss'

class BluRay extends React.Component {
    render() {
        return (
            <div className="blu-ray"
                style={{
                    width: this.props.width,
                    height: this.props.height,

                }}
            >
                <div className='blu-ray-outer'>
                    <div className='blu-ray-inner'>
                        <div className='blu-ray-middle-ring'>
                            <div className='blu-ray-middle-ring-edge'>
                                <div className='blu-ray-middle'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BluRay