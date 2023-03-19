import { Link } from "react-router-dom";

function WorkCard(props) {
  const { workData } = props;
  return (
    <div className="work-card">
      <Link to={`/work/${workData.id}`}>
        <h2>{workData.description}</h2>
      </Link>
    </div>
  );
}

export default WorkCard;