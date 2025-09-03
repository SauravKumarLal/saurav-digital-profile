import React, { useState } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
  IconDownload,
  IconUser,
  IconChevronDown,
  IconChevronUp,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { Button } from "./ui/button";
import { FloatingDock } from "./ui/floating-dock";

const Contacts = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
        Get In Touch
      </h2>
      <div className="max-w-6xl mx-auto">
        <p className="text-lg text-muted-foreground text-center leading-relaxed mb-12">
          Always exploring new ideas and tackling challenges. Let’s connect if
          you’re working on something exciting!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <IconMail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Email</h4>
                  <p className="text-muted-foreground">sauravkrlal@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <IconPhone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Phone</h4>
                  <p className="text-muted-foreground">+91-62028-30461</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <IconUser className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">
                    Location
                  </h4>
                  <p className="text-muted-foreground">Chennai, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-foreground">
                Send a Message
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsFormOpen(!isFormOpen)}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {isFormOpen ? "Hide Form" : "Show Form"}
                {isFormOpen ? (
                  <IconChevronUp className="h-4 w-4" />
                ) : (
                  <IconChevronDown className="h-4 w-4" />
                )}
              </Button>
            </div>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isFormOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <form
                action="https://formspree.io/f/xpzgojzy"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-card-foreground placeholder-muted-foreground"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-card-foreground placeholder-muted-foreground"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Your message..."
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-card-foreground placeholder-muted-foreground resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Dock */}
      <div className="flex items-center justify-center">
        <FloatingDock
          mobileClassName="translate-y-4"
          items={[
            {
              title: "Portfolio",
              icon: (
                <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
              ),
              href: "#",
            },
            {
              title: "Download Resume",
              icon: (
                <IconDownload className="h-full w-full text-neutral-500 dark:text-neutral-300" />
              ),
              href: "https://drive.google.com/file/d/1iJk43jKm8YEKLbhXoH2NerqPkOqs4kL_/view",
            },
            {
              title: "Email",
              icon: (
                <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
              ),
              href: "mailto:sauravkrlal@gmail.com",
            },
            {
              title: "LinkedIn",
              icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
              ),
              href: "https://www.linkedin.com/in/sauravkrlal/",
            },
            {
              title: "GitHub",
              icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
              ),
              href: "https://github.com/SauravKumarLal",
            },
            {
              title: "Instagram",
              icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
              ),
              href: "https://www.instagram.com/saurav.kumar.lal/",
            },
            {
              title: "Phone",
              icon: (
                <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
              ),
              href: "tel:+916202830461",
            },
          ]}
        />
      </div>
    </>
  );
};

export default Contacts;
