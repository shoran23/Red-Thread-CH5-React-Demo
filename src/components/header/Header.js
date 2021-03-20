import React from 'react'
import './header.scss'
import IconPower from '../../../assests/images/icon_power.png'
import Logo from '../../../assests/images/Red-Thread-Logo_formatted-for-DealerWeb_white_2019-05.png'

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <img className='header-logo' id='header-logo' src={Logo} alt='Test'/>
                <button className='icon-button-inactive' id='header-shutdown' onClick={()=> this.props.handleState('modal','shutdown')}>Power</button>
            </div>
        )
    }
}
export default Header