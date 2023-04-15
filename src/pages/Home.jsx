// import { useState, useEffect } from "react";
import "../index.css"
import "../components/Hero/Hero.css";


import Hero from "../components/Hero/Hero";
import HomeHero from "../images/Hero/undraw_working_from_anywhere.svg"

export default function HomePage() {

  return (
    <>
      <Hero img={HomeHero}
        title="WorkHubTest"
        text="testmytext here"
      />

      <h1>WorkHub</h1>
      <div>
        Everything you need
        All in one place

        Let us do the hard work of keeping you organised so you can focus on working hard
      </div>
    </>

  );
}
