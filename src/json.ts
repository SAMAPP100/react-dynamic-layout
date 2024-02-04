import { Section } from "./Layout.types";

export const opt: Section[] = [
  {
    title: "Main",
    columns: 1,
    lessSpacing: false,
    hasBorder: true,
    fields: [
      {
        tabs: [
          {
            title: "First Tab",
            columns: 1,
            lessSpacing: true,
            hasBorder: false,
            fields: [
              {
                name: "FirstChildField",
                label: "First Field",
                editable: true,
                labelPosition: "left",
                value: "Somthing",
              },
              {
                name: "SeconfChildField",
                label: "First Field",
                editable: true,
                labelPosition: "above",
                value: "Somthing",
              },
            ],
          },
          {
            title: "Second Tab",
            columns: 5,
            lessSpacing: true,
            hasBorder: false,
            fields: [
              {
                name: "FirstField",
                label: "First Field",
                editable: true,
                labelPosition: "left",
                value: "Somthing",
              },
              {
                name: "FirstField",
                label: "First Field",
                editable: true,
                labelPosition: "above",
                value: "Somthing",
              },
              {
                name: "FirstField",
                label: "First Field",
                editable: true,
                labelPosition: "above",
                value: "Somthing",
              },
              {
                name: "FirstField",
                label: "First Field",
                editable: true,
                labelPosition: "above",
                value: "Somthing",
              },
              {
                name: "FirstField",
                label: "First Field",
                editable: true,
                labelPosition: "left",
                value: "Somthing",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Main",
    columns: 6,
    lessSpacing: false,
    hasBorder: true,
    fields: [
      {
        name: "FirstField",
        label: "First Field",
        editable: true,
        labelPosition: "left",
        value: "Somthing",
      },
      {
        name: "FirstField",
        label: "First Field",
        editable: true,
        labelPosition: "above",
        value: "Somthing",
      },
      {
        name: "FirstField",
        label: "First Field",
        editable: true,
        labelPosition: "above",
        value: "Somthing",
      },
      {
        name: "FirstField",
        label: "First Field",
        editable: true,
        labelPosition: "above",
        value: "Somthing",
      },
      {
        name: "FirstField",
        label: "First Field",
        editable: true,
        labelPosition: "left",
        value: "Somthing",
      },
    ],
  },
];
