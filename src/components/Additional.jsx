import React from "react";

const Additional = () => {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
        Additional Projects & Simulations
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[
          {
            title: "",
            url: "",
            desc: "",
            category: "",
            tech: "",
          },
        ].map((project, i) => (
          <div
            key={i}
            className="group relative p-4 bg-card rounded-xl border border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden"
          >
            {/* Subtle hover glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium transition-all duration-300 group-hover:scale-105 ${
                    project.category === "ML/AI"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50"
                      : project.category === "IoT"
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 group-hover:bg-green-200 dark:group-hover:bg-green-800/50"
                      : project.category === "Web Dev"
                      ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50"
                      : project.category === "Computer Vision"
                      ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 group-hover:bg-orange-200 dark:group-hover:bg-orange-800/50"
                      : "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-800/50"
                  }`}
                >
                  {project.category}
                </span>
              </div>
              <h4 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h4>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed group-hover:text-card-foreground/80 transition-colors duration-300">
                {project.desc}
              </p>
              <div className="mb-3">
                <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded group-hover:bg-primary/20 transition-colors duration-300">
                  {project.tech}
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-xs group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                onClick={() => window.open(project.url, "_blank")}
              >
                {project.url.includes("tinkercad")
                  ? "View Simulation"
                  : "View Code"}{" "}
                →
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Additional;
