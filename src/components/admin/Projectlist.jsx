import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiEdit, FiTrash2 } from "react-icons/fi";
import parse from "html-react-parser"; // to render HTML from ReactQuill



export default function ProjectList({ projects, onEdit, onDelete }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 w-full">
      <h2 className="text-2xl font-bold accentfont mb-4 bgcolorfont">
        Completed Projects
      </h2>

      {projects?.length === 0 && (
        <p className="text-gray-500 accentfont">No projects found.</p>
      )}

      {projects?.map((project, index) => (
        <div
          key={index}
          className="overflow-hidden"
        >
          {/* Header */}
          <div
            className="flex justify-between items-center px-4 py-3 cursor-pointer themebg"
            onClick={() => toggleExpand(index)}
          >
            <div>
              <h3 className="text-lg font-semibold accentfont">
                {project.name}
              </h3>
              <p className="text-sm text-gray-500 accentfont">
                {project.location}
              </p>
            </div>
            <div className="text-gray-600">
              {expandedIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </div>
          </div>

          {/* Expandable Body */}
          {expandedIndex === index && (
            <div className="px-6 py-4 space-y-3">
              <div>
                <span className="font-semibold accentfont text-lg">Tagline: </span>
                <span className="accentfont">{project.tagline}</span>
              </div>
              <div>
                <span className="font-semibold accentfont text-lg">
                  Brochure Link:{" "}
                </span>
                <a
                  href={project.brochureLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline accentfont"
                >
                  {project.brochureLink}
                </a>
              </div>
              <div>
                <span className="font-semibold accentfont text-lg">Description:</span>
                <div className="prose max-w-none accentfont">
                  {parse(project.description)}
                </div>
              </div>

              {/* Gallery */}
              <div>
                <span className="font-semibold accentfont text-lg">Gallery:</span>
                <div className="flex flex-wrap gap-3 mt-2">
                  {project.galleryImages?.map((img, idx) => (
                    <img
                      key={idx}
                      src={img.src}
                      alt={img.alt}
                      className="w-24 h-24 object-cover rounded border"
                    />
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <span className="font-semibold accentfont mb-4 text-lg">Highlights:</span>
                <ul className="list-disc ml-5 accentfont mt-2">
                  {project.highlights?.map((item, idx) => (
                    <li className="accentfont" key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Offerings */}
              <div>
                <span className="font-semibold accentfont text-lg">Offerings:</span>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2 accentfont">
                  {project.offerings?.map((o, idx) => (
                    <div
                      key={idx}
                      className="p-2 themebg accentfont"
                    >
                      <div className="accentfont">
                        <strong>Type:</strong> {o.type}
                      </div>
                      <div>
                        <strong>Size:</strong> {o.size}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => onEdit(project)}
                  className="px-4 py-2 bg-yellow-100 text-yellow-600 hover:bg-yellow-200 flex items-center gap-2"
                >
                  <FiEdit /> <span className="accentfont">Edit</span>
                </button>
                <button
                  onClick={() => onDelete(project)}
                  className="px-4 py-2 bg-red-100 text-red-600 hover:bg-red-200 flex items-center gap-2"
                >
                  <FiTrash2 /> <span className="accentfont">Delete</span>
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
