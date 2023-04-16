import Hero from "../components/Hero/Hero";
import SuperHero from "../images/Hero/undraw_savings_re_eq4w.svg";

export default function Super() {
  return (
    <>
      <Hero img={SuperHero}
        title="About Us"
        text="testmytext here"
      />
      <h1>WorkHub Super</h1>
    </>
  )
}