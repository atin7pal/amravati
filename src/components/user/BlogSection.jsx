import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { bloglist } from "./BlogArray";


const BlogSection = () => {
  return (
    <section className="">
      <div className="text-center mb-12 max-sm:mt-12">
        <h2 className="text-4xl mb-3 max-sm:text-3xl">Our Latest Blogs</h2>
        <p className="text-lg">
          Get insights, news, and tips on real estate, investing, and more.
        </p>
        <div className="w-20 h-1 mt-4 mx-auto"></div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {bloglist.map((blog) => (
          <div
            key={blog.id}
            className="group bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all flex duration-300"
          >
            <div className="overflow-hidden w-full">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[220px] overflow-hidden object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col gap-2">
              <h3 className="text-lg w-[300px] max-sm:w-[200px]">
                {blog.title}
              </h3>
              <div className="w-[60%] h-[1px] themebg"></div>
              <p className="text-xs accentfont">{blog.excerpt}</p>
              <Link
                to={blog.slug}
                className="mt-auto text-sm border w-[110px] px-2 pr-0 py-1 hover:underline font-medium flex justify-start items-center"
              >
                Read More <IoMdArrowDropright/>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
