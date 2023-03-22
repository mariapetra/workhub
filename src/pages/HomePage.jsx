import { useState, useEffect } from "react";
import WorkCard from "../components/WorkCard/WorkCard";
import "../App.css"

export default function HomePage() {
  const [workList, setWorkList] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/work`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setWorkList(data);
      });
  }, []);

  return (
    <>
      <h1>WorkHub</h1>
      <div id="work-list">
        {workList.map((workData, key) => {
          return <WorkCard key={key} workData={workData} />;
        })}
      </div>
    </>

  );
}
