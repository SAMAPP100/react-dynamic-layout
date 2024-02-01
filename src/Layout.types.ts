export interface Section {
  title: string;
  hasBorder: boolean;
  columns: number;
  lessSpacing: boolean;
  fields: (Field | Section)[];
}

export interface Field {
  name: string;
  label: string;
  editable: boolean;
  labelPosition: "above" | "left";
  value: string | number | null;
}
