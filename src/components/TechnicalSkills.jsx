import React from "react";

const TechnicalSkills = () => {
  return (
    <div id="skills" className="">
      <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
        Technical Skills
      </h3>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Programming Languages */}
          <div className="p-6 bg-card rounded-xl border border-border shadow-lg">
            <h4 className="text-lg font-semibold mb-4 text-card-foreground">
              Programming Languages
            </h4>
            <div className="flex flex-wrap gap-3">
              {["C", "C++", "HTML/CSS", "JavaScript", "TypeScript", "SQL"].map(
                (skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Frontend Technologies */}
          <div className="p-6 bg-card rounded-xl border border-border shadow-lg">
            <h4 className="text-lg font-semibold mb-4 text-card-foreground">
              Frontend Technologies
            </h4>
            <div className="flex flex-wrap gap-3">
              {["React.js", "SCSS", "Bootstrap", "Redux", "ChartJS"].map(
                (skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Backend & Database */}
          <div className="p-6 bg-card rounded-xl border border-border shadow-lg">
            <h4 className="text-lg font-semibold mb-4 text-card-foreground">
              Backend & Database
            </h4>
            <div className="flex flex-wrap gap-3">
              {[
                "Node.js",
                "Express.js",
                "Socket.io",
                "MySQL",
                "MongoDB",
                "Kafka",
                "Prisma",
                "Firebase",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="p-6 bg-card rounded-xl border border-border shadow-lg">
            <h4 className="text-lg font-semibold mb-4 text-card-foreground">
              Tools & Platforms
            </h4>
            <div className="flex flex-wrap gap-3">
              {[
                "Amazon Web Services (AWS)",
                "Git",
                "GitHub",
                "GitLab",
                "VS Code",
                "Postman",
                "Figma",
                "Axios",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
