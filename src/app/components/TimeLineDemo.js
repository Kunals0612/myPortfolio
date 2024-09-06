import Image from "next/image";
import React from "react";
import { Timeline } from "../components/ui/TimeLine";
import CyberSec from "../../../public/cyber.png";
import Agri from "../../../public/Agri.png";
import CRM from "../../../public/CRM.png";
export function TimelineDemo() {
  const data = [
    {
      title: "ThreadCast",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            🔮 Predictive Analytics: Forecast potential cyber attacks in advance
            using advanced machine learning models.
            <br />
            <br />
            🛡️ Enhanced Cybersecurity:Proactively safeguard systems by
            predicting and mitigating risks before they materialize.
            <br />
            <br />
            🧠 AI-Driven Insights: Leverage AI to analyze vast amounts of data
            and identify patterns indicative of future threats.
            <br />
            <br />
            🌐 Web Scraping: Utilize web scraping techniques to gather real-time
            threat intelligence from multiple online sources.
            <br />
            <br />
            💾 MySQL Database: Store and manage threat data securely in a robust
            MySQL database for efficient retrieval and analysis.
            <br />
            <br />
            📊 Data Visualization: Visualize predictive data and trends using
            Tableau for clear and actionable insights.
            <br />
            <br />
            🚀 Hackathon Success: Developed and showcased this project during
            the prestigious Barclays Hack-o-Hire competition.
            <br />
            <br />
            🔍 Early Warning System: Provide organizations with an early warning
            system to detect and respond to emerging cyber threats.
            <br />
            <br />
            💻 Tech Stack Integration:Integrate machine learning, databases, and
            visualization tools for comprehensive threat analysis.
          </p>
          {/* <div className="">
            <Image
              src={CyberSec}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div> */}
        </div>
      ),
    },
    {
      title: "AgroSense",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            🌾 Smart Agriculture: Predict the best fertilizers for crops based
            on real-time data, revolutionizing farming practices.
            <br />
            <br />
            📡 IoT Integration: Utilize IoT sensors to collect and analyze soil
            quality and environmental data directly from the field.
            <br />
            <br />
            🤖 Machine Learning: Employ machine learning models to accurately
            recommend fertilizers tailored to specific soil conditions.
            <br />
            <br />
            🚜 Farmer Assistance: Empower farmers with data-driven decisions,
            enhancing crop yield and reducing waste.
            <br />
            <br />
            📱 Telegram Bot: Integrated a Telegram bot to instantly notify
            farmers with real-time fertilizer recommendations.
            <br />
            <br />
            🌍 Next.js Website: Developed a user-friendly website using Next.js
            for interactions and easy access to recommendations.
            <br />
            <br />
            🌱 Sustainable Farming: Promote sustainable agriculture by
            optimizing fertilizer usage based on precise data analysis.
            <br />
            <br />
            🔔 Real-Time Alerts: Ensure timely alerts and recommendations,
            helping farmers take immediate action for crop health.
            <br />
            <br />
            💡 Innovation in AgTech: Combine IoT, ML, and web technologies to
            create a holistic solution for modern farming challenges.
            <br />
            <br />
            🏆 Advanced Agriculture: AgroSense stands as a cutting-edge tool for
            the future of agriculture, integrating technology to boost
            productivity and sustainability.
          </p>

          {/* <div className="">
            <Image
              src={Agri}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div> */}
        </div>
      ),
    },
    {
      title: "Linkify",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            🔗 Project Linkify: A Customer Relationship Management (CRM) system
            designed to streamline client interactions and data management.
            <br />
            <br />
            🚀 Built with Next.js: Leveraging Next.js for a fast and efficient
            backend, ensuring smooth performance and scalability.
            <br />
            <br />
            💻 JavaScript Backend: The backend is powered by JavaScript,
            enabling dynamic handling of CRM functionalities.
            <br />
            <br />
            📊 Database Integration: Seamlessly integrates with robust databases
            to securely manage customer data and transactions.
            <br />
            <br />
            🔍 Enhanced CRM: Linkify simplifies CRM tasks, providing a
            comprehensive platform for managing customer relationships
            effectively.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
