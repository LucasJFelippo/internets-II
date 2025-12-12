export type GlobalContextType = {
  activeSection: "news" | "company" | null;
  setActiveSection: React.Dispatch<React.SetStateAction<"news" | "company" | null>>;
};

