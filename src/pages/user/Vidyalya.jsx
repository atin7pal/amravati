import React from "react";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import vidyalya from "../../assets/vidyalya.webp";
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
        <div className="row relative">
          <img
            src={vidyalya}
            className="h-[45vh] w-full object-cover"
            alt="vidyalya"
          />
          <div className="w-full h-full bgcolorfont absolute top-0 left-0 bg-[#ece4d9]/70 flex justify-center items-center p-20 flex-col gap-4">
            <h2 className="font-semibold text-4xl w-[80%] text-center">
              WELCOME TO AMRAVATI VIDYALYA, BADDI
            </h2>
            <h2 className="text-xl font-semibold">
              where every student steps through our gates with curiosity and
              steps out with confidence.
            </h2>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="row">
          <div className="flex flex-col justify-center items-start text-start gap-8">
            <p className="accentfont text-lg">
              <span className="font-bold">Amravati Vidyalaya, Baddi</span>,
              established in 2007, is located in the peaceful surroundings of{" "}
              <span className="font-bold">Baddi, Himachal Pradesh</span>. The
              school offers a safe, encouraging space with ventilated classrooms
              and a well-maintained playground. Managed by the Amravati Welfare
              Society, under the leadership of{" "}
              <span className="font-bold">Mr. Hargobind Goyal</span>, it is
              affiliated to the <span className="font-bold">CBSE</span>,
              offering classes from Nursery to Class 10. With a commitment to
              NEP 2020 goals, the school fosters critical thinking, life skills,
              and values-driven education. Our students consistently deliver
              outstanding results,
              <span className="font-bold">
                {" "}
                including our first IIT admission
              </span>
              . These are milestones of excellence supported by strong academics
              and moral grounding. At Amravati Vidyalaya, Baddi, we don’t just
              impart education —{" "}
              <span className="font-bold">
                {" "}
                we shape dreams, ignite young minds, and prepare future leaders
                for a brighter tomorrow{" "}
              </span>
              .
            </p>

            <div className="flex justify-start items-center gap-6 max-sm:flex-col max-sm:items-start">
              <img
                src={principal}
                className="h-[200px] w-[200px] object-cover"
                alt=""
              />
              <p>
                Under the dynamic and visionary leadership of our Principal,{" "}
                <span className="font-bold">Mrs. Suman Sharma</span>, our
                students are nurtured in an environment that fosters academic
                excellence, personal growth, and social responsibility. With a
                strong emphasis on holistic development, she inspires both
                faculty and students to pursue innovation, embrace diversity,
                and uphold the highest standards of integrity. Her guidance
                ensures that every learner is equipped not only with knowledge
                and skills but also with the values and mindset needed to thrive
                as compassionate, future-ready global citizens.
              </p>
            </div>

            <h2 className="text-2xl font-semibold">
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
              <span className="font-bold">Head Boy/Girl and Captains</span>,
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

            <p className="text-lg accentfont">
              Our mission is beyond ranks. We build character, creativity,
              compassion—through supportive teachers and immersive experiences
              in sports, arts, and leadership.
            </p>
            <p className="text-lg accentfont font-bold">
              Join our journey — where learning is joyful, dreams find wings,
              and every student is prepared to shine in a changing world!
            </p>

            {/* Timeline Section */}
            <h2 className="text-2xl font-semibold mt-10">
              Our Journey: From 2007 Till Today
            </h2>
            <div className="relative border-l-1 border-primary ml-4 mt-6 space-y-8">
              {milestones.map((event, index) => (
                <div key={index} className="ml-6 relative">
                  <div className="absolute -left-9 top-1.5 w-6 h-6 bg-primary rounded-full border-4 border-white themebg shadow" />
                  <h3 className="text-xl font-bold">{event.year}</h3>
                  <h4 className="text-lg font-semibold">{event.title}</h4>
                  <p className="accentfont">{event.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold">Vision Forward</h3>
            <ul className="list-disc pl-6 accentfont text-lg space-y-2">
              <li>
                Sustaining paths to premier institutions like IIT and other top
                universities.
              </li>
              <li>
                Ensuring over-the-top board exam results, year after year.
              </li>
              <li>
                Broadening student potential—academic, creative, physical, and
                ethical.
              </li>
              <li>
                Inspiring every young mind to{" "}
                <strong>dream, achieve, and lead</strong>.
              </li>
            </ul>

            <p className="accentfont text-lg font-bold">
              <span className="font-bold">
                In summary: Since 2007, <strong>Amravati Vidyalaya</strong> has
                transformed from a humble start into a beacon of academic
                achievement and holistic development. From our first IIT
                admission to stellar board results and rich extracurricular
                opportunities, we continue to evolve—committed to preparing
                students for a promising tomorrow.
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="section themebg">
        <div className="px-20 w-full pb-20 max-sm:px-4 max-sm:pb-10">
          <CarouselSlides images={images} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Vidyalya;
