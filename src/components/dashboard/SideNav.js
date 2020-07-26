import React from 'react'
import { NavLink } from 'react-router-dom'

function SideNav() {
    
    
    return (
        <div className="sideNav container row">
            <NavLink exact to={"/dashboard/my_projects"} className="link card-panel hoverable col" activeClassName="active">My Projects</NavLink> 
            <NavLink exact to={"/dashboard/projects_backed"} className="link card-panel hoverable col" activeClassName="active">Projects Backed</NavLink> 
            <NavLink exact to={"/dashboard/settings"} className="link card-panel hoverable col" activeClassName="active">Settings</NavLink> 
            <NavLink exact to={"/dashboard/inbox"} className="link card-panel hoverable col" activeClassName="active">Inbox</NavLink> 
            <NavLink exact to={"/dashboard/bookmarks"} className="link card-panel hoverable col" activeClassName="active">Bookmarks</NavLink> 
        </div>
    )
}

export default SideNav;