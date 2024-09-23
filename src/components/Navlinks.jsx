import React, { useEffect, useRef } from 'react';
import close from '/src/assets/images/icon-close.svg';
import { gsap } from "gsap";

function Navlinks({ links, setNavigation, navigation }) {
  const menu = useRef(null);
  const nav = useRef(null);

  useEffect(() => {
    if (navigation) {
      gsap.to(nav.current, {
        top: 0,
        duration: 0.5,
        opacity: 1,
        ease: "power2.out",
      });
    } else {
      gsap.to(nav.current, {
        top: '-100%',
        duration: 0.5,
        opacity: 0,
        ease: "power2.in",
      });
    }
  }, [navigation]);

  return (
    <div
      ref={nav}
      className='sm:hidden fixed top-[-100%] py-12 left-0 w-full bg-White h-16 z-50 flex items-center justify-center gap-9 transition-all duration-500'
      style={{ opacity: 0 }}
    >
      <img
        ref={menu}
        onClick={() => setNavigation(false)}
        src={close}
        alt="close"
      />

      {links.map((link, index) => (
        <p key={index} className='text-lg text-black cursor-pointer'>
          {link}
        </p>
      ))}
    </div>
  );
}

export default Navlinks;
