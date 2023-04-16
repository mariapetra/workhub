import Hero from "../components/Hero/Hero";
import ProfileHero from "../images/Hero/undraw_profile_re_4a55.svg";

export default function Profile() {
  return (
    <>
      <Hero img={ProfileHero}
        title="About Us"
        text="testmytext here"
      />
      <h1>WorkHub Profile</h1>
    </>
  )
}