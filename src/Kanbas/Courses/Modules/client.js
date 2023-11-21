import axios from "axios";
const BASE_URL = process.env.BACKEND_URL;
const COURSES_URL = BASE_URL + "/api/courses";
const MODULES_URL = BASE_URL + "/api/modules";
export const createModule = async (courseId, module) => {
    const response = await axios.post(`${COURSES_URL}/${courseId}/modules`, module);
    return response.data;
}
export const deleteModule = async (moduleId) => {
    const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
    return response.data;
}
export const findModulesForCourse = async (courseId) => {
    const response = await axios.get(`${COURSES_URL}/${courseId}/modules`);
    return response.data;
};
export const updateModule = async (module) => {
    const response = await axios.put(`${MODULES_URL}/${module._id}`, module);
    return response.data;
};