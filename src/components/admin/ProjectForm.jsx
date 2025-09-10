import { useForm, useFieldArray, Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { MdAdd } from "react-icons/md";

// Child component for offerings inside a nested project
function OfferingsFieldArray({ control, register, nestIndex }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `projects.${nestIndex}.offerings`,
  });

  return (
    <div className="mt-2">
      <label className="block font-semibold accentfont">Offerings</label>
      {fields.map((field, index) => (
        <div key={field.id} className="flex gap-2 mb-2">
          <div className="flex flex-col flex-1">
            <label className="text-sm accentfont">Type</label>
            <input
              {...register(`projects.${nestIndex}.offerings.${index}.type`)}
              placeholder="Type"
              className="input accentfont"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label className="text-sm accentfont">Size</label>
            <input
              {...register(`projects.${nestIndex}.offerings.${index}.size`)}
              placeholder="Size"
              className="input accentfont"
            />
          </div>
          <button
            type="button"
            onClick={() => remove(index)}
            className="text-red-500 bg-red-100 px-2 self-end btn"
          >
            Delete
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ type: "", size: "" })}
        className="btnlight accentfont flex items-center gap-1 btn"
      >
        <MdAdd /> Add Offering
      </button>
    </div>
  );
}

export default function AddProjectForm({
  defaultValues = {},
  onSubmit,
  onCancel,
}) {
  const { register, control, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      basicDescription: "",
      coverImage: "",
      description: [""],
      highlights: [""],
      gallery: [{ src: "", alt: "" }],
      projects: [],
      moreDetails: [{ label: "", value: "" }],
      floorPlans: [{ name: "", image: "" }],
    },
  });

  const [rteContent, setRteContent] = useState("");

  // Top-level arrays
  const descArray = useFieldArray({ control, name: "description" });
  const highlightArray = useFieldArray({ control, name: "highlights" });
  const galleryArray = useFieldArray({ control, name: "gallery" });
  const projectsArray = useFieldArray({ control, name: "projects" });
  const detailsArray = useFieldArray({ control, name: "moreDetails" });
  const floorPlansArray = useFieldArray({ control, name: "floorPlans" });

  const submitHandler = async (data) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("basicDescription", data.basicDescription);
    formData.append("richText", data.richText);

    if (data.coverImage[0]) {
      formData.append("coverImage", data.coverImage[0]);
    }

    // stringify arrays/objects
    formData.append("description", JSON.stringify(data.description));
    formData.append("highlights", JSON.stringify(data.highlights));
    formData.append("gallery", JSON.stringify(data.gallery));
    formData.append("projects", JSON.stringify(data.projects));

    const res = await fetch("https://www.amravatigroup.in/upload_project.php", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="space-y-6 w-full mx-auto space-x-2"
    >
      {/* Main Project Info */}
      <div className="flex gap-3 w-full">
        <div className="flex flex-col w-full">
          <label className="text-sm accentfont">Main Project Title</label>
          <input
            {...register("title")}
            placeholder="Main Project Title"
            className="input accentfont"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-sm accentfont">Basic Description</label>
          <input
            {...register("basicDescription")}
            placeholder="Basic Description"
            className="input accentfont"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-sm accentfont">Cover Image</label>
          <input
            {...register("coverImage")}
            type="file"
            className="input accentfont"
          />
        </div>
      </div>

      <label className="block font-semibold accentfont text-lg bgcolorfont">
        Rich Description
      </label>
      <ReactQuill
        value={rteContent}
        onChange={setRteContent}
        theme="snow"
        className="h-[200px]"
      />

      {/* Descriptions */}
      <div>
        <label className="block font-semibold mb-2 accentfont text-lg bgcolorfont mt-14">
          Extra Descriptions
        </label>
        {descArray.fields.map((field, index) => (
          <div key={field.id} className="flex gap-2 mb-2">
            <div className="flex flex-col flex-1">
              <label className="text-sm accentfont">
                Description {index + 1}
              </label>
              <input
                {...register(`description.${index}`)}
                placeholder={`Description ${index + 1}`}
                className="input accentfont"
              />
            </div>
            <button
              type="button"
              onClick={() => descArray.remove(index)}
              className="text-red-500 bg-red-100 px-2 self-end"
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => descArray.append("")}
          className="btn accentfont"
        >
          <MdAdd /> Add Description
        </button>
      </div>

      {/* Highlights */}
      <div>
        <label className="block font-semibold mb-2 accentfont text-lg bgcolorfont">
          Highlights
        </label>
        {highlightArray.fields.map((field, index) => (
          <div key={field.id} className="flex gap-2 mb-2">
            <div className="flex flex-col flex-1">
              <label className="text-sm accentfont">Highlight</label>
              <input
                {...register(`highlights.${index}`)}
                placeholder="Highlight"
                className="input accentfont"
              />
            </div>
            <button
              type="button"
              onClick={() => highlightArray.remove(index)}
              className="text-red-500 bg-red-100 px-2 self-end"
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => highlightArray.append("")}
          className="btn accentfont"
        >
          <MdAdd /> Add Highlight
        </button>
      </div>

      {/* Gallery */}
      <div>
        <label className="block font-semibold mb-2 accentfont text-lg bgcolorfont">
          Gallery
        </label>
        {galleryArray.fields.map((field, index) => (
          <div key={field.id} className="flex gap-2 mb-2">
            <div className="flex flex-col flex-1">
              <label className="text-sm accentfont">Image</label>
              <input
                {...register(`gallery.${index}.src`)}
                type="file"
                className="input accentfont"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-sm accentfont">Alt text</label>
              <input
                {...register(`gallery.${index}.alt`)}
                placeholder="Alt text"
                className="input accentfont"
              />
            </div>
            <button
              type="button"
              onClick={() => galleryArray.remove(index)}
              className="text-red-500 bg-red-100 px-2 self-end"
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => galleryArray.append({ src: "", alt: "" })}
          className="btn accentfont"
        >
          <MdAdd /> Add Image
        </button>
      </div>

      {/* More Details */}
      <div>
        <label className="block font-semibold mb-2 accentfont text-lg bgcolorfont">
          More Details
        </label>
        {detailsArray.fields.map((field, index) => (
          <div key={field.id} className="flex gap-2 mb-2">
            <div className="flex flex-col flex-1">
              <label className="text-sm accentfont">Label</label>
              <input
                {...register(`moreDetails.${index}.label`)}
                placeholder="Label"
                className="input accentfont"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-sm accentfont">Value</label>
              <input
                {...register(`moreDetails.${index}.value`)}
                placeholder="Value"
                className="input accentfont"
              />
            </div>
            <button
              type="button"
              onClick={() => detailsArray.remove(index)}
              className="text-red-500 bg-red-100 px-2 self-end"
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => detailsArray.append({ label: "", value: "" })}
          className="btn accentfont"
        >
          <MdAdd /> Add Detail
        </button>
      </div>

      {/* Floor Plans */}
      <div>
        <label className="block font-semibold mb-2 accentfont text-lg bgcolorfont">
          Floor Plans
        </label>
        {floorPlansArray.fields.map((field, index) => (
          <div key={field.id} className="flex gap-2 mb-2">
            <div className="flex flex-col flex-1">
              <label className="text-sm accentfont">Plan File</label>
              <input
                {...register(`floorPlans.${index}.name`)}
                type="file"
                className="input accentfont"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-sm accentfont">Image URL</label>
              <input
                {...register(`floorPlans.${index}.image`)}
                placeholder="Image URL"
                className="input accentfont"
              />
            </div>
            <button
              type="button"
              onClick={() => floorPlansArray.remove(index)}
              className="text-red-500 bg-red-100 px-2 self-end"
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => floorPlansArray.append({ name: "", image: "" })}
          className="btn accentfont"
        >
          <MdAdd /> Add Floor Plan
        </button>
      </div>

      {/* Nested Projects */}
      <div>
        <label className="block font-semibold mb-2 accentfont text-lg bgcolorfont">
          Nested Projects
        </label>
        {projectsArray.fields.map((field, index) => (
          <div key={field.id} className="p-4 border rounded-md mb-4 space-y-2">
            <div className="flex flex-col">
              <label className="text-sm accentfont">Project Name</label>
              <input
                {...register(`projects.${index}.name`)}
                placeholder="Project Name"
                className="input accentfont"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm accentfont">Location</label>
              <input
                {...register(`projects.${index}.location`)}
                placeholder="Location"
                className="input accentfont"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm accentfont">Tagline</label>
              <input
                {...register(`projects.${index}.tagline`)}
                placeholder="Tagline"
                className="input accentfont"
              />
            </div>

            <label className="block font-semibold accentfont">
              Description
            </label>
            <Controller
              name={`projects.${index}.description`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <ReactQuill
                  theme="snow"
                  value={field.value}
                  onChange={field.onChange}
                  className="h-[200px] mb-10"
                />
              )}
            />

            {/* Offerings */}
            <OfferingsFieldArray
              control={control}
              register={register}
              nestIndex={index}
            />

            <button
              type="button"
              onClick={() => projectsArray.remove(index)}
              className="text-red-500 bg-red-100 px-2"
            >
              Delete Project
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            projectsArray.append({
              name: "",
              location: "",
              tagline: "",
              offerings: [],
            })
          }
          className="btn accentfont"
        >
          <MdAdd /> Add Project
        </button>
      </div>

      {/* Submit / Cancel */}
      <div className="flex gap-4 mt-6">
        <button type="submit" className="btn">
          Save Project
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
