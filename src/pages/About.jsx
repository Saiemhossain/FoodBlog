import brand from '../assets/brand.png'
import brand2 from '../assets/brand2.png'
import brand3 from '../assets/brand3.png'
import brand4 from '../assets/brand4.png'
import brand5 from '../assets/brand5.png'

export default function About() {
  return (
    <div className="about-area">
      <div className="about-info  wrapper">
        <h2>Where we’ve been featured</h2>
        <div className="about-brand">
          <img src={brand} alt="branding-image" />
          <img src={brand2} alt="branding-image" />
          <img src={brand3} alt="branding-image" />
          <img src={brand4} alt="branding-image" />
          <img src={brand5} alt="branding-image" />
        </div>
      </div>
    </div>
  );
}
