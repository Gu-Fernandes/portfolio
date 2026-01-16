import type { Metadata } from "next";
import { ProjectsPage } from "./components/projects-page";

export const metadata: Metadata = {
  title: "Projetos | Gustavo Fernandes",
  description: "Página com todos os projetos detalhados.",
};

export default function Page() {
  return <ProjectsPage />;
}
