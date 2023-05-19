import React from 'react';
import img_sidebar from '../assets/img_sidebar.jpeg'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className='heading' >
      <h4>Argon Dashboard 2 PRO</h4>
      </div>

      <ul>
        <li className='selected'><i class="fa-solid fa-laptop fa-sm" style={{"color":"violet"}}></i> Dashboard</li>
        <li><i class="fa-solid fa-table fa-sm" style={{"color":"red"}}></i> Tables</li>
        <li><i class="fa-solid fa-money-bill fa-sm" style={{"color":"green"}}></i> Billing</li>
        <li><i class="fa-solid fa-vr-cardboard fa-sm" style={{"color":"blue"}}></i> Virtual Reality</li>
        <li><i class="fa-solid fa-globe fa-sm" style={{"color":"pink"}}></i> RTL</li>
     </ul>
     
        <h4 className='heading'>ACCOUNT PAGES</h4>
        <ul>
        <li><i class="fa-solid fa-user fa-sm"style={{"color":"gray"}}></i> Profile</li>
        <li><i class="fa-solid fa-id-card fa-sm"style={{"color":"red"}}></i> Sign In</li>
        <li><i class="fa-solid fa-id-card fa-sm"style={{"color":"blue"}}></i> Sign Up</li>
        </ul>
        <div className="sidebarimg">
       
        <img src={img_sidebar} alt="" />
      
        </div>
        


     
      
    </div>
  );
};

export default Sidebar;