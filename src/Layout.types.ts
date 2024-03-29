export interface Section {
  title: string;
  hasBorder: boolean;
  columns: number;
  lessSpacing: boolean;
  fields: (Field | Section | Tabs)[];
}

export interface Field {
  name: string;
  label: string;
  editable: boolean;
  labelPosition: "above" | "left";
  value: string | number | null;
}

export interface Tabs {
  tabs: Section[];
}
