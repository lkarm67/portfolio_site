export type ProjectKey =
  | "nanny"
  | "traveltrucks"
  | "toolnext"
  | "notehub"
  | "mebleria"
  | "webstudio"
  | "watchcharm";

export type Translations = {
  projects: {
    title: string;
    type: string;
    individual: string;
    team: string;
    role: string;
    live: string;
    github: string;
    items: Record<ProjectKey, string>;
  };
};