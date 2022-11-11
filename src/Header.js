import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'


function Header() {
  return (
    <div className='header'>
        {/* <h1>this is header</h1> */}
        <div className='header__left'>
            <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='' />

            <div className='header__search'>
                {/* searchicon */}
                <SearchIcon />
                <input type="text"/>
            </div>    


        </div>

        <div className='header__right'>

            <HeaderOption Icon={HomeIcon}  title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon} title="my network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="chat"/>
            <HeaderOption Icon={NotificationsIcon} title="notifications"/>
            <HeaderOption avatar="https://avatars.githubusercontent.com/u/75293077?v=4" title="me"/>

        </div>
    </div>
  )
}

export default Header