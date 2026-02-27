import React from "react";
import { useNavigate } from "react-router-dom";
import { FaShieldAlt, FaUsers, FaChartLine } from "react-icons/fa";

const FeatureCards = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "SafeVoice",
      description:
        "Anonymous reporting system that ensures student safety and confidentiality.",
      icon: <FaShieldAlt size={20} />,
      route: "/safevoice",
    },
    {
      title: "SkillConnect",
      description:
        "Find the perfect teammate for projects based on skills and interests.",
      icon: <FaUsers size={20} />,
      route: "/skillconnect",
    },
    {
      title: "EventPulse",
      description:
        "Track participation trends and gain insights into campus events.",
      icon: <FaChartLine size={20} />,
      route: "/eventpulse",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-12 mt-24">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">
          Powerful Campus Tools
        </h2>
        <p className="text-gray-500">
          Smart solutions designed for modern campuses
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            onClick={() => navigate(feature.route)}
            className="
              cursor-pointer
              bg-white
              p-8
              rounded-3xl
              shadow-md
              border border-gray-100
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-200
            "
          >
            <div
              className="
                bg-blue-100
                w-12 h-12
                flex items-center justify-center
                rounded-full
                text-blue-600
                mb-6
              "
            >
              {feature.icon}
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {feature.title}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;