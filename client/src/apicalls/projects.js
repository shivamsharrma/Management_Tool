const { apiRequest } = require(".");

export const CreateProject = async (project) => apiRequest("post", "/api/projects/create-project", project);

export const GetAllProjects = async (filters) => apiRequest("post", "/api/projects/get-all-projects", filters);

export const EditProject = async (project) => apiRequest("post", "/api/projects/edit-project", project);

export const DeleteProject = async (id) => apiRequest("post", "/api/projects/delete-project", { _id: id });