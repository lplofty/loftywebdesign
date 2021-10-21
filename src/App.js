import SaveMoney from './images/savemoney.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <div className="home">
        <div className='header flex'>
            <div className='header-logo flex'>
                <h2>Lofty</h2>
                <h3>Web Design</h3>
            </div>
            <div className='header-links flex'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
         <div className='home-main flex col-12 col-m-12 col-l-12'>
             <div className='home-text flex'>
                 <h1>Small Business Web Design + Development</h1>
                 <p>No page builders or WordPress - We offer 100% hand coded websites with superior results starting at $100/month.</p>
                 <div className='home-button'>GET IN TOUCH!</div>
             </div>
         </div>
     </div>
        <div className='whatwedo flex col-12 col-m-12 col-l-12'>
            <h1>WHAT WE DO</h1>
            <hr />
            <p>We specialize in small business web design and development for clients anywhere in Canada. Every line of code is written by hand to ensure the best performance, which helps bring in more customers to your site and bring more revenue to your business. <span>LEARN MORE</span></p>
            <div className='what-blurbs flex col-12 col-m-12 col-l-12'>
                <div className='what-blurb flex col-12 col-m-12 col-l-4'>
                    <div className='blurb-icon'>

                    </div>
                    <h3>Mobile-First Design</h3>
                    <p>We start building your site for mobile devices first, then we add on it to make it tablet and desktop ready.</p>
                </div>
                <div className='what-blurb flex col-12 col-m-12 col-l-4'>
                    <div className='blurb-icon'>

                    </div>
                    <h3>Fully Responsive</h3>
                    <p>Your website will fit all mobile screen sizes, tablets, and desktop sizes, so new clients can access your site from anywhere.</p>
                </div>
                <div className='what-blurb flex col-12 col-m-12 col-l-4'>
                    <div className='blurb-icon'>

                    </div>
                    <h3>Optimization</h3>
                    <p>60% of all internet traffic is on mobilee devices, so we optimize your mobile to perform their best in search engines. </p>
                </div>
            </div>
        </div>
        <div className='home-services flex col-12 col-m-12 col-l-12'>
            <div className='home-services-top flex col-12 col-m-12 col-l-6'>
                <img src={SaveMoney} />
                <h1><span>$0</span> Down, <span>%100</span> Per Month, No Minimum Contract.</h1>
                <p>$0 down for a standard 5 page business website. If you need more than that, we do have to do custom pricing baseds on the scope of work, number of additional pages and time involved.</p>
                <p>You own your domain, content, listings anmd profiles. Cancel anytime with no fees or hassle.</p>
            </div>
            <div className='home-services-offeringContainer flex co-12 col-m-12 col-l-12'>
                <div className='home-services-offers flex col-12 col-m-12 col-l-12'>
                    <div className='home-services-offer flex col-12 col-m-6 col-l-6'>
                        <div className='home-services-offer-title flex'>
                            <div className='home-services-icon'></div>
                            <h3>Hosting Fees Included</h3>
                        </div>
                        <p>Hosting fees are built right into the monthly payment.</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
