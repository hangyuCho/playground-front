export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Travel",
      href: "/",
    },
    {
      title: "Shopping",
      href: "/shop",
    },
  ],
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com/hangyuCHo",
    docs: "https://h-9.info",
  },
}
