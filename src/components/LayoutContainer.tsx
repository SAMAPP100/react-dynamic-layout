import { Section } from "@/Layout.types";
import { Layout } from "./Layout";

export default function LayoutContainer({ container }: { container: Section }) {
  return (
    <fieldset
      className={`grid grid-cols-${container.columns} ${
        container.lessSpacing !== true ? "gap-4 lg:gap-8 m-5 p-2" : ""
      }  ${container.hasBorder ? "border" : ""} `}
    >
      <legend className="uppercase">{container.title}</legend>
      <Layout layout={container.fields} />
    </fieldset>
  );
}
