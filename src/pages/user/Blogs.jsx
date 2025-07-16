import React from "react";
import { Link } from "react-router-dom";
import { bloglist } from "../../components/user/BlogArray";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import { MdArrowRight } from "react-icons/md";
import floral from "../../assets/floral.jpg";
import { Helmet } from "react-helmet-async";

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Explore Our Blogs | Amaravati Group</title>
        <meta
          name="description"
          content="Discover luxurious living and smart investments with Amaravati Group. Your future, built today."
        />
      </Helmet>

      <Navbar />
      <section
        className="section bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `linear-gradient(#E9DAC1, #ffffffde, #E9DAC1),url(${floral})`,
        }}
      >
        <div className="row min-h-[80vh]">
          <div className="p-10 border flex gap-4 justify-center items-center flex-col max-sm:p-4">
            <h1 className="text-5xl max-sm:text-3xl text-center">
              Explore Our Blogs
            </h1>
            <p className="accentfont text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              similique!
            </p>
          </div>
        </div>
      </section>
      <section className="section p-20  bg-white max-sm:p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {bloglist.map((blog) => (
            <div
              key={blog.id}
              className="overflow-hidden shadow-sm transition-shadow duration-300 flex flex-col p-6"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[250px] object-cover"
              />
              <div className="flex mt-4 flex-col justify-between flex-grow">
                <div>
                  <div className="border-b mb-2">
                    <h2 className="text-lg mb-1">
                      {blog.title.slice(0, 150).concat("...")}
                    </h2>
                  </div>
                  <p className="mb-4 text-sm accentfont">
                    {blog.description.slice(0, 250).concat("...")}
                  </p>
                </div>
                <Link
                  to={blog.slug}
                  className="mt-auto flex justify-start items-center"
                >
                  Read More <MdArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogPage;
