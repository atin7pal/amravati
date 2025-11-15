import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      const res = await fetch("https://www.amravatigroup.in/contact_form.php", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        reset();

        // Redirect to thankyou page
        navigate("/thankyou");

        // Redirect back after 3 seconds
        setTimeout(() => {
          navigate(-1); // Go back to previous page
        }, 3000);
      } else {
        alert("❌ " + result.message);
      }
    } catch (error) {
      alert("⚠️ Something went wrong!");
      console.error(error);
    }
  };


  return (
    <div className="w-[90%] max-sm:w-full max-sm:px-4 max-sm:p-4 mx-auto py-6 px-10 bg-white">
      <form onSubmit={handleSubmit(onSubmit)} className="gap-4">
        <div className="flex gap-4 mt-2 w-full">
          {/* Name */}

          <div className="w-full">
            <label className="text-xs accentfont">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full border px-3 py-2  mt-1"
            />
            {errors.name && (
              <p className="text-red-500 text-xs accentfont">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="w-full">
            <label className="text-xs accentfont">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full border px-3 py-2  mt-1"
            />
            {errors.email && (
              <p className="text-red-500 text-xs accentfont">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex gap-4 mt-2 w-full">
          {/* Phone */}
          <div className="w-full">
            <label className="text-xs accentfont">Phone</label>
            <input
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit number",
                },
              })}
              className="w-full border px-3 py-2  mt-1"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs accentfont">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* City */}
          <div className="w-full">
            <label className="text-xs accentfont">City</label>
            <input
              {...register("city", { required: "City is required" })}
              className="w-full border px-3 py-2  mt-1"
            />
            {errors.city && (
              <p className="text-red-500 text-xs accentfont">
                {errors.city.message}
              </p>
            )}
          </div>

          {/* State */}
          <div className="w-full">
            <label className="text-xs accentfont">State</label>
            <input
              {...register("state", { required: "State is required" })}
              className="w-full border px-3 py-2  mt-1"
            />
            {errors.state && (
              <p className="text-red-500 text-xs accentfont">
                {errors.state.message}
              </p>
            )}
          </div>
        </div>

        {/* Category Select */}
        <div>
          <label className="text-xs accentfont">Category</label>
          <select
            {...register("category", { required: "Category is required" })}
            className="w-full border px-3 py-2  mt-1"
          >
            <option value="">Select Category</option>
            <option value="sales">Sales</option>
            <option value="enquiry">Enquiry</option>
            <option value="feedback">Feedback</option>
            <option value="feedback">Career</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-xs accentfont">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Query - full width */}
        <div className="sm:col-span-2">
          <label className="text-xs accentfont">Your Query</label>
          <textarea
            {...register("query", { required: "Query is required" })}
            className="w-full border px-3 py-2  mt-1"
            rows={4}
          />
          {errors.query && (
            <p className="text-red-500 text-xs accentfont">
              {errors.query.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="sm:col-span-2 text-center mt-4">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
