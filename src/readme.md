import WorkCard from"../components/WorkCard/WorkCard";



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
