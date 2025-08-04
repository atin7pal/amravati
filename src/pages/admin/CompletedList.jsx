import { useState } from "react";
import Modal from "../../components/admin/Modal";
import ProjectList from "../../components/admin/Projectlist";
import ProjectForm from "../../components/admin/ProjectForm";

export default function CompletedList() {
  const [projects, setProjects] = useState([]); // fetched or passed via props
  const [editingProject, setEditingProject] = useState(null);

  const handleEdit = (project) => setEditingProject(project);
  const handleCloseModal = () => setEditingProject(null);

  const handleFormSubmit = (updatedData) => {
    // Replace the project in the array or update via API
    setProjects((prev) =>
      prev.map((proj) => (proj.id === updatedData.id ? updatedData : proj))
    );
    handleCloseModal();
  };

  const handleDelete = (project) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      setProjects((prev) => prev.filter((p) => p.id !== project.id));
    }
  };

  return (
    <div className="p-4">
      <ProjectList
        projects={projects}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Modal isOpen={!!editingProject} onClose={handleCloseModal}>
        <ProjectForm
          defaultValues={editingProject}
          onSubmit={handleFormSubmit}
          onCancel={handleCloseModal}
        />
      </Modal>
    </div>
  );
}
