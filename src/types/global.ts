export type ControlType = {
  control: {
    setActiveSection: (value: "news" | "company" | null) => void;
  };
};