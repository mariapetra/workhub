import Hero from "../components/Hero/Hero";
import ContactHero from "../images/Hero/undraw_contact_us_re_4qqt.svg";

export default function Contact() {
  return (
    <>
      <Hero img={ContactHero}
        title="About Us"
        text="testmytext here"
      />
      <h1>WorkHub Contact</h1>
    </>
  )

}