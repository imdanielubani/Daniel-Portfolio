export const contactDetails = {
  email: "imdanielubani@gmail.com",
  whatsapp: {
    label: "WhatsApp",
    value: "+234 706 606 7435",
    href: "https://wa.me/2347066067435",
  },
  instagram: {
    label: "Instagram",
    value: "@imdanielubani",
    href: "https://www.instagram.com/imdanielubani/",
  },
  linkedin: {
    label: "LinkedIn",
    value: "linkedin.com/in/imdanielubani",
    href: "https://www.linkedin.com/in/imdanielubani/",
  },
  resume: {
    label: "Download Resume",
    href: "https://docs.google.com/document/d/1Mhnu6zn-atOawnecT6eWfXXRhKQBcIdl/export?format=pdf",
  },
} as const;

export const socialChannels = [
  contactDetails.whatsapp,
  contactDetails.instagram,
  contactDetails.linkedin,
] as const;
