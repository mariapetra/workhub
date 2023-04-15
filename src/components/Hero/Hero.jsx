import "./Hero.css";

export default function Hero(props) {

  const HeroImage = (props) => (
    <img className="hero-img" src={props.img} alt={props.alt} />
  );

  const HeroText = (props) => (
    <div className="hero-text-section">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );

  return (
    <>
      <div className="hero-container">
        <div className="hero-image">
          <HeroImage img={props.img} alt="Hero" />
        </div>
        <div className="hero-text">
          <HeroText title={props.title} />
          <HeroText text={props.text} />
        </div>
      </div>
    </>
  )
};