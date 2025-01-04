import blog1 from "../../assets/blog1.jpg"
import blog2 from "../../assets/blog2.jpg"
import blog3 from '../../assets/blog3.jpg';
import {Link} from "react-router-dom"

export default function ServiceSection() {
  return (
    <div className="service-sec wrapper">
      <h2> Book Your Service Now! </h2>
      <div className="service-area">
        <div className="service-part">
          <img src={blog1} alt="hotel-image" />
          <h3>John’s Restaurant</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
          </p>
          <Link to={'/service'}>
            {' '}
            <button className="btn-service">Book Now</button>{' '}
          </Link>
        </div>
        <div className="service-part">
          <img src={blog2} alt="hotel-image" />
          <h3>John’s Restaurant</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
          </p>
          <Link to={'/service'}>
            {' '}
            <button className="btn-service">Book Now</button>{' '}
          </Link>
        </div>
        <div className="service-part">
          <img src={blog3} alt="hotel-image" />
          <h3>John’s Restaurant</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
          </p>
          <Link to={'/service'}>
            {' '}
            <button className="btn-service">Book Now</button>{' '}
          </Link>
        </div>
      </div>
    </div>
  );
}
