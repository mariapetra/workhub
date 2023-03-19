import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function WorkPage() {
  const [work, setWork] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/work/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setWork(data);
      });
  }, [id]);

  return (
    <div>
      <h2>{workData.company}</h2>
      <h3>{workDatas.hours}</h3>
    </div>
  );
}

export default function WorkPage() {
  return (
    <div>
      <h2>{work.company}</h2>
      <h3>{work.hours}</h3>
    </div>
  );
};
