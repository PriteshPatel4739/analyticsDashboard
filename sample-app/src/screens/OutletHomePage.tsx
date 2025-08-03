import React from "react";
import { ScrollArea, ScrollBar } from "../components/ui/scroll-area";
import {HeaderSection}  from "./section/HeaderSection";
import {MainContentSection}  from "./section/MainContentSection";
import {NavigationMenuSection}  from "./section/NavigationMenuSection";

export const OutletHomepage = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-full h-screen bg-white overflow-hidden"
      data-model-id="2506:56525"
    >
      <HeaderSection />
      <div className="flex flex-1 w-full relative h-full overflow-hidden">
        <NavigationMenuSection />
        <main className="flex-1 overflow-auto">
          <ScrollArea className="h-full">
            <MainContentSection />
            <ScrollBar
              orientation="vertical"
              className="w-2 bg-[#ebebeb] rounded-[999px]"
            />
          </ScrollArea>
        </main>
      </div>
    </div>
  );
};
