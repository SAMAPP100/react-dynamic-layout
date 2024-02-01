import { Field, Section } from "../Layout.types";
import { FieldComponent } from "./Field";

export function LayoutContainer({ layout }: { layout: (Field | Section)[] }) {
  return (
    <>
      {layout.map((l) => {
        if (l.title != undefined) {
          const s = l as Section;
          return (
            <fieldset
              className={`grid grid-cols-${s.columns} ${
                s.lessSpacing !== true ? "gap-4 lg:gap-8 m-5 p-2" : ""
              }  ${s.hasBorder ? "border" : ""} `}
            >
              <legend className="uppercase">{s.title}</legend>
              <LayoutContainer layout={s.fields} />
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
