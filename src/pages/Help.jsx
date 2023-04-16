import Hero from "../components/Hero/Hero";
import HelpHero from "../images/Hero/undraw_virtual_assistant_jjo2.svg";

export default function Help() {
  return (
    <>
      <Hero img={HelpHero}
        title="About Us"
        text="testmytext here"
      />
      <h1>WorkHub Help</h1>
    </>
  )

}