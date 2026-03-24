import { isAxiosError } from "axios";
import api from "../lib/axios";
import type { Task, TaskFormData } from "../types";

type CreateTypeTask = {
  formData: TaskFormData;
  projectId: Task["_id"];
};
export async function createTask({
  formData,
  projectId,
}: Pick<CreateTypeTask, "formData" | "projectId">) {
  try {
    const url = `/projects/${projectId}/tasks`;
    const { data } = await api.post(url, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
