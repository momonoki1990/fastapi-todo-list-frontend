import axios, { AxiosResponse } from "axios";

const API_ORIGIN = "http://localhost:8000";

type UpdateTaskData = {
  title: string;
  done: boolean;
};

const getAllTasks = async (): Promise<AxiosResponse> =>
  await axios.get(`${API_ORIGIN}/tasks`);

const updateTask = async (
  id: number,
  data: UpdateTaskData
): Promise<AxiosResponse> => await axios.put(`${API_ORIGIN}/tasks/${id}`, data);

const deleteTask = async (id: number): Promise<AxiosResponse> =>
  await axios.delete(`${API_ORIGIN}/tasks${id}`);

export default { getAllTasks, updateTask, deleteTask };
