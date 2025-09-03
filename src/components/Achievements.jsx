import React from "react";
import { Button } from "./ui/button";
import {
  IconSchool,
  IconCertificate,
  IconTrophy,
  IconStar,
  IconUsers,
} from "@tabler/icons-react";

const Achievements = () => {
  return (
    <div className="">
      <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
        Notable Achievements
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20"></div>

          <div className="space-y-8">
            {/* Academic Excellence */}
            <div className="relative flex items-start">
              <div className="absolute left-2 w-4 h-4 bg-primary rounded-full border-2 border-background"></div>
              <div className="ml-12 p-6 bg-card rounded-lg border shadow-sm w-full max-w-4xl hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <IconSchool className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-card-foreground">
                    Academic Excellence
                  </h3>
                  <span className="text-sm bg-gradient-to-r from-lime-300 via-yellow-200 to-pink-400 text-gray-900 px-3 py-1 rounded-full shadow-md border border-transparent">
                    9.27 CGPA
                  </span>
                </div>
                <p className="text-muted-foreground mb-3">
                  Ranked in the top 25 of a batch of 313 students at VIT
                  Vellore, pursuing Computer Science with Minors in Information
                  Security.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="relative flex items-start">
              <div className="absolute left-2 w-4 h-4 bg-primary/60 rounded-full border-2 border-background"></div>
              <div className="ml-12 p-6 bg-card rounded-lg border shadow-sm w-full max-w-4xl">
                <div className="flex items-center gap-3 mb-3">
                  <IconCertificate className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold text-card-foreground">
                    Certifications
                  </h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>
                    •{" "}
                    <strong>
                      AWS Certified Solutions Architect - Associate
                    </strong>{" "}
                    <Button
                      variant="link"
                      size="sm"
                      className="text-primary underline cursor-pointer"
                      onClick={() =>
                        window.open(
                          "https://www.credly.com/badges/2418975b-3e59-4801-9d3f-18b100fc8fc2/",
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    >
                      View Certificate →
                    </Button>
                  </li>
                  <li>
                    • <strong>AWS Certified Cloud Practitioner</strong>{" "}
                    <Button
                      variant="link"
                      size="sm"
                      className="text-primary underline cursor-pointer"
                      onClick={() =>
                        window.open(
                          "https://www.credly.com/badges/6add308d-f199-41b9-8418-a33ad229da96/",
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    >
                      View Certificate →
                    </Button>
                  </li>
                </ul>
              </div>
            </div>

            {/* DEVSOC’23 Hackathon */}
            <div className="relative flex items-start">
              <div className="absolute left-2 w-4 h-4 bg-primary/60 rounded-full border-2 border-background"></div>
              <div className="ml-12 p-6 bg-card rounded-lg border shadow-sm w-full max-w-4xl">
                <div className="flex items-center gap-3 mb-3">
                  <IconTrophy className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold text-card-foreground">
                    DEVSOC’23 Hackathon
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Secured <strong>2nd Place</strong> at the 50-hour DEVSOC’23
                  hackathon conducted by Codechef-VIT among 108 teams, 450+
                  participants, and 1300+ registrations.
                </p>
              </div>
            </div>

            {/* Other Achievements */}
            <div className="relative flex items-start">
              <div className="absolute left-2 w-4 h-4 bg-primary/60 rounded-full border-2 border-background"></div>
              <div className="ml-12 p-6 bg-card rounded-lg border shadow-sm w-full max-w-4xl">
                <div className="flex items-center gap-3 mb-3">
                  <IconStar className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold text-card-foreground">
                    Other Achievements
                  </h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>
                    • Achieved AIR-7 in the FNAT Campus Challenge by
                    Firstnaukri.com.
                  </li>
                  <li>• Solved 500+ DSA problems on Leetcode and GFG.</li>
                  <li>• Finalist in Yantra Hack at VIT Vellore.</li>
                </ul>
              </div>
            </div>

            {/* Leadership and Extracurricular */}
            <div className="relative flex items-start">
              <div className="absolute left-2 w-4 h-4 bg-primary/60 rounded-full border-2 border-background"></div>
              <div className="ml-12 p-6 bg-card rounded-lg border shadow-sm w-full max-w-4xl">
                <div className="flex items-center gap-3 mb-3">
                  <IconUsers className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold text-card-foreground">
                    Leadership and Extracurricular
                  </h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  <strong>Design Lead</strong> at LEO Club, VIT Vellore (Feb
                  2023 – Oct 2023)
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>
                    • Led a team of 20+ designers for on-campus and off-campus
                    events for 15+ events, managing and executing design
                    strategies.
                  </li>
                  <li>
                    • Contributed to the club winning Best Outreach Club at
                    RIVIERA’23 through cohesive visuals and team collaboration.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
