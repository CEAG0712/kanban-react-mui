import axiosConfig from "./axiosConfig";

export const taskListService = {
  getAlltasks: (id) => {
    return axiosConfig.get(`/tasks/${id}`);
  },

  taskBulkUpdateDragAndDrop: (payload, id) => {
    return axiosConfig.put(`/tasks/bulk-update/${id}`, payload);
  },

  createTask: (payload, id) => {
    return axiosConfig.post(`/tasks/${id}`, payload);
  },
  deleteTask: (id, column, projectId) => {
    return axiosConfig.delete(`/tasks/${projectId}/${id}/${column}`);
  },

  updateTask: (id, column, payload, projectId) => {
    return axiosConfig.put(`/tasks/${projectId}/${id}/${column}`, payload);
  },
};
