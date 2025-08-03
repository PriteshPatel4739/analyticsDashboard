import {
  BellIcon,
  Building2Icon,
  CalendarIcon,
  ChevronDownIcon,
  HomeIcon,
  PlusIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";

export  const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex items-center gap-9 pl-3 pr-6 py-3 relative bg-white border-b border-[#ebebeb]">
      <img
        className="relative w-44 h-8"
        alt="Top"
        src="https://c.animaapp.com/mdv83rmu5OQrzW/img/top.svg"
      />

      <div className="flex items-center justify-between relative flex-1 grow">
        <div className="inline-flex items-center relative">
          <Button
            variant="ghost"
            className="inline-flex items-center gap-1 p-0 h-auto"
          >
            <HomeIcon className="w-5 h-5" />
            <span className="font-text-small-regular text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)]">
              HomeIcon
            </span>
          </Button>
        </div>

        <div className="inline-flex items-center gap-3 relative">
          <img
            className="relative w-8 h-8"
            alt="Frame"
            src="https://c.animaapp.com/mdv83rmu5OQrzW/img/frame-1410091207.svg"
          />

          <Button variant="ghost" size="icon" className="w-8 h-8 p-0">
            <BellIcon className="w-5 h-5" />
          </Button>

          <div className="flex items-start gap-4 relative">
            <Button
              variant="ghost"
              className="bg-neutralbg inline-flex items-center gap-6 h-8 px-4 py-[8.5px] rounded-lg"
            >
              <span className="font-text-small-regular text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)]">
                24-03-2001
              </span>
              <CalendarIcon className="w-4 h-4" />
            </Button>
          </div>

          <Button
            variant="ghost"
            className="bg-neutralbg inline-flex items-center gap-6 h-8 px-4 py-[8.5px] rounded-lg"
          >
            <div className="inline-flex items-center gap-2">
              <Building2Icon className="w-4 h-4" />
              <span className="font-text-small-regular text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)]">
                Outlet name
              </span>
            </div>
            <ChevronDownIcon className="w-4 h-4" />
          </Button>

          <Separator
            orientation="vertical"
            className="h-8 bg-[#ebebeb] rounded-full"
          />

          <Button className="bg-brandprimary h-8 px-3.5 py-1.5 rounded-lg text-white">
            <PlusIcon className="w-4 h-4 mr-1" />
            <span className="font-text-small-medium text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)]">
              Create
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
