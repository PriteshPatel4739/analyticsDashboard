import {
  AlertCircleIcon,
  CalendarIcon,
  CheckSquareIcon,
  FileTextIcon,
  HomeIcon,
  LayoutGridIcon,
  LayoutTemplateIcon,
  LineChartIcon,
  LogOutIcon,
  MessageCircleIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const NavigationMenuSection = (): JSX.Element => {
  // Navigation menu items data
  const menuItems = [
    {
      icon: <HomeIcon className="w-5 h-5" />,
      label: "Home",
      isActive: true,
    },
    {
      icon: <CheckSquareIcon className="w-5 h-5" />,
      label: "Tasks",
      isActive: false,
    },
    {
      icon: <AlertCircleIcon className="w-5 h-5" />,
      label: "Issues",
      isActive: false,
    },
    {
      icon: <LayoutGridIcon className="w-5 h-5" />,
      label: "Forms",
      isActive: false,
    },
    {
      icon: <CalendarIcon className="w-5 h-5" />,
      label: "Calendar",
      isActive: false,
    },
    {
      icon: <LayoutTemplateIcon className="w-5 h-5" />,
      label: "Browse Templates",
      isActive: false,
    },
    {
      icon: <FileTextIcon className="w-5 h-5" />,
      label: "Temlate Library",
      isActive: false,
    },
    {
      icon: <UsersIcon className="w-5 h-5" />,
      label: "User Management",
      isActive: false,
    },
    {
      icon: <LineChartIcon className="w-5 h-5" />,
      label: "Reports",
      isActive: false,
    },
    {
      icon: <SettingsIcon className="w-5 h-5" />,
      label: "Settings",
      isActive: false,
    },
    {
      icon: <LogOutIcon className="w-5 h-5" />,
      label: "Log Out",
      isActive: false,
    },
  ];

  return (
    <nav className="flex flex-col w-[200px] items-center justify-between p-3 relative self-stretch bg-white border-r border-[#ebebeb]">
      <div className="flex flex-col items-start gap-1 self-stretch w-full flex-[0_0_auto] bg-white">
        {menuItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`w-44 h-9 justify-start gap-2 p-2 rounded-lg ${
              item.isActive
                ? "bg-brandlight text-brandprimary"
                : "text-[#212121]"
            }`}
          >
            {item.icon}
            <span className="flex-1 font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
              {item.label}
            </span>
          </Button>
        ))}
      </div>

      <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
        <Button
          variant="outline"
          className="w-44 h-9 justify-start gap-2 p-2 relative rounded-lg shadow-[0px_1px_2px_#0000000f,0px_1px_3px_#0000001a]"
        >
          <MessageCircleIcon className="w-5 h-5" />
          <span className="flex-1 text-[#212121] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
            Chat
          </span>
        </Button>

        <Card className="flex flex-col items-start gap-2 p-2 relative self-stretch w-full flex-[0_0_auto] bg-neutrallight-bg rounded-lg border-none">
          <CardContent className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto] p-0">
            <Avatar className="w-8 h-8 bg-brandprimary rounded-[99999px]">
              <AvatarFallback className="text-white font-text-base-medium font-[number:var(--text-base-medium-font-weight)] text-[length:var(--text-base-medium-font-size)] tracking-[var(--text-base-medium-letter-spacing)] leading-[var(--text-base-medium-line-height)] [font-style:var(--text-base-medium-font-style)]">
                A
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col items-start relative flex-1 grow">
              <div className="relative self-stretch mt-[-1.00px] font-text-base-regular font-[number:var(--text-base-regular-font-weight)] text-[#212121] text-[length:var(--text-base-regular-font-size)] tracking-[var(--text-base-regular-letter-spacing)] leading-[var(--text-base-regular-line-height)] [font-style:var(--text-base-regular-font-style)]">
                Ajay
              </div>

              <div className="relative self-stretch -mt-0.5 font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                Manager
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </nav>
  );
};
