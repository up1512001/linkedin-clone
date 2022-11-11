import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core'

function Sidebar() {
  return (
    <div className='sidebar'>
      {/* <h1>I am a sidebar</h1> */}
      <div className='sidebar__top'>
        <img src="https://png.pngtree.com/thumb_back/fh260/background/20210623/pngtree-red-yellow-background-images-stock-photos-vectors-image_732693.jpg" alt="" />
        <Avatar className='sidebar__avatar' />
        <h2>Utsav Patel</h2>
        <h4>up1512001@gmail.com</h4>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>2315</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views on your post</p>
          <p className='sidebar__statNumber'>1523</p>
        </div>

      </div>

      <div className='sidebar__bottom'>
        <p>Recent</p>

      </div>

    </div>
  )
}

export default Sidebar