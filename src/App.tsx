import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMagnifyingGlass, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <header>
    <div className="navbar">
      <div className="nav-logo">
        <div className="logo"></div>
      </div>

      <div className="nav-address">
        <p className="add-first">Deliver to</p>
        <div className="add-icon">
          <FontAwesomeIcon icon={faLocationDot} />
          <p className="add-second">India</p>
        </div>
      </div>

      <div className="nav-search">
        <select className="search-select">
          <option>All</option>
        </select>
        <input placeholder="Search Amazon" className="search-input" />
        <div className="search-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>

      <div className="nav-signin">
        <span className="nav-h border">Hello, sign-in</span>
        <p className="nav-s border">Accounts & Lists</p>
      </div>

      <div className="nav-return">
        <span className="nav-h border">Return</span>
        <p className="nav-s border">&order</p>
      </div>

      <div className="cart">
        <span className="img-cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </span>
        <p className="cartt">
          <a href="https://www.amazon.in/gp/cart/view.html?ref_=nav_cart" target="_main">Cart</a>
        </p>
      </div>
    </div>

    <div className="nav-sub">
      <div className="nav-ham">
        <FontAwesomeIcon icon={faBars} />
        <a href="">All</a>
      </div>
      <NavigationLinks />
    </div>
  </header>
);

const NavigationLinks = () => (
  <>
    {[
      { label: 'Amazon miniTv', url: 'https://www.amazon.in/minitv?ref_=nav_avod_desktop_topnav' },
      { label: 'Sell', url: 'https://www.amazon.in/b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3' },
      { label: 'Best Sellers', url: 'https://www.amazon.in/gp/bestsellers/?ref_=nav_cs_bestsellers' },
      { label: 'Mobiles', url: 'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles' },
      { label: "Today's Deals", url: 'https://www.amazon.in/deals?ref_=nav_cs_gb' },
      { label: 'Prime', url: 'https://www.amazon.in/amazonprime?ref_=nav_cs_primelink_nonmember' },
      { label: 'Customer Service', url: 'https://www.amazon.in/gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help' },
      { label: 'Electronics', url: 'https://www.amazon.in/electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics' },
      { label: 'New Releases', url: 'https://www.amazon.in/gp/new-releases/?ref_=nav_cs_newreleases' },
      { label: 'Home & Kitchen', url: 'https://www.amazon.in/Home-Kitchen/b/?ie=UTF8&node=976442031&ref_=nav_cs_home' },
      { label: 'Amazon Pay', url: 'https://www.amazon.in/gp/sva/dashboard?ref_=nav_cs_apay' },
      { label: 'Gift Ideas', url: 'https://www.amazon.in/gcx/Gifts-for-Everyone/gfhz/?ref_=nav_cs_giftfinder' },
      { label: 'Computers', url: 'https://www.amazon.in/computers-and-accessories/b/?ie=UTF8&node=976392031&ref_=nav_cs_pc' },
    ].map((link, index) => (
      <p className="aa" key={index}>
        <a href={link.url} target="_main">{link.label}</a>
      </p>
    ))}
  </>
);

const HeroSection = () => (
  <div className="hero-section">
    <div className="hero-message">
      <p>
        You are On Amazon Clone <a href="https://www.amazon.in/" target="_main">Click Here To go Original Website</a>
      </p>
    </div>
  </div>
);

const ShopSection = () => (
  <div className="shop-section">
    {['Electronics', 'Smart Watches', 'Musical Instrument', 'Home Appliances'].map((category, index) => (
      <div className={`box${index + 1} box`} key={index}>
        <div className={`boxcon${index + 1}`}>
          <h3>{category}</h3>
          <div className={`box${index + 1}img`}></div>
          <p>
            <a href="https://www.amazon.in" target="_main">See more...</a>
          </p>
        </div>
      </div>
    ))}
  </div>
);

const Footer = () => (
  <footer>
    <div className="top-panel">
      <a href="">Back To Top</a>
    </div>
    <div className="end">
      {[
        {
          title: 'Get to Know Us',
          links: [
            { text: 'About Us', url: 'https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer' },
            { text: 'Careers', url: 'https://amazon.jobs/' },
          ],
        },
      ].map((section, index) => (
        <div className={`boxen${index + 1} foot`} key={index}>
          <h4>{section.title}</h4>
          {section.links.map((link, i) => (
            <p key={i}><a href={link.url} target="_main">{link.text}</a></p>
          ))}
        </div>
      ))}
    </div>
  </footer>
);

const App = () => (
  <>
    <Navbar />
    <HeroSection />
    <ShopSection />
    <Footer />
  </>
);

export default App;
