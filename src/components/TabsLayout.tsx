import { Tabs } from "@/Layout.types";
import { Tabs as Tab, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import LayoutContainer from "./LayoutContainer";

export default function TabsLayout({ tabs }: { tabs: Tabs }) {
  return (
    <Tab defaultValue={tabs.tabs[0].title} className="w-full">
      <TabsList className="w-full justify-around">
        {tabs.tabs.map((t) => {
          return <TabsTrigger value={t.title}>{t.title}</TabsTrigger>;
        })}
      </TabsList>
      {tabs.tabs.map((t) => {
        return (
          <TabsContent value={t.title}>
            <LayoutContainer container={{ ...t, title: "" }} />
          </TabsContent>
        );
      })}
    </Tab>
  );
}
