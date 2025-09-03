import React from "react";
import { DraggableCardBody, DraggableCardContainer } from "./ui/draggable-card";

const Certifications = () => {
  return (
    <div className="">
      <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
        Certifications
      </h2>
      <DraggableCardContainer className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-background via-muted/20 to-background">
        <p className="absolute top-1/2 mx-auto max-w-md -translate-y-3/4 text-center text-xl font-semibold text-muted-foreground md:text-2xl">
          Drag the certificates around to explore my achievements
        </p>
        {[
          {
            title: "AWS Certified Solutions Architect - Associate",
            description: "AWS Certified Solutions Architect - Associate",
            className: "absolute top-10 left-[15%] rotate-[-3deg]",
            bgColor: "bg-gradient-to-br from-red-500 to-orange-600",
            link: "https://www.credly.com/badges/2418975b-3e59-4801-9d3f-18b100fc8fc2/",
            credentialId: "8b2f4d642ae044119a95da7ca372fdbd",
          },
          {
            title: "AWS Certified Cloud Practitioner",
            description: "AWS Certified Cloud Practitioner",
            className: "absolute top-32 left-[25%] rotate-[-8deg]",
            bgColor: "bg-gradient-to-br from-orange-400 to-yellow-500",
            link: "https://www.credly.com/badges/6add308d-f199-41b9-8418-a33ad229da96/",
            credentialId: "SEP1FGRJ5J1EQXSP",
          },
          {
            title: "AWS Academy Cloud Foundations",
            description: "AWS Academy",
            className: "absolute top-8 left-[45%] rotate-[6deg]",
            bgColor: "bg-gradient-to-br from-blue-400 to-indigo-500",
            link: "https://www.credly.com/badges/e81a48a8-fa35-4be2-a817-43c47c7139dd/",
            credentialId: "",
          },
          {
            title: "Samsung R&D Institute India",
            description: "Samsung R&D Internship Certificate",
            className: "absolute top-28 left-[60%] rotate-[12deg]",
            bgColor: "bg-gradient-to-br from-green-400 to-emerald-600",
            link: "https://drive.google.com/file/d/1svdJalMo1EILoQKGyM3FYoMDqpNnryyT/view?usp=sharing",
            credentialId: "SRIB_Internship",
          },
          {
            title: "Ramco Systems",
            description: "Ramco Systems Internship Certificate",
            className: "absolute top-16 right-[25%] rotate-[2deg]",
            bgColor: "bg-gradient-to-br from-purple-400 to-pink-500",
            link: "https://drive.google.com/file/d/1VPM15HRm8lRN0uPgzFQ1DSxgllOAf0x5/view?usp=sharing",
            credentialId: "Ramco_Internship",
          },
          {
            title: "Riviera PnM Certification",
            description: "Riviera PnM Certification - Co Curricular Activity",
            className: "absolute top-40 left-[35%] rotate-[-5deg]",
            bgColor: "bg-gradient-to-br from-yellow-400 to-amber-500",
            link: "https://drive.google.com/file/d/16qbld_ac2Wa3-FohrslxNCv1uG2LHTUb/view?usp=sharing",
            credentialId: "Riviera PnM 2024",
          },
          {
            title: "LEO Club, VIT",
            description: "LEO Club Membership Certificate",
            className: "absolute top-12 left-[70%] rotate-[8deg]",
            bgColor: "bg-gradient-to-br from-teal-400 to-blue-600",
            link: "https://drive.google.com/file/d/110K8B12ao4hIRswousJheInbGFt8Kz7-/view?usp=sharing",
            credentialId: "LEO Club Membership",
          },
          {
            title: "Aashman Foundation",
            description: "Aashman Foundation Internship Certificate",
            className: "absolute top-20 left-[80%] rotate-[-2deg]",
            bgColor: "bg-gradient-to-br from-red-400 to-rose-500",
            link: "https://drive.google.com/file/d/1GTZuzdFLUTzA0B4Tii9k1OmNzTk__heB/view?usp=sharing",
            credentialId: "Aashman_Foundation_Internship",
          },
        ].map((cert, index) => (
          <DraggableCardBody key={index} className={cert.className}>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div
                className={`relative h-64 w-64 rounded-lg ${cert.bgColor} p-6 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer`}
              >
                <div className="flex h-full flex-col justify-between">
                  <div className="text-center">
                    <div className="mb-4 h-12 w-12 mx-auto rounded-full bg-white/20 flex items-center justify-center">
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold leading-tight">
                      {cert.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/80">
                      {cert.description}
                    </p>
                    {cert.credentialId && (
                      <p className="mt-2 text-xs text-white/60 font-mono">
                        ID: {cert.credentialId}
                      </p>
                    )}
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
                      Click to Verify
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                {/* External link icon */}
                <div className="absolute top-3 right-3 text-white/60">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </div>
  );
};

export default Certifications;
