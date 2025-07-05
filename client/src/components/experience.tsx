import { CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Experience() {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [timelineRef, timelineVisible] = useScrollAnimation();
  const experiences = [
    {
      title: "Software Engineer",
      company: "Foodhub, Chennai",
      period: "Sep 2022 – Present",
      status: "Current",
      statusColor: "green",
      link: "https://foodhubcareers.com/",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      achievements: [
        "Developed & maintained mobile apps serving over 1M+ users",
        "Built reusable components and scalable Redux state architecture",
        "Automated app creation tool for internal client onboarding",
        "Integrated Firebase, MoEngage, push notifications",
        "Setup Jenkins + Fastlane for CI/CD pipeline automation",
        "Collaborated closely with UI/UX teams",
      ],
    },
    {
      title: "Junior Software Developer",
      company: "Sunrise Technologies, Chennai",
      period: "Oct 2021 – Aug 2022",
      status: "Previous",
      statusColor: "blue",
      link: "https://www.sunrisetechs.com/",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      achievements: [
        "Worked on mobile apps in crypto, sports, and social domains",
        "Integrated Web3, Moralis, MetaMask, and TrustWallet",
        "Used Agora for real-time communication",
        "Integrated Firebase, Stripe, REST APIs",
        "Managed front & back-end logic using Node.js and Express",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 fade-in ${
            titleVisible ? "animate" : ""
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional journey building scalable mobile and web applications
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index === experiences.length - 1 ? "mb-0" : ""
              } ${
                index % 2 === 0 ? "slide-in-left" : "slide-in-right"
              } stagger-delay-${index + 1} ${timelineVisible ? "animate" : ""}`}
            >
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-lg"></div>

              <div
                className={`ml-16 md:ml-0 ${
                  index % 2 === 0
                    ? "md:w-1/2 md:pr-8"
                    : "md:w-1/2 md:ml-auto md:pl-8"
                }`}
              >
                <img
                  src={exp.image}
                  alt={`${exp.company} office environment`}
                  className="rounded-xl shadow-lg mb-4 w-full h-48 object-cover"
                />

                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        exp.statusColor === "green"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {exp.status}
                    </span>
                    <span className="text-gray-500 text-sm">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {exp.title}
                  </h3>
                  <a
                    className="text-secondary font-medium mb-4"
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {exp.company}
                  </a>

                  <ul className="space-y-2 text-gray-600">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <CheckCircle
                          className={`w-4 h-4 mr-2 mt-1 flex-shrink-0 ${
                            exp.statusColor === "green"
                              ? "text-green-500"
                              : "text-blue-500"
                          }`}
                        />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
