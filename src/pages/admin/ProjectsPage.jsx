import { useEffect, useState } from "react";
import ProjectList from "../../components/admin/Projectlist";
import { Fa0 } from "react-icons/fa6";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const res = await fetch("https://amravatigroup.in/get_projects.php");
      const data = await res.json();

      if (data.success) {
        setProjects(data.data);
        setLoading(false)
      } else {
        console.error("Failed to fetch projects");
        setLoading(false)
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      setLoading(false)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleEdit = (project) => {
    console.log("Edit project:", project);
    // open edit modal / form
  };

  const handleDelete = async (project) => {
    if (window.confirm(`Delete project "${project.name}"?`)) {
      try {
        const formData = new FormData();
        formData.append("id", project.id);

        const res = await fetch("https://amravatigroup.in/delete_project.php", {
          method: "POST",
          body: formData,
        });

        const result = await res.json();
        if (result.success) {
          setProjects((prev) => prev.filter((p) => p.id !== project.id));
          setLoading(false)
        } else {
          alert("❌ Failed to delete project");
          setLoading(false)
        }
      } catch (err) {
        console.error(err);
        setLoading(false)
      }
    }
  };

  if (loading) return <p className="accentfont">Loading projects...</p>;

  return (
    <ProjectList
      projects={projects}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
}
