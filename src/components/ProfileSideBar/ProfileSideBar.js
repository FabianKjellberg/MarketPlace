import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import './ProfileSideBar.css';

function ProfileSidebar() {

    const [messages, setMessage] = useState(4)

    return (
        <div className="profile-sidebar">
            <div className="profile-sidebar-sidebar">
                <div className="profile-sidebar-header">
                    <h1>My Profile</h1>
                </div>
                <ul>
                    <li><NavLink to="/profile/userinfo" activeClassName="active">General Information</NavLink></li>
                    <li><NavLink to="/profile/listings" activeClassName="active">My Listings</NavLink></li>
                    <li><NavLink to="/profile/offers" activeClassName="active">Offers </NavLink></li>
                    <li><NavLink to="/profile/inbox" activeClassName="active">Inbox ({messages})</NavLink></li>
                    <li><NavLink to="/profile/history" activeClassName="active">Buy/Sell History</NavLink></li>
                </ul>
            </div>
            <div className="profile-sidebar-content">
                <Outlet /> 
            </div>
        </div>
    );
}
export default ProfileSidebar;