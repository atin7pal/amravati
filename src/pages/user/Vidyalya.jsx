import React from "react";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import vidyalya from "../../assets/school/vidyalya.jpeg";
import schoolactual from "../../assets/vidyalya.webp";
import principal from "../../assets/principal.jpeg";
import CarouselSlides from "../../components/user/CartouselSlides";
import school1 from "../../assets/school/school1.jpeg";
import school2 from "../../assets/school/school10.jpeg";
import school3 from "../../assets/school/school3.jpeg";
import school4 from "../../assets/school/school4.jpeg";
import school5 from "../../assets/school/school5.jpeg";
import school6 from "../../assets/school/school6.jpeg";
import school7 from "../../assets/school/school7.jpeg";
import school8 from "../../assets/school/school8.jpeg";

const milestones = [
  {
    year: "2007",
    title: "Our Journey Begins",
    description:
      "Founded in 2007, Amravati Vidyalaya embarked on a bold vision to nurture young minds and prepare them for a bright future. From the peaceful surroundings of Baddi, Himachal Pradesh, we began with safe classrooms and a well-maintained playground.",
  },
  {
    year: "2008–2010",
    title: "Academic Ambitions Realized",
    description:
      "One of our early students secured admission into IIT — a proud moment that reflected our commitment to excellence and inspired future batches.",
  },
  {
    year: "2010–2015",
    title: "Board Results & Growth",
    description:
      "With growing averages and more top achievers each year, our consistent board exam success became a hallmark of our academic strength.",
  },
  {
    year: "2015–2020",
    title: "Innovating & Holistic Development",
    description:
      "We focused on holistic development through creativity, sportsmanship, and values. We implemented pedagogical best practices like active learning and personalized teaching strategies.",
  },
  {
    year: "2020–Today",
    title: "Vision Forward",
    description:
      "As we embrace the NEP 2020, we aim for premier university pathways, well-rounded student growth, and future-focused innovation in education.",
  },
];

const highlights = [
  "Sustaining paths to premier institutions like IIT and other top universities.",
  "Ensuring over-the-top board exam results, year after year.",
  "Broadening student potential—academic, creative, physical, and ethical.",
  "Inspiring every young mind to dream, achieve, and lead",
];

const Vidyalya = () => {
  const images = [
    school1,
    school2,
    school3,
    school4,
    school5,
    school6,
    school7,
    school8,
  ];

  return (
    <>
      <Navbar />
      <section className="section themebg">
        <div className="row relative ">
          <img
            src={vidyalya}
            className="h-[45vh] max-sm:h-[50vh] w-full object-contain"
            alt="vidyalya"
          />
          <div className="w-full h-full bgcolorfont absolute top-0 left-0 bg-[#ece4d9]/70 flex justify-center items-center p-20 flex-col gap-4 max-sm:p-4">
            <h2 className=" text-4xl max-sm:text-3xl w-[80%] text-center max-sm:w-full font-semibold">
              WELCOME TO AMRAVATI VIDYALYA, BADDI
            </h2>
            <h2 className="text-xl  accentfont text-center max-sm:text-lg">
              WHERE EVERY STUDENT STEPS THROUGH OUR GATES WITH CURIOSITY AND
              STEPS OUT WITH CONFIDENCE.
            </h2>
          </div>
        </div>
      </section>

      <section className="section max-sm:pb-10 bgcolorfont">
        <div className="row">
          <div className="flex flex-col justify-center items-start text-start gap-8">
            <div className="flex gap-6 max-sm:flex-col">
              <div className="w-full min-h-[350px] flex justify-center items-center max-sm:h-full flex-col">
                <p className="accentfont text-lg text-pretty">
                  Amravati Vidyalaya, Baddi, established in 2007, is located in
                  the peaceful surroundings of Baddi, Himachal Pradesh. The
                  school offers a safe, encouraging space with ventilated
                  classrooms and a well-maintained playground. Managed by the
                  Amravati Welfare Society, under the leadership of Mr.
                  Hargobind Goyal, it is affiliated to the CBSE, offering
                  classes from Nursery to Class 10. With a commitment to NEP
                  2020 goals, the school fosters critical thinking, life skills,
                  and values-driven education. 
                </p>
                <p className="accentfont text-lg text-pretty mt-4">Our students consistently deliver
                  outstanding results, including our first IIT admission. These
                  are milestones of excellence supported by strong academics and
                  moral grounding. At Amravati Vidyalaya, Baddi, we don’t just
                  impart education — we shape dreams, ignite young minds, and
                  prepare future leaders for a brighter tomorrow .</p>
              </div>
              <div className="w-full">
                <img
                  src={schoolactual}
                  className="w-full h-[350px] object-cover"
                  alt=""
                />
              </div>
            </div>

            <div className="flex justify-start items-center gap-6 max-sm:flex-col max-sm:items-start">
              <img
                src={principal}
                className="h-[200px] w-[200px] object-cover"
                alt=""
              />
              <p className="accentfont">
                Under the dynamic and visionary leadership of our Principal,{" "}
                Mrs. Suman Sharma, our students are nurtured in an environment
                that fosters academic excellence, personal growth, and social
                responsibility. With a strong emphasis on holistic development,
                she inspires both faculty and students to pursue innovation,
                embrace diversity, and uphold the highest standards of
                integrity. Her guidance ensures that every learner is equipped
                not only with knowledge and skills but also with the values and
                mindset needed to thrive as compassionate, future-ready global
                citizens.
              </p>
            </div>

            <h2 className="text-3xl">
              Amravati Vidyalaya, Baddi — Nurturing Young Minds, Shaping Bright
              Futures
            </h2>

            <p className="text-lg accentfont">
              Our teachers adopt active-learning methods: visual aids, music,
              discussions, and sessions in dance, yoga, aerobics, and more.
              Students engage in rallies, skits, and hands-on activities,
              learning beyond textbooks.
            </p>

            <p className="text-lg accentfont">
              Leadership is cultivated through democratic elections for{" "}
              Head Boy/Girl and Captains,
              encouraging confidence and civic awareness.
            </p>

            <div className="space-y-2">
              <h2 className="text-lg font-bold">
                Where Dreams Take Flight and Futures Are Shaped Right!
              </h2>
              <ul className="accentfont list-disc pl-5">
                <li className="text-lg">
                  Since 2007, we’ve nurtured curiosity and prepared students to
                  excel across all spheres.
                </li>
                <li className="text-lg">
                  We embrace innovative teaching, a warm atmosphere, and
                  enriching activities.
                </li>
                <li className="text-lg">
                  From IIT to global careers, our alumni reflect our academic
                  and moral strength.
                </li>
              </ul>
            </div>

            {/* Timeline Section */}
            <h2 className="text-5xl max-sm:text-3xl  mt-10 max-sm:mt-4 max-sm:w-full max-sm:text-center">Our Journey</h2>
            <div className="relative border-l-1 border-primary ml-4 mt-6 space-y-4 max-sm:mt-2">
              {milestones.map((event, index) => (
                <div key={index} className="ml-6 relative themebg p-4">
                  <div className="absolute -left-9 top-1.5 w-6 h-6 bg-primary rounded-full border-4 border-white themebg shadow" />
                  <h3 className="text-xl font-bold">{event.year}</h3>
                  <h4 className="text-lg ">{event.title}</h4>
                  <p className="accentfont">{event.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-5xl max-sm:text-3xl py-10 max-sm:py-4 max-sm:text-center max-sm:w-full">Vision Forward</h3>
            <div className="flex gap-6 max-sm:flex-col max-sm:gap-8">
              <ul className="grid w-full grid-cols-2 accentfont text-lg gap-4">
                {highlights.map((item, index) => (
                  <li
                    className="themebg p-4 flex flex-col justify-center items-start"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="w-full flex justify-center items-center min-h-[300px]">
                <p className="accentfont text-lg ">
                  <span className="accentfont">
                    In summary: Since 2007, Amravati Vidyalaya has transformed
                    from a humble start into a beacon of academic achievement
                    and holistic development. From our first IIT admission to
                    stellar board results and rich extracurricular opportunities
                    , we continue to evolve—committed to preparing students for
                    a promising tomorrow.{" "}
                  </span>

                  <span className="accentfont">
                    Our mission is beyond ranks. We build character, creativity,
                    compassion—through supportive teachers and immersive
                    experiences in sports, arts, and leadership.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="p-20 py-10 w-full max-sm:px-4 max-sm:py-4">
          <CarouselSlides images={images} />
        </div>
      </section>
      <section className="section max-sm:pb-10 max-sm:text-center">
        <div className="row">
          <p className="text-xl accentfont">
            Join our journey — where learning is joyful, dreams find wings, and
            every student is prepared to shine in a changing world!
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Vidyalya;
