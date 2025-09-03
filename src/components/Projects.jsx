import React from "react";
import { Button } from "./ui/button";

const Projects = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "CleanUpX - AI-Powered Waste Management App",
            description:
              "A waste management platform where users can report waste, verify it via AI, and earn tokens. Features include Gemini, and Google Maps integration, Web3 login, and an impact dashboard tracking waste metrics and CO2 offset. Build a cleaner future!",
            tech: "Next.js, TypeScript, TailwindCSS, Neon DB, Prisma",
            link: "https://cleanupx.vercel.app/",
          },
          {
            title: "RealtyVue - A Real Estate Application",
            description:
              "An innovative real estate platform designed to streamline property discovery and communication. With interactive map pinning and real-time chat, it bridges the gap between buyers and sellers, creating a seamless experience.",
            tech: "React, Node.js, MongoDB, Express.js, Socket.io, Cloudinary",
            link: "https://github.com/SauravKumarLal/RealtyVue",
          },
          {
            title: "KBC (Kaun Banega Crorepati) Web App + Chat Application",
            description:
              'An engaging web-based quiz game that mimics the popular game show "Kaun Banega Crorepati". With a dynamic UI and real-time feedback, it delivers an immersive experience for users testing their knowledge.',
            tech: "React, Node.js, MongoDB, Express.js, Socket.io, Firebase",
            link: "https://github.com/SauravKumarLal/MERN_ChatFire",
          },
        ].map((project, i) => (
          <div
            key={i}
            className="group relative p-6 bg-card rounded-xl shadow-lg border border-border hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 overflow-hidden"
          >
            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-600 via-lime-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-lime-300 via-yellow-200 to-pink-400 opacity-0 group-hover:opacity-100 blur-sm -z-10 transition-opacity duration-500" />

            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed group-hover:text-card-foreground/80 transition-colors duration-300">
                {project.description}
              </p>
              <div className="mb-4">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
                  {project.tech}
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 cursor-pointer"
                onClick={() => window.open(project.link, "_blank")}
              >
                View Project →
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
