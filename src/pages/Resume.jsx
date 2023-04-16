import Hero from "../components/Hero/Hero";
import ResumeHero from "../images/Hero/undraw_resume_folder_re_e0bi.svg";

export default function Resume() {
  return (
    <>
      <Hero img={ResumeHero}
        title="About Us"
        text="testmytext here"
      />
      <h1>WorkHub Resume</h1>
    </>
  )
}