// pages/contact.tsx
import React from "react";
import { FaGlobe, FaWhatsapp, FaSkype, FaDiscord, FaTelegram, FaEnvelope } from "react-icons/fa"; // Import Gmail icon

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      
      <table className="w-full border-collapse">
        <tbody>
          {/* Website Row */}
          <tr className="border-b border-gray-300">
            <td className="p-4 text-lg font-semibold">Website:</td>
            <td className="p-4">
              <a
                href="https://thorough-radiance-production.up.railway.app/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline flex items-center"
              >
                <FaGlobe className="mr-2" size={20} /> Visit Our Website
              </a>
            </td>
          </tr>

          {/* WhatsApp Row */}
          <tr className="border-b border-gray-300">
            <td className="p-4 text-lg font-semibold">WhatsApp:</td>
            <td className="p-4">
              <a
                href="https://wa.me/19073598970"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline flex items-center"
              >
                <FaWhatsapp className="mr-2" size={20} /> Chat on WhatsApp
              </a>
            </td>
          </tr>

          {/* Skype Row */}
          <tr className="border-b border-gray-300">
            <td className="p-4 text-lg font-semibold">Skype:</td>
            <td className="p-4">
              <a
                href="https://join.skype.com/invite/Pftcdm7v1utD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline flex items-center"
              >
                <FaSkype className="mr-2" size={20} /> Chat on Skype
              </a>
            </td>
          </tr>

          {/* Discord Row */}
          <tr className="border-b border-gray-300">
            <td className="p-4 text-lg font-semibold">Discord:</td>
            <td className="p-4">
              <a
                href="https://discord.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline flex items-center"
              >
                <FaDiscord className="mr-2" size={20} /> Join us on Discord
              </a>
            </td>
          </tr>

          {/* Telegram Row */}
          <tr className="border-b border-gray-300">
            <td className="p-4 text-lg font-semibold">Telegram:</td>
            <td className="p-4">
              <a
                href="https://t.me/Svaalsbard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:underline flex items-center"
              >
                <FaTelegram className="mr-2" size={20} /> Contact us on Telegram
              </a>
            </td>
          </tr>

          {/* Email Row */}
          <tr>
            <td className="p-4 text-lg font-semibold">Email:</td>
            <td className="p-4">
              <a
                href="mailto:justmcfarlane@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:underline flex items-center"
              >
                <FaEnvelope className="mr-2" size={20} /> Send us an Email
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
