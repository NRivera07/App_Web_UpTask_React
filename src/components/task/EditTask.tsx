import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";
import { getTaskById } from "../../api/Task";
import EditTaskModal from "./EditTaskModal";

export default function EditTask() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("editTask")!;

  const params = useParams();

  const projectId = params.projectId!;

  const { data } = useQuery({
    queryKey: ["task", taskId],
    queryFn: () => getTaskById({ projectId, taskId }),
    enabled: !!taskId,
    retry: false,
  });

  if (data) return <EditTaskModal data={data} taskId={taskId} />;
}
