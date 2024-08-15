import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Blur.css';

gsap.registerPlugin(ScrollTrigger);

const Blur = () => {
  useEffect(() => {
    const showDemo = () => {
      document.body.style.overflow = 'auto';
      document.scrollingElement.scrollTo(0, 0);

      gsap.utils.toArray('section').forEach((section, index) => {
        const wrapper = section.querySelector('.wrapper');
        if (!wrapper) return;

        const [x, xEnd] = index % 2
          ? ['100%', (wrapper.scrollWidth - section.offsetWidth) * -1]
          : [wrapper.scrollWidth * -1, 0];

        gsap.fromTo(wrapper, { x }, {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
            start: 'top bottom',
            end: 'bottom top',
          },
        });
      });
    };

    showDemo();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="Blur">
      <div className="demo-wrapper">
        <section className="demo-text">
          <div className="wrapper text">
            CAUSALMEETINGCREATESMEMORIES
          </div>
        </section>
        {[6, 183,135, 155].map((sig, index) => (
          <section key={index} className="demo-Blur">
            <ul className="wrapper">
              {[
                'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVyZ2VyfGVufDB8fDB8fHww/300x300?sig=',
                'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8fDA%3D/300x300?sig=',
                'https://images.unsplash.com/photo-1604467707321-70d5ac45adda?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FuZHdpY2h8ZW58MHx8MHx8fDA%3D/300x300?sig=',
                'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZXN8ZW58MHx8MHx8fDA%3D/300x300?sig=',
                'https://plus.unsplash.com/premium_photo-1664472619078-9db415ebef44?q=80&w=3176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x300?sig=',
                'https://plus.unsplash.com/premium_photo-1673769108070-580fe90b8de7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9tb3xlbnwwfHwwfHx8MA%3D%3D/300x300?sig=',
                'https://images.unsplash.com/photo-1522666257812-173fdc2d11fe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhc3RhfGVufDB8fDB8fHww/300x300?sig=',
                'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNhbGFkfGVufDB8fDB8fHww/300x300?sig=',
                'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRvcnRpbGxhJTIwd3JhcHxlbnwwfHwwfHx8MA%3D%3D/300x300?sig='
              ].map((src, i) => (
                <li key={i}>
                  <img
                    src={`${src}${sig}`}
                    alt="Random Unsplash"
                  />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Blur;
