import React from 'react'
import "./header.css";
import  NetflixLogo from"../../assets/NetflixLogo.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function Header() {
  return (
    <div className="outer-wrapper">
        <div className="header_left">
            <ul>
                <li><img src={NetflixLogo} alt='NetflixLogo' width="100px"/></li>
                <li>Netflix</li>
                <li>Home</li>
                <li>TvShow</li>
                <li>Movies</li>
                <li>Latest</li>
                <li>MyList</li>
                <li>Browse by languge</li>
            </ul>
        </div>
        <div className="hedaer_right">
            <ul>
                <li><SearchIcon/></li>
                <li><NotificationsNoneIcon/></li>
                <li><AccountBoxIcon/></li>
                <li><ArrowDropDownIcon/></li>
            </ul>
        </div>

    </div>
  )
}
