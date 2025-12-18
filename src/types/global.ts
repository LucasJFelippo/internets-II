export type GlobalContextType = {
  activeSection: "news" | "company" | null;
  setActiveSection: React.Dispatch<React.SetStateAction<"news" | "company" | null>>;
};

export type Item = {
  title: string
  link: string
  date: string
  image?: string
  categories: string[]
}