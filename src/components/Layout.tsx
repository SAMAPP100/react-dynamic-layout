import { Field, Section } from "../Layout.types";
import { FieldComponent } from "./Field";

export function LayoutContainer({ layout }: { layout: (Field | Section)[] }) {
  return (
    <>
      {layout.map((l) => {
        if ("title" in l) {
          return (
            <fieldset
              className={`grid grid-cols-${l.columns} ${
                l.lessSpacing !== true ? "gap-4 lg:gap-8 m-5 p-2" : ""
              }  ${l.hasBorder ? "border" : ""} `}
            >
              <legend className="uppercase">{l.title}</legend>
              <LayoutContainer layout={l.fields} />
            </fieldset>
          );
        } else {
          l = l as Field;
          return <FieldComponent {...l} />;
        }
      })}
    </>
  );
}
