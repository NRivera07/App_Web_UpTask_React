import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProjectById } from "../../api/Project";
import EditPojectForm from "../../components/projects/EditProjectForm";

export default function EditProject() {
  const params = useParams();

  const projectId = params.projectId!;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["editProject", projectId],
    queryFn: () => getProjectById(projectId),
    retry: false,
  });

  console.log(data, isLoading, isError);

  if (data) return <EditPojectForm data={data} projectId={projectId} />;
}
