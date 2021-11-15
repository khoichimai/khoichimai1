import API from "../API";
import { useState, useEffect } from "react";
const initialSchedule = {};
export const useHomeFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [schedule, setSchedule] = useState(initialSchedule);

    useEffect(() => {
        const getSchedule = async () => {
            try {
                setError(false);
                setIsLoading(true);
                const response = await API.getSchedule();
                setSchedule({
                    ...schedule,
                    response
                });
            } catch (error) {
                setError(true);
            }
            setIsLoading(false);
        };
        setSchedule(initialSchedule);
        getSchedule();
    }, []);
    return { schedule, isLoading, setIsLoading, error };
};
export default useHomeFetch;
