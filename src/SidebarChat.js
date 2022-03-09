import React from 'react';
import { Avatar, IconButton } from "@material-ui/core";
import './SidebarChat.css';

function SidebarChat() {
  return (
	<div className='sidebarChat'>
		<Avatar/>
		<div className="sidebar_info">
			<h3>Channel Name</h3>
			<p>last message sent...</p>
			<small>timestamp</small>
			</div>
		</div>
  )
}

export default SidebarChat