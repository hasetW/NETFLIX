import React from 'react'
import './footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <div className='footer_outer-wrapper'>
        <div className="footer_left">
            <div className="icons">
                <FacebookIcon/>
                <InstagramIcon/>
                <YouTubeIcon/>
            </div>
        </div>
        <div className="footer_data">
            <div className="Data">
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notice</li>
                <li>Service Code</li>
                <li>&copy; 1997-2025 Netflix, In</li>
            </div>
            <div className="Data">
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookies Performence</li>
            </div>
            <div className="Data">
                <li>Gift Cards</li>
                <li>Term Of Use</li>
                <li>Corporaite Information</li>
            </div>
            <div className="Data">
                <li>Media Ceneter</li>
                <li>privacry</li>
                <li>Contact Us</li>
            </div>


        </div>

    </div>
  )
}
