import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function ContactMe() {
  const contactInfo = [
    {
      icon: <FaLinkedin className="text-blue-400 text-2xl" />,
      label: "LinkedIn",
      value: "linkedin.com/in/harshi-khandelwal",
      link: "https://linkedin.com/in/harshi-khandelwal-0b61b5316",
    },
   
    {
      icon: <FaPhoneAlt className="text-green-400 text-2xl" />,
      label: "Phone",
      value: "+91 8700571839",
    },
    {
      icon: <BiLogoGmail className="text-red-400 text-2xl" />,
      label: "Gmail",
      value: "harshikhandelwal.12a@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt className="text-yellow-400 text-2xl" />,
      label: "Location",
      value: "New Delhi, India",
    },
  ];

  return (
    <div className="w-full max-w-3xl px-6 py-12 mx-auto text-white text-center space-y-10">
      <h1 className="text-4xl sm:text-5xl font-bold">Get in Touch</h1>

      <div className="space-y-6">
        {contactInfo.map((info, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-base sm:text-lg"
          >
            <div className="flex items-center gap-3">
              {info.icon}
              <span className="font-semibold text-gray-300">{info.label}:</span>
            </div>
            {info.link ? (
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:underline transition"
              >
                {info.value}
              </a>
            ) : (
              <span className="text-gray-400">{info.value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
