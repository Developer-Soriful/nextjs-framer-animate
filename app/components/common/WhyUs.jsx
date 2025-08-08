import React, { useEffect, useRef } from "react";

const WhyUs = () => {
  // `useRef` hooks to reference the DOM elements for scroll animation
  const whyUsRef = useRef(null);
  const serviceCardsRef = useRef([]);
  const awardsRef = useRef(null);
  const awardRowsRef = useRef([]);

  useEffect(() => {
    // Observer for "Why Us?" section
    const whyUsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (whyUsRef.current) {
      whyUsObserver.observe(whyUsRef.current);
    }

    // Observer for "Awards & Recognition" section
    const awardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (awardsRef.current) {
      awardsObserver.observe(awardsRef.current);
    }

    // Observer for Service Cards
    const serviceCardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.2 }
    );
    serviceCardsRef.current.forEach((card) => {
      if (card) serviceCardsObserver.observe(card);
    });

    // Observer for Award Rows
    const awardRowsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.1 }
    );
    awardRowsRef.current.forEach((row) => {
      if (row) awardRowsObserver.observe(row);
    });

    // Cleanup function for observers
    return () => {
      if (whyUsRef.current) whyUsObserver.unobserve(whyUsRef.current);
      if (awardsRef.current) awardsObserver.unobserve(awardsRef.current);
      serviceCardsRef.current.forEach((card) => {
        if (card) serviceCardsObserver.unobserve(card);
      });
      awardRowsRef.current.forEach((row) => {
        if (row) awardRowsObserver.unobserve(row);
      });
    };
  }, []);

  const awardsData = {
    awards: [
      {
        id: 1,
        title: "Best Interior Design Agency",
        description:
          "Awarded for outstanding innovation in interior design concepts",
        year: 2025,
      },
      {
        id: 2,
        title: "Excellence in Custom Furniture",
        description:
          "Recognized for creating bespoke, high-quality furniture pieces",
        year: 2024,
      },
      {
        id: 3,
        title: "Outstanding Room Makeover",
        description: "Honored for transforming spaces with impeccable style",
        year: 2023,
      },
      {
        id: 4,
        title: "Top Emerging Design Studio",
        description: "Celebrated for redefining modern interior aesthetics",
        year: 2022,
      },
      {
        id: 5,
        title: "Client Choice Award",
        description:
          "Voted for exceptional customer service and design expertise",
        year: 2021,
      },
    ],
  };

  const AwardRow = ({ index, title, description, year }) => {
    // Format the index to be a two-digit number, e.g., 01, 02
    return (
      <div className="flex flex-col sm:flex-row items-start sm:items-center text-[#8d493a] py-1 border-b border-[#8D493A] ">
        {/* For small and medium devices, show index on the left and content on the right */}
        <div className="flex sm:hidden items-center">
          <div className="flex flex-col">
            <h3 className="font-medium text-[20px]">{title}</h3>
            <p className="text-[16px] lg:block text-[#5D382A]">{description}</p>
            <span className="font-medium text-[18px]">{year}</span>
          </div>
        </div>

        {/* For large devices, show three columns: title, description, and year */}
        <div className="hidden sm:flex flex-1 sm:flex-row sm:justify-between lg:py-6 sm:items-center gap-2">
          <div className="flex-1 lg:flex-none">
            <h3 className="font-medium text-[22px]">{title}</h3>
          </div>
          <div className="flex-1 lg:flex-none text-start">
            <p className="text-[22px]">{description}</p>
          </div>
          <div className="flex-none">
            <span className="font-medium text-[22px]">{year}</span>
          </div>
        </div>
      </div>
    );
  };

  const serviceData = {
    services: [
      {
        id: 1,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-wrench"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        ),
        title: "Tailored Designs for Every Space",
        description:
          "We believe every space is unique, and so should be its design. Our bespoke solutions are crafted to reflect your personality, needs, and lifestyle.",
      },
      {
        id: 2,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-magnifying-glass"
          >
            <path d="M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        ),
        title: "Attention to Every Detail",
        description:
          "From the finest furniture finishes to the perfect decor accents, we meticulously focus on every detail to ensure flawless results.",
      },
      {
        id: 3,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-users"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M6 21v-2a4 4 0 0 1 3-3.87" />
          </svg>
        ),
        title: "Seamless Collaboration",
        description:
          "Your vision is our priority. We work closely with you at every step, combining your ideas with our expertise to create spaces you'll love.",
      },
      {
        id: 4,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-sliders"
          >
            <path d="M4 21v-7" />
            <path d="M4 10V3" />
            <path d="M12 21v-7" />
            <path d="M12 10V3" />
            <path d="M20 21v-7" />
            <path d="M20 10V3" />
            <path d="M1 14h6" />
            <path d="M9 14h6" />
            <path d="M17 14h6" />
          </svg>
        ),
        title: "Timeless Elegance",
        description:
          "Our designs go beyond trends to create spaces that stand the test of time, offering a perfect blend of style, comfort, and functionality.",
      },
    ],
  };
  const ServiceCard = ({ icon, title, description }) => {
    return (
      <div className="bg-white w-full h-auto lg:w-[357px] lg:h-[317px] p-6 rounded-lg flex flex-col items-center text-center">
        <div className="bg-[#f2e7da] p-3 rounded-full mb-4">
          {React.cloneElement(icon, { className: "text-[#8D493A] w-6 h-6" })}
        </div>
        <h3 className="text-xl font-semibold text-[#8D493A] mb-2">{title}</h3>
        <p className="text-sm text-[#5D382A]">{description}</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-[60px] pb-[100px] lg:pb-[200px] font-sans">
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 1s ease-in-out forwards;
          }
        `}
      </style>
      <div
        ref={whyUsRef}
        className="flex justify-center items-center flex-col gap-4 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <h1 className="flex justify-start items-center gap-1 text-[12px] lg:text-[16px]">
          <span className="w-[6px] h-[6px] bg-[#8d493a] rounded-full block mb-2"></span>{" "}
          Why Us?
        </h1>
        <h1 className="text-[38px] lg:text-[64px] text-center leading-none tracking-tight m-0 p-0 break-words ">
          Elevate Your Space with <br /> Expertise & Elegance{" "}
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:-mx-4">
          {serviceData.services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (serviceCardsRef.current[index] = el)}
              style={{ animationDelay: `${index * 100}ms` }}
              className="opacity-0 transition-opacity duration-1000 ease-in-out"
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
      <div
        ref={awardsRef}
        className="flex justify-start items-start flex-col gap-4 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <h1 className="flex justify-start items-center gap-1 text-[12px] lg:text-[16px]">
          <span className="w-[6px] h-[6px] bg-[#8d493a] rounded-full block mb-2"></span>{" "}
          Awards & Recognition
        </h1>
        <h1 className="text-[38px] lg:text-[64px] text-start leading-none tracking-tight m-0 p-0 break-words lg:w-[650px] ">
          Our Achievements: Celebrating Excellence in Design
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#F8EDE3]">
        <div className="w-full bg-transparent rounded-lg">
          {awardsData.awards.map((award, index) => (
            <div
              key={award.id}
              ref={(el) => (awardRowsRef.current[index] = el)}
              style={{ animationDelay: `${index * 100}ms` }}
              className="opacity-0 transition-opacity duration-1000 ease-in-out"
            >
              <AwardRow
                index={index}
                title={award.title}
                description={award.description}
                year={award.year}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
