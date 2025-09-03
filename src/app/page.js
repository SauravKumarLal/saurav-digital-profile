"use client";

import { Button } from "@/components/ui/button";
import LightRays from "@/components/ui/light-rays";
import WorkExperience from "../components/WorkExperience";
import Education from "@/components/Education";
import TechnicalSkills from "@/components/TechnicalSkills";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contacts from "@/components/Contacts";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen pt-24 px-4 relative">
      {/* Light rays background effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ec4899"
          raysSpeed={0.5}
          lightSpread={0.8}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.05}
          distortion={0.02}
          className="opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <section className="text-center py-20 relative">
          <h1 className="text-6xl font-bold text-foreground mb-6 hover:text-primary transition-colors duration-500 cursor-text">
            Saurav Kumar Lal
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto cursor-text">
            Software Engineer - 1 with expertise in Full Stack Development, and Cloud Computing.
            AWS Certified Solutions Architect and Cloud Practitioner, with a proven track record of building scalable and efficient solutions. Passionate about solving complex problems, driving innovation, and delivering impactful results in dynamic environments.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              className="group relative cursor-pointer overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-lime-300 via-yellow-200 to-pink-400 border-transparent shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button
              variant="outline"
              className="group relative cursor-pointer overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:bg-primary hover:text-primary-foreground hover:border-primary"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1iJk43jKm8YEKLbhXoH2NerqPkOqs4kL_/view",
                  "_blank"
                )
              }
            >
              <span className="relative z-10">Download Resume</span>
            </Button>
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            About Me
          </h2>
          <div className="max-w-6xl mx-auto">
            {/* Work Experience Section */}
            <WorkExperience />

            {/* Education Section */}
            <Education />

            {/* Technical Skills Section */}
            <TechnicalSkills />
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="py-20">
          <Projects />

          {/* View All Projects Link */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="cursor-pointer"
              onClick={() =>
                window.open(
                  "https://github.com/SauravKumarLal",
                  "_blank"
                )
              }
            >
              View Github Profile →
            </Button>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20">
          <Achievements />
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20">
          <Certifications />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <Contacts />
        </section>
      </div>
    </div>
  );
}
