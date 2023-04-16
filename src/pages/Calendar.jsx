import CalendarHero from "../images/Hero/undraw_schedule_re_2vro.svg";
import Hero from "../components/Hero/Hero";

export default function Calendar() {
  return (
    <>
      <Hero img={CalendarHero}
        title="About Us"
        text="testmytext here"
      />
      <h1>WorkHub Calendar</h1>
    </>
  )
}