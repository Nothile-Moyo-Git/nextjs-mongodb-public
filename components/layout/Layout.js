import MainNavigation from './MainNavigation';
import HamburgerMenu from './Menu';
import { useState } from "react";
import dynamic from 'next/dynamic';

const Stars = dynamic(() => import('../ui/Stars'));

function Layout(props) {

  /* 
    Since we're using perspective in CSS. We can't use position fixed on our menu.
    As a result we're removing the ability to scroll the page when you open the menu.
  */
  const [fixPageScrolling, setFixPageScrolling] = useState(false);

  const toggleMenuHandler = (state) => {
    setFixPageScrolling(state.isOpen);
  }

  return (
    <section className={`layout ${fixPageScrolling === true && 'layout--fixed'}`} id="outer-container">
      <HamburgerMenu toggleMenu={toggleMenuHandler}/>
      <main id="page-wrap">
        <MainNavigation/>
        <Stars/>
        <div className="layout__content">{props.children}</div>
      </main>
    </section>
  );
}

export default Layout;
