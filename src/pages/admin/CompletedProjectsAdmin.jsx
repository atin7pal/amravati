import React from "react";
import ProjectForm from "../../components/admin/ProjectForm";

export function CompletedProjectsAdmin(props) {
  return (
    <>
      <h2 className="text-3xl font-bold accentfont bgcolorfont mb-6">
        Create Project
      </h2>
      <div className="w-full mb-6">
        <div className="p-4 border w-fit flex justify-center items-start flex-col gap-2">
          <h2 className="accentfont">Completed Projects</h2>
          <h2 className="text-3xl accentfont">1</h2>
        </div>
      </div>
      <ProjectForm />
    </>
  );
}
