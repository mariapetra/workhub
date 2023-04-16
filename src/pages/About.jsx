import Hero from "../components/Hero/Hero";
import AboutHero from "../images/Hero/undraw_engineering_team_a7n2.svg";

export default function About() {
  return (
    <>
      <Hero img={AboutHero}
        title="About Us"
        text="testmytext here"
      />
      <h1>WorkHub About us</h1>
    </>
  )

}