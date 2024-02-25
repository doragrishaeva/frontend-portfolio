import { Project } from "./Project";
import { Technology } from "./Technology";
import { Experience } from "./Experience";
import { SocialMediaItem } from "./SocialMedia";

export interface Info {
  technologies: Technology[];
  experience: Experience[];
  projects: Project[];
  socialMedia: SocialMediaItem[];
  new: any;
}