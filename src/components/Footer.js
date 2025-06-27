import React from 'react';

export function Footer(props) {
  return (
    <footer>
      <div className="footer">
        <div className="ft-row">
          <ul>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="ft-row">
          By Eunji Ahn<br/>eunjia@outlook.com &copy; 2022 <br/> Redesigned &copy; 2025
        </div>
      </div>
    </footer>
  )
}