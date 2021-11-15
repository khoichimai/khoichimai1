import axios from "axios";
const appAPI = {
    getSchedule: async () => {
        const scheduleApiUrl = "http://localhost:4000/lecturer/api/schedule";
        const response = await axios.get(scheduleApiUrl);
        return response.data;
    }
};

export default appAPI;
