import './navbar.css';

// export const Navbar = () => {
//   return (
//     <div className="navbar">
//         <div className="navContainer">
//             <span className="logo">croomsbooking</span>
//             <div className="navItem">
//                 <button className="navButton">Register</button>
//                 <button className="navButton">Login</button>
//             </div>
//         </div>
//     </div>
//   )
// }
import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navContainer'>
        <span className='logo'>croomsbooking</span>

        <div className='navItem'>
          <button className='navButton'>Register</button>
          <button className='navButton'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
