import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import ProjectForm from "../../components/projects/ProjectForm";
import type { ProjectFormData } from "../../types";
import { createProject } from "../../api/Project";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

export default function CreateProject() {
  const initValues: ProjectFormData = {
    projectName: "",
    clientName: "",
    description: "",
  };

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initValues });

  const { mutate } = useMutation({
    mutationFn: createProject,
    onSuccess: (response) => {
      toast.success(response);
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleForm = (data: ProjectFormData) => {
    mutate(data);
  };
  return (
    <>
      <div className=" max-w-3xl mx-auto">
        <h1 className="text-5xl font-black">Crear proyecto</h1>
        <p className="text-2xl font-light text-gray-500 mt-5">
          Llena el siguiente formulario para crear tu proyecto.
        </p>
        <nav className="my-5">
          <Link
            className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
            to={"/"}
          >
            Volver
          </Link>
        </nav>
        <form
          className="mt-10 bg-white p-10 rounded-lg shadow-lg"
          onSubmit={handleSubmit(handleForm)}
          noValidate
        >
          <ProjectForm register={register} errors={errors} />
          <input
            type="submit"
            value="Crear proyecto"
            className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors"
          />
        </form>
      </div>
    </>
  );
}
