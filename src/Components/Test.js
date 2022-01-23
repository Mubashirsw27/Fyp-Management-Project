import React from 'react'
import "./Test.css"

const Test = () => {
    return (
            <div className="outer">
                <div className='outer__inner'>
      <div className="section-bg collections">
        <div className="collections__wrapper">
          <h3 className="collections__title h3">Hot collections</h3>
          <div className="collections__inner">
            <div className="collections__slider js-slider-collections"><a className="collections__item" href="profile.html">
                <div className="collections__gallery">
                  <div className="collections__preview"><img src="img/content/photo-1.1.jpg" alt="Collections" /></div>
                  <div className="collections__preview"><img src="img/content/photo-1.2.jpg" alt="Collections" /></div>
                  <div className="collections__preview"><img src="img/content/photo-1.3.jpg" alt="Collections" /></div>
                  <div className="collections__preview"><img src="img/content/photo-1.4.jpg" alt="Collections" /></div>
                </div>
                <div className="collections__subtitle">Awesome collection</div>
                <div className="collections__line">
                  <div className="collections__user">
                    <div className="collections__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar" /></div>
                    <div className="collections__author">By <span>Kennith Olson</span></div>
                  </div>
                  <div className="status-stroke-black collections__counter"><span>28 items</span></div>
                </div></a><a className="collections__item" href="profile.html">
                <div className="collections__gallery">
                  <div className="collections__preview"><img src="img/content/photo-2.1.jpg" alt="Collections" /></div>
                  <div className="collections__preview"><img src="img/content/photo-2.2.jpg" alt="Collections" /></div>
                  <div className="collections__preview"><img src="img/content/photo-2.3.jpg" alt="Collections" /></div>
                  <div className="collections__preview"><img src="img/content/photo-2.4.jpg" alt="Collections" /></div>
                </div>
                <div className="collections__subtitle">Awesome collection</div>
                <div className="collections__line">
                  <div className="collections__user">
                    <div className="collections__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar" /></div>
                    <div className="collections__author">By <span>Willie Barton</span></div>
                  </div>
                  <div className="status-stroke-black collections__counter"><span>28 items</span></div>
                </div></a><a className="collections__item" href="profile.html">
                <div className="collections__gallery">
                  <div className="collections__preview"><img src="img/content/photo-3.1.jpg" alt="Collections" /></div>
                  <div className="collections__preview"><img src="img/content/photo-3.2.jpg" alt="Collections" /></div>
                  <div className="collections__preview"><img src="img/content/photo-3.3.jpg" alt="Collections" /></div>
                  <div className="collections__preview"><img src="img/content/photo-3.4.jpg" alt="Collections" /></div>
                </div>
                <div className="collections__subtitle">Awesome collection</div>
                <div className="collections__line">
                  <div className="collections__user">
                    <div className="collections__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar" /></div>
                    <div className="collections__author">By <span>Halle Jakubowski</span></div>
                  </div>
                  <div className="status-stroke-black collections__counter"><span>28 items</span></div>
                </div></a></div>
          </div>
        </div>
      </div>
      </div>
    </div>
    )
}

export default Test
