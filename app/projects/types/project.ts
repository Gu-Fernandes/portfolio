export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectLinkType = "repo" | "demo";

export type ProjectLink = {
  type: ProjectLinkType;
  href: string;
  label?: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  tags: readonly string[];
  highlights?: readonly string[];
  images: readonly ProjectImage[];
  links?: readonly ProjectLink[];
};
