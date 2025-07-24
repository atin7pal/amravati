import React from "react";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import ventures from '../../assets/ventures.jpg'
import VentureComponent from "../../components/user/VentureComponent";

const Ventures = () => {
  return (
    <>
      <Navbar />
      <section className="section h-[80vh] themebg max-sm:h-full">
        <div className="row">
          <div className="flex flex-col justify-center items-start gap-4 w-full">
            <h2 className="text-5xl">OUR VENTURES</h2>
            <p className="w-[90%]">
             At Amravati Group, we are dedicated to fostering growth & innovation across multiple sectors. Together, these diverse ventures reflect our mission to enhance lives and strengthen our communities.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <img src={ventures} alt="" />
          </div>
        </div>
      </section>
       <section className="section">
        <div className="row brownbg">
            <div className="flex flex-col justify-center items-center text-center gap-4">
            <h2 className="text-5xl">
             EMPOWER ENGAGE BUILD
            </h2>
            <p className="w-[60%] accentfont max-sm:w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eveniet enim ea quidem ratione quae, voluptas possimus quaerat iure culpa assumenda quos asperiores deleniti, illo voluptates, quo non! Quam enim molestiae sapiente non delectus quae voluptate iure repellat reprehenderit aspernatur?</p>
        </div>
        </div>
       </section>
       <section className="w-full section max-sm:h-full">
        <VentureComponent/>
       </section>
      <Footer />
    </>
  );
};

export default Ventures;
