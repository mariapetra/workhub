import Hero from "../components/Hero/Hero";
import LoginHero from "../images/Hero/undraw_working_late_re_0c3y.svg";

import LoginForm from "../components/LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <>
      <Hero img={LoginHero}
        title="Login"
        text="testmytext here"
      />

      <LoginForm />;

    </>
  )

}