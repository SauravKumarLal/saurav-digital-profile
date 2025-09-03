import React from "react";

const Education = () => {
  return (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
        Education
      </h3>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* VIT */}
        <div className="group p-6 bg-card rounded-xl border border-border shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden">
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h4 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                Vellore Institute of Technology, Vellore
              </h4>
              <p className="text-lg text-muted-foreground mb-2 group-hover:text-card-foreground/80 transition-colors duration-300">
                Bachelor of Technology in Computer Science (Minors in
                Information Security)
              </p>
              <p className="text-sm text-muted-foreground group-hover:text-card-foreground/70 transition-colors duration-300">
                Tamil Nadu, India
              </p>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <span className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 inline-block">
                9.27 CGPA
              </span>
              <p className="text-sm text-muted-foreground group-hover:text-card-foreground/70 transition-colors duration-300">
                Sept. 2021 - July 2025
              </p>
            </div>
          </div>
        </div>

        {/* HSC */}
        <div className="group p-6 bg-card rounded-xl border border-border shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h4 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                Allen Career Institute, Kota
              </h4>
              <p className="text-lg text-muted-foreground mb-2 group-hover:text-card-foreground/80 transition-colors duration-300">
                12th - CBSE
              </p>
              <p className="text-sm text-muted-foreground group-hover:text-card-foreground/70 transition-colors duration-300">
                Rajasthan, India
              </p>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <span className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 inline-block">
                90.4%
              </span>
              <p className="text-sm text-muted-foreground group-hover:text-card-foreground/70 transition-colors duration-300">
                May 2018 - Mar. 2020
              </p>
            </div>
          </div>
        </div>

        {/* SSC */}
        <div className="group p-6 bg-card rounded-xl border border-border shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h4 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                St. Joseph's Public School, Dalsinghsarai
              </h4>
              <p className="text-lg text-muted-foreground mb-2 group-hover:text-card-foreground/80 transition-colors duration-300">
                10th - CBSE
              </p>
              <p className="text-sm text-muted-foreground group-hover:text-card-foreground/70 transition-colors duration-300">
                Bihar, India
              </p>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <span className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 inline-block">
                94.8%
              </span>
              <p className="text-sm text-muted-foreground group-hover:text-card-foreground/70 transition-colors duration-300">
                Jun. 2008 - Mar. 2018
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
