import { Field, Section, Tabs } from "../Layout.types";
import { FieldComponent } from "./Field";
import LayoutContainer from "./LayoutContainer";
import TabsLayout from "./TabsLayout";

export function Layout({ layout }: { layout: (Field | Section | Tabs)[] }) {
  return (
    <>
      {layout.map((l) => {
        if ("title" in l) {
          return <LayoutContainer container={l} />;
        } else if ("tabs" in l) {
          return <TabsLayout tabs={l} />;
        } else {
          l = l as Field;
          return <FieldComponent {...l} />;
        }
      })}
    </>
  );
}
