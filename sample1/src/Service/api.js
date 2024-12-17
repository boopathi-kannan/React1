import axios from "axios";

const api = "https://66ee89cb3ed5bb4d0bf13498.mockapi.io/project"

const getProject = () => axios.get(`${api}/projects`)
const addProject = (projectData) => axios.post(`${api}/projects`, projectData)
const editProject = (id, projectData) => axios.put(`${api}/projects/${id}`, projectData)
const deleteProject = (id) => axios.delete(`${api}/projects/${id}`)


export { getProject, addProject, editProject, deleteProject } 