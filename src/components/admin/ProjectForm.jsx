import { useForm, useFieldArray } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { MdAdd } from "react-icons/md";

export default function ProjectForm({ defaultValues = {}, onSubmit, onCancel }) {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      location: "",
      tagline: "",
      brochureLink: "",
      description: "",
      galleryImages: [{ src: "", alt: "" }],
      highlights: [""],
      offerings: [{ type: "", size: "" }],
    },
  });

  const [rteContent, setRteContent] = useState("");

  const {
    fields: galleryFields,
    append: appendGallery,
    remove: removeGallery,
  } = useFieldArray({ control, name: "galleryImages" });

  const {
    fields: highlightFields,
    append: appendHighlight,
    remove: removeHighlight,
  } = useFieldArray({ control, name: "highlights" });

  const {
    fields: offeringFields,
    append: appendOffering,
    remove: removeOffering,
  } = useFieldArray({ control, name: "offerings" });

  const submitHandler = (data) => {
    onSubmit(data);
    reset(); // reset form after submit
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="space-y-6 w-full mx-auto space-x-2"
    >

      <input
        {...register("name")}
        placeholder="Project Name"
        className="input accentfont"
      />
      <input
        {...register("location")}
        placeholder="Location"
        className="input accentfont"
      />
      <input
        {...register("tagline")}
        placeholder="Tagline"
        className="input accentfont"
      />
      <input
        {...register("brochureLink")}
        placeholder="Brochure Link"
        className="input accentfont"
      />

      <label className="block font-semibold accentfont text-lg bgcolorfont">
        Description
      </label>
      <ReactQuill
        value={rteContent}
        onChange={setRteContent}
        theme="snow"
        className="h-[200px]"
      />

      {/* Gallery Images */}
      <div className="mt-16">
        <label className="block font-semibold mb-2 accentfont text-lg bgcolorfont">
          Gallery Images
        </label>
        {galleryFields.map((field, index) => (
          <div key={field.id} className="flex gap-2 mb-4 mt-2">
            <input
              {...register(`galleryImages.${index}.src`)}
              placeholder="Image URL"
              className="input accentfont"
            />
            <input
              {...register(`galleryImages.${index}.alt`)}
              placeholder="Alt Text"
              className="input accentfont"
            />
            <button
              type="button"
              onClick={() => removeGallery(index)}
              className="text-red-500 bg-red-100 px-2 accentfont"
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendGallery({ src: "", alt: "" })}
          className="btnlight accentfont"
        >
          + Add Image
        </button>
      </div>

      {/* Highlights */}
      <div>
        <label className="block font-semibold mb-2 accentfont text-lg bgcolorfont">
          Highlights
        </label>
        {highlightFields.map((field, index) => (
          <div key={field.id} className="flex gap-2 mb-4 mt-2">
            <input
              {...register(`highlights.${index}`)}
              placeholder="Highlight"
              className="input accentfont"
            />
            <button
              type="button"
              onClick={() => removeHighlight(index)}
              className="text-red-500 bg-red-100 px-2 accentfont"
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendHighlight("")}
          className="btnlight accentfont flex items-center gap-1"
        >
          <MdAdd /> Add Highlight
        </button>
      </div>

      {/* Offerings */}
      <div>
        <label className="block font-semibold mb-2 accentfont text-lg bgcolorfont">
          Offerings
        </label>
        {offeringFields.map((field, index) => (
          <div key={field.id} className="flex gap-2 mb-4 mt-2">
            <input
              {...register(`offerings.${index}.type`)}
              placeholder="Type"
              className="input accentfont"
            />
            <input
              {...register(`offerings.${index}.size`)}
              placeholder="Size"
              className="input accentfont"
            />
            <button
              type="button"
              onClick={() => removeOffering(index)}
              className="text-red-500 bg-red-100 accentfont px-2"
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendOffering({ type: "", size: "" })}
          className="btnlight accentfont flex items-center gap-1"
        >
          <MdAdd /> Add Offering
        </button>
      </div>

<div className="flex gap-4 mt-4">

      <button type="submit" className="btn ">
        Submit
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
