import React from "react";

const WorkExperience = () => {
  return (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
        Professional Experience
      </h3>
      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Ramco Systems */}
        <div className="group p-6 bg-card rounded-xl border border-border shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div className="flex-1">
              <h4 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                Software Engineer 1
              </h4>
              <p className="text-lg text-primary font-semibold mb-2">
                Ramco Systems
              </p>
              <p className="text-md text-muted-foreground mb-3">
                Chennai, India | Feb 2025 – Present
              </p>
            </div>
          </div>
          <div className="mb-4">
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                • Worked on rTask, Ramco’s in-house project management and
                ticketing tool used company-wide as an alternative to Jira.
              </li>
              <li>
                • Developed and improved internal rTask features to streamline
                ticket resolution, task tracking, and cross-team collaboration.
              </li>
              <li>
                • Contributed to the development of a new external version of
                rTask, designed for enterprise customers with a refreshed UI and
                enhanced functionalities.
              </li>
              <li>
                • Collaborated with the core product team on designing scalable
                modules and improving user experience for the rTask platform.
              </li>
            </ul>
          </div>
        </div>

        {/* Samsung R&D Institute */}
        <div className="group p-6 bg-card rounded-xl border border-border shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div className="flex-1">
              <h4 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                Research Intern
              </h4>
              <p className="text-lg text-primary font-semibold mb-2">
                Samsung R&D Institute
              </p>
              <p className="text-md text-muted-foreground mb-3">
                Dec 2023 – Apr 2024
              </p>
            </div>
          </div>
          <div className="mb-4">
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                • Developed and integrated GAN-based models that improved video
                generation efficiency by 20%, enabling the creation of short
                reaction videos within 5 seconds for chat applications.
              </li>
              <li>
                • Collaborated with a 3-member remote team, utilizing Google
                Colab and Open Sora Plan to implement backend solutions,
                reducing the processing time for video formats.
              </li>
            </ul>
          </div>
        </div>

        {/* Clikin Tech */}
        <div className="group p-6 bg-card rounded-xl border border-border shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div className="flex-1">
              <h4 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                SDE Intern
              </h4>
              <p className="text-lg text-primary font-semibold mb-2">
                Clikin Tech
              </p>
              <p className="text-md text-muted-foreground mb-3">
                Oct 2023 – Nov 2023
              </p>
            </div>
          </div>
          <div className="mb-4">
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                • Improved the website’s front-end performance and functionality
                by implementing lazy loading and collaborating with the team to
                optimize solutions.
              </li>
              <li>
                • Developed a Chrome extension using JavaScript and Chrome
                Extension API to extract business details from JustDial.com,
                with an integrated Excel export feature for efficient data
                access and analysis.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
