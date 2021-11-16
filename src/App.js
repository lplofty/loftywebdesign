import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Navbar from "./components/Navbar";

import SaveMoney from './images/savemoney.svg';
import responsive from './images/responsive.svg';
import mobilefirst from './images/mobilefirst2.svg';
import optimize from './images/optimize.svg';
import check from './images/check.svg';
import blob from './images/blob.svg';
import checkSmall from './images/check.png';
import {SiTwitter, SiLinkedin, SiInstagram, SiTwitch} from 'react-icons/si';

import {
    BrowserRouter as Router,
    Link,
    NavLink,
    Route,
    Switch
} from 'react-router-dom';
import './App.css';
import './index.css';

function App() {
  return (
      <div className="App">
          <div className="home">
              <div className='home-gradient'></div>
              <Navbar />
              <div className='home-main flex col-12 col-m-12 col-l-12'>
                  <div className='home-text flex col-12 col-m-6 col-l-12'>
                      <h1>Small Business Web Design + Development</h1>
                      <p>No page builders or WordPress - We offer 100% hand coded websites with superior results starting at $100/month.</p>
                      <div className='home-button'>GET IN TOUCH!</div>
                  </div>
                  <div className='home-devices col-12 col-m-12 col-l-6'></div>
                  {/*<div className='home-right flex col-12 col-m-6 col-l-6'>
         </div>*/}
              </div>
          </div>
          <div className='whatwedo flex col-12 col-m-12 col-l-12'>
              <h1>WHAT <span>WE</span> DO</h1>
              <hr />
              <p>We specialize in small business web design and development for clients anywhere in Canada. Every line of code is written by hand to ensure the best performance, which helps bring in more customers to your site and bring more revenue to your business. <span>LEARN MORE</span></p>
              <div className='what-blurbs flex col-12 col-m-12 col-l-12'>
                  <div className='what-blurb flex col-12 col-m-12 col-l-4'>
                      <div className='blurb-icon flex'>
                          <img src={mobilefirst} />

                      </div>
                      <h3>Mobile-First Design</h3>
                      <p>We start building your site for mobile devices first, then we add on it to make it tablet and desktop ready.</p>
                  </div>
                  <div className='what-blurb flex col-12 col-m-12 col-l-4'>
                      <div className='blurb-icon flex'>
                          <img src={responsive} />
                      </div>
                      <h3>Fully Responsive</h3>
                      <p>Your website will fit all mobile screen sizes, tablets, and desktop sizes, so new clients can access your site from anywhere.</p>
                  </div>
                  <div className='what-blurb flex col-12 col-m-12 col-l-4'>
                      <div className='blurb-icon flex'>
                          <img src={optimize} />
                      </div>
                      <h3>Optimization</h3>
                      <p>60% of all internet traffic is on mobilee devices, so we optimize your mobile to perform their best in search engines. </p>
                  </div>
              </div>
          </div>
          <div className='home-services flex col-12 col-m-12 col-l-12'>
              <img className='blob' src={blob} />
              <div className='home-services-top flex col-12 col-m-12 col-l-12'>
                  <div className='home-services-topLeft flex co-12 col-m-12 col-l-6'>
                      <img src={SaveMoney} />
                  </div>
                  <div className='home-services-topRight flex co-12 col-m-12 col-l-6'>
                      <h1><span>$0</span> Down, <span>$100</span> Per Month, No Minimum Contract.</h1>
                      <p>$0 down for a standard 5 page business website. If you need more than that, we do have to do custom pricing baseds on the scope of work, number of additional pages and time involved.</p>
                      <p>You own your domain, content, listings anmd profiles. Cancel anytime with no fees or hassle.</p>                </div>

              </div>
              <div className='home-services-offeringContainer flex co-12 col-m-12 col-l-12'>
                  <div className='home-services-offers flex col-12 col-m-12 col-l-8'>
                      <div className='home-services-offer flex col-12 col-m-6 col-l-6'>
                          <div className='home-services-offer-title flex'>
                              <div className='home-services-icon flex'>
                                  <img src={check} />
                              </div>
                              <h3>Hosting Fees Included</h3>
                          </div>
                          <p>Hosting fees are built right into the monthly payment.</p>
                      </div>
                      <div className='home-services-offer flex col-12 col-m-6 col-l-6'>
                          <div className='home-services-offer-title flex'>
                              <div className='home-services-icon flex'>
                                  <img src={check} />
                              </div>
                              <h3>Unlimited Edits</h3>
                          </div>
                          <p>Change anything you want at anytime and it will be done that day.</p>
                      </div>
                  </div>
                  <div className='home-services-offers flex col-12 col-m-12 col-l-8'>
                      <div className='home-services-offer flex col-12 col-m-6 col-l-6'>
                          <div className='home-services-offer-title flex'>
                              <div className='home-services-icon flex'>
                                  <img src={check} />
                              </div>
                              <h3>Web Design & Development</h3>
                          </div>
                          <p>Includes over 40 hours of design, development, and testing.</p>
                      </div>
                      <div className='home-services-offer flex col-12 col-m-6 col-l-6'>
                          <div className='home-services-offer-title flex'>
                              <div className='home-services-icon flex'>
                                  <img src={check} />
                              </div>
                              <h3>Google Analytics</h3>
                          </div>
                          <p>We install Analytics for free to monitor traffic and where it comes from.</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className='home-portfolio flex col-12 col-m-12 col-l-12'>
              <h1><span>OUR</span> PORTFOLIO</h1>
              <hr />
              <div className='home-portfolioCards flex col-12 col-m-12 col-l-12'>
                  <div className='portfolioCard flex col-12 col-m-9 col-l-3'>
                      <div className='portfolioCard-topBorder' />
                      <div className='portfolioCard-innards flex'>
                          <div className='portfolioCard-image'>

                          </div>
                          <h3>Website title</h3>
                          <h4>Winnipeg, MB</h4>
                          <p>
                              This is a blurb. Chamge later for description.
                          </p>
                          <div className='portfolio-button flex'>
                              VISIT WEBSITE
                          </div>
                      </div>
                  </div>

                  <div className='portfolioCard flex col-12 col-m-9 col-l-3'>
                      <div className='portfolioCard-topBorder' />
                      <div className='portfolioCard-innards flex'>
                          <div className='portfolioCard-image'>

                          </div>
                          <h3>Website title</h3>
                          <h4>Winnipeg, MB</h4>
                          <p>
                              This is a blurb. Chamge later for description.
                          </p>
                          <div className='portfolio-button flex'>
                              VISIT WEBSITE
                          </div>
                      </div>
                  </div>

                  <div className='portfolioCard flex col-12 col-m-9 col-l-3'>
                      <div className='portfolioCard-topBorder' />
                      <div className='portfolioCard-innards flex'>
                          <div className='portfolioCard-image'>

                          </div>
                          <h3>Website title</h3>
                          <h4>Winnipeg, MB</h4>
                          <p>
                              This is a blurb. Chamge later for description.
                          </p>
                          <div className='portfolio-button flex'>
                              VISIT WEBSITE
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className='home-about flex col-12 col-m-12 col-l-12'>
              <h1>WHO <span>WE</span> ARE</h1>
              <hr />
              <p className='home-about-Blurb'>
                  My name is Nathan, I am a stay at home dad and web developer. I started this business to help provide for the family while still being able to be home and raise the kids. I spent a year and a half teaching myself the right way to make websites and learning to write the code myself. <span>LEARN MORE</span>
              </p>
              <div className='home-aboutPic flex'>
                  <img className='home-aboutPicPic' />
                  <h3>Nathan D.</h3>
                  <p>OWNER/DEVELOPER</p>
              </div>
          </div>
          <div className='home-pricing flex col-12 col-m-12 col-l-12'>
              <div className='home-price flex col-12 col-m-12 col-l-4'>
                  <div className='home-priceInner flex'>
                      <div className='home-priceUpper'>
                          <p>STANDARD + BLOGGING</p>
                      </div>
                      <p>STARTING AT</p>
                      <h1>$250<span>/mo</span></h1>
                      <div className='priceInner-service flex'>
                          <img src={checkSmall} />
                          <p>500+ word blog post</p>
                      </div>
                      <div className='priceInner-service flex'>
                          <img src={checkSmall} />
                          <p>Written By an SEO Specialist</p>
                      </div>
                      <div className='priceInner-service flex'>
                          <img src={checkSmall} />
                          <p>1 Post per month</p>
                      </div>
                      <div className='priceInner-service flex'>
                          <img src={checkSmall} />
                          <p>$150 per extra post</p>
                      </div>
                      <div className='price-button flex'>
                          <p>CONTACT US</p>
                      </div>
                  </div>
              </div>
              <div className='home-price flex col-12 col-m-12 col-l-4'>
                  <div className='home-priceInner flex'>
                      <div className='home-priceUpper'>
                          <p>STANDARD</p>
                      </div>
                      <p>5 PAGES</p>
                      <h1>$150<span>/mo</span></h1>
                      <div className='priceInner-service flex'>
                          <img src={checkSmall} />
                          <p>Unlimited edits</p>
                      </div>
                      <div className='priceInner-service flex'>
                          <img src={checkSmall} />
                          <p>Includes hosting</p>
                      </div>
                      <div className='priceInner-service flex'>
                          <img src={checkSmall} />
                          <p>Lifetime updates</p>
                      </div>
                      <div className='priceInner-service flex'>
                          <img src={checkSmall} />
                          <p>SEO optimized</p>
                      </div>
                      <div className='price-button flex'>
                          <p>CONTACT US</p>
                      </div>
                  </div>
              </div>
              <div className='home-price flex col-12 col-m-12 col-l-4'>
                  <div className='home-priceInner flex'>
                      <div className='home-priceUpper'>
                          <p>STANDARD + SOCIAL MEDIA</p>
                      </div>
                      <p>STARTING AT</p>
                      <h1>$250<span>/mo</span></h1>
                      <div className='priceInner-service flex'>
                          <img src={checkSmall} />
                          <p>4 20+ word posts / month</p>
                      </div>
                      <div className='priceInner-service flex'>
                          <img src={checkSmall} />
                          <p>Written by a pro copywriter</p>
                      </div>
                      <div className='priceInner-service flex'>
                          <img src={checkSmall} />
                          <p>Each extra post $10</p>
                      </div>
                      <div className='priceInner-service flex'>
                          <img src={checkSmall} />
                          <p>2 pro graphics included /mo</p>
                      </div>
                      <div className='price-button flex'>
                          <p>CONTACT US</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className='footer flex col-12 col-m-12 col-l-12'>
              <h2 id="footer-like">Like what you see?</h2>
              <h1>Let's get started!</h1>
              <div className='footer-links flex col-12 col-m-12 col-l-12'>
                  <div className='footer-contact flex'>
                      <a className='footer-link'><h3>loftywebdesign@gmail.com</h3></a>
                      <a className='footer-link'><h3>(204) 770-2494</h3></a>
                      <div className='footer-socials flex'>
                          <SiTwitter size={15} style={{fill: 'white'}}/>
                          <SiInstagram size={15} style={{fill: 'white'}}/>
                          <SiLinkedin size={15} style={{fill: 'white'}}/>
                          <SiTwitch size={15} style={{fill: 'white'}}/>

                      </div>
                  </div>
                  <div className='footer-linksLinks flex'>
                      <h4>Links</h4>
                      <NavLink to='/about'>About us</NavLink>
                      <NavLink to='/services'>Services</NavLink>
                      <NavLink to='/contact'>Contact</NavLink>
                  </div>
              </div>
          </div>

      </div>
  );
}

export default App;
