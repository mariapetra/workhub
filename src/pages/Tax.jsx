import Hero from "../components/Hero/Hero";
import TaxHero from "../images/Hero/undraw_vault_re_s4my.svg"

export default function Tax() {
  return (
    <>
      <Hero img={TaxHero}
        title="About Us"
        text="testmytext here"
      />
      <h1>WorkHub Tax</h1>
    </>
  )
}