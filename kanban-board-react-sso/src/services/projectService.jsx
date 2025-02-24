import axiosConfig from "./axiosConfig";

export const projectService = {
  getAllProjects: () => {
    return axiosConfig.get("/projects");
  },

  createProject: (payload) => {
    return axiosConfig.post("/projects", payload);
  },

  updateProject: (id, payload) => {
    return axiosConfig.put(`/projects/${id}`, payload);
  },

  deleteProject: (id) => {
    return axiosConfig.delete(`/projects/${id}`);
  },
};
