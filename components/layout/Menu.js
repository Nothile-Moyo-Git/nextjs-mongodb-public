/* 
    This menu is created using the plugin react-burger-menu 
    You can find the information on this package here: https://www.npmjs.com/package/react-burger-menu
    License: MIT
*/

import { scaleRotate as Menu } from 'react-burger-menu';
import Link from 'next/link';

const HamburgerMenu = (props) => {

    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu right pageWrapId={`page-wrap`} outerContainerId={`outer-container`} onStateChange={props.toggleMenu}>
        <Link href="/" className="menu-item">All Meetups</Link>
        <Link href="/new-meetup" className="menu-item">Add New Meetup</Link>
      </Menu>
    );
  
}

export default HamburgerMenu;