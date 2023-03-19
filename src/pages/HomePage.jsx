import { useState, useEffect } from "react";
import { allWork } from "../data";
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
    <div id="work-list">
      {workList.map((workData, key) => {
        return <WorkCard key={key} workData={workData} />;
      })}
    </div>
  );
}
