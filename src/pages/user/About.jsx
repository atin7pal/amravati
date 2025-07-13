import React from "react";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import aboutbanner from "../../assets/project1/outdoor1.jpg";
import aboutbanner1 from "../../assets/project1/livingdining2.jpg";
import aboutbanner2 from "../../assets/project1/view.jpg";
import floral from '../../assets/floral.jpg'
import { BsQuote } from "react-icons/bs";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import map from '../../assets/tropo.jpg'
import TeamSection from "../../components/user/TeamSection";
import FAQSection from "../../components/user/FAQSection";
import { SendQuery } from "../../components/user/SendQuery";
import video2 from '../../assets/video2.mp4'
import BentoImageGrid from "../../components/user/BentoGrid";


export function About(props) {
  return (
    <>
      <Navbar />
      <section className="section h-screen themebg">
        <div className="row h-full">
          <div className="w-full flex flex-col justify-center items-start max-sm:items-center max-sm:text-center gap-4">
            <h2 className="text-xl bg-[#4B352A] text-[#F8F3D9] px-2 py-1">About Us</h2>
            <h2 className="text-5xl">Amaravati Group</h2>
            <p className="w-[80%] accentfont max-sm:w-full">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam consequuntur sapiente animi voluptas eius corrupti.</p>
          </div>
          <div className="w-full flex justify-center items-center h-full">
            <img src={aboutbanner} alt="" className="h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="section h-full">
       <div className="row">
        <div className="w-full flex flex-col justify-center items-center  gap-4">
            <div className="w-full h-full ">
            <img src={aboutbanner1} className="w-full h-[350px] object-cover" alt="" />
            </div>
            <div className="flex w-full gap-4">
            <img src={aboutbanner} className="w-full h-[20vh] object-cover" alt="" />
            <img src={aboutbanner2} className="w-full h-[20vh] object-cover" alt="" />
            <div className="w-full h-[20vh] bg-[#4b352a]"></div>
            </div>
        </div>
         <div className="w-full h-[50vh] max-sm:h-[100%] px-5 flex gap-4 flex-col">
            <h2 className="text-4xl max-sm:p-4 max-sm:pt-10 max-sm:text-3xl max-sm:text-center">Welcome</h2>
            <p className="accentfont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vitae reprehenderit explicabo ullam incidunt, hic sequi qui molestiae sapiente id est voluptatem dignissimos saepe officia. Nesciunt, ea architecto, quod quaerat sit pariatur fuga nam dolore dolorem reiciendis voluptas, unde ducimus facere excepturi. Quibusdam, architecto? Minus ipsum molestias alias similique. Neque!</p>
            <br />
            <p className="accentfont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione soluta, placeat architecto harum in aliquid fuga blanditiis? Rem, omnis. Architecto?</p>
               <button className="btn w-[190px]">Contact Us Now</button>
         </div>
       </div>
      </section>
      
      <section className="section bg-center bg-no-repeat bg-cover" style={{backgroundImage: `linear-gradient(#fff,#ffffffe0, #f8f3d9),url(${floral})`}}>
          <div className="flex p-20 pt-10 max-sm:flex-col max-sm:p-4">
            <div className="w-full h-full flex flex-col text-center gap-4 justify-center items-center p-20 max-sm:p-4">
                <h2 className="text-4xl">Our Vision</h2>
                <p className="accentfont">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto assumenda deserunt ex unde nemo quo expedita dicta eos labore magnam doloribus nihil atque beatae repudiandae corporis velit distinctio, voluptate exercitationem.</p>
            </div>
            <div className="w-full h-full flex flex-col text-center gap-4 justify-center items-center bg-white p-20 shadow-lg shadow-[#f8f3d9] max-sm:p-4">
                <h2 className="text-4xl">Our Motive</h2>
                <p className="accentfont">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto assumenda deserunt ex unde nemo quo expedita dicta eos labore magnam doloribus nihil atque beatae repudiandae corporis velit distinctio, voluptate exercitationem.</p>
            </div>
          </div>
      </section>
        
      <section className="section">
        <h2 className="text-4xl p-20 pb-0 max-sm:p-4 max-sm:pt-10 max-sm:text-3xl max-sm:text-center">A Glimpse Of Our Gallery</h2>
        <div className="row">
           <BentoImageGrid/>
        </div>
      </section>

      <section className="section themebg">
        <h2 className="text-4xl pt-10 max-sm:p-4 max-sm:pt-10 max-sm:text-3xl max-sm:text-center">A Message From The Director</h2>
        <div className="row">
            <div className="w-full flex flex-col justify-center items-center gap-4 text-center p-10 bg-white">
            <img src={aboutbanner1} className="w-[100px] rounded-full h-[100px] object-cover" alt="" />
            <p className="w-[90%] accentfont relative"><BiSolidQuoteLeft className=""/> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae quidem aut velit accusantium aliquam placeat consectetur harum quos? Recusandae tenetur laboriosam ut esse modi? Voluptates possimus asperiores nobis laborum maiores facilis, eligendi quam soluta voluptas minima qui a, molestiae culpa doloribus nostrum impedit et deleniti excepturi voluptatum. Labore, dolores nemo?<BiSolidQuoteRight  className="absolute bottom-0 right-0 "/> </p>
            <p className="">Mr. Amaravati | Managing Director</p>
            </div>
        </div>
      </section>
      <section style={{backgroundImage: `linear-gradient(to right, #fff, #fff, #fffffff0),url(${map})`}} className="section bg-no-repeat bg-center bg-cover">
        <h2 className="text-4xl p-20 pb-0 max-sm:p-4 max-sm:pt-10 max-sm:text-3xl max-sm:text-center">Meet The People</h2>
        <div className="row">
           <TeamSection/>
        </div>
      </section>
      <section className="section themebg">
        <h2 className="text-4xl p-20 pb-0 max-sm:p-4 max-sm:pt-10 max-sm:pb-0 max-sm:text-3xl max-sm:text-center">Frequently Asked Questions</h2>
        <div className="row">
            <FAQSection/>
        </div>
      </section>
      <SendQuery video={video2}/>
      <Footer />
    </>
  );
}
