import useHomeFetch from "../../hooks/useHomeFetch";
//components
import BodyContent from "../layout/BodyContent";
import NavBar from "../layout/NavBar";
const Dashboard = () => {
    const { schedule, isLoading, setIsLoading, error } = useHomeFetch();
    return (
        <>
            <NavBar />
            <BodyContent />
        </>
    );
};

export default Dashboard;
