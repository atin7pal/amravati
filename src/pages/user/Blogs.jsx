import React from "react";
import { Link } from "react-router-dom";
import { bloglist } from "../../components/user/BlogArray";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import { MdArrowRight } from "react-icons/md";
import floral from '../../assets/floral.jpg'

const BlogPage = () => {
  return (
    <>
    <Navbar/>
    <section className="section bg-center bg-no-repeat bg-cover" style={{backgroundImage: `linear-gradient(#F8F3D9, #ffffffde, #F8F3D9),url(${floral})`}}>
        <div className="row min-h-[80vh]">
            <div className="p-10 border flex gap-4 justify-center items-center flex-col max-sm:p-4">
      <h1 className="text-4xl max-sm:text-3xl text-center">
        Explore Our Blogs
      </h1>
      <p className="accentfont text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, similique!</p>
      </div>
      </div>
      </section>
      <section className="section p-20  bg-white max-sm:p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {bloglist.map((blog) => (
          <div
            key={blog.id}
            className="themebg overflow-hidden hover:shadow-xl border transition-shadow duration-300 flex flex-col p-6"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-50 object-cover"
            />
            <div className="flex mt-4 flex-col justify-between flex-grow">
              <div>
                <div className="border-b mb-2">
                <h2 className="text-lg mb-1">
                  {blog.title.slice(0, 34).concat("...")}
                </h2>
                </div>
                <p className="mb-4 text-sm accentfont">{blog.description.slice(0, 150).concat("...")}</p>
              </div>
              <Link
                to={blog.slug}
                className="mt-auto flex justify-start items-center"
              >
                Read More <MdArrowRight/>
              </Link>
            </div>
          </div>
        ))}
      </div>
      </section>
      <Footer/>
    </>
  );
};

export default BlogPage;
