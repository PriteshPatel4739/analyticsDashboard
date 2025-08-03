import {
  BriefcaseIcon,
  CalendarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ClockIcon,
  ExternalLinkIcon,
  EyeIcon,
  LayoutDashboardIcon,
  LayoutGridIcon,
  MessageCircleIcon,
  MoreHorizontalIcon,
  UserPlusIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Separator } from "../../components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";

export const MainContentSection = (): JSX.Element => {
  // Summary cards data
  const summaryCards = [
    {
      title: "22 Ai Review",
      icon: "https://c.animaapp.com/mdv83rmu5OQrzW/img/frame-1410090830.svg",
      stats: [
        {
          label: "Manually Approve",
          count: 2,
          bgColor: "bg-[#fff0e5]",
          textColor: "text-errorcontent",
        },
        {
          label: "Completed",
          count: 10,
          bgColor: "bg-successbg",
          textColor: "text-successcontent",
        },
        {
          label: "Rejected by Ai",
          count: 10,
          bgColor: "bg-[#fff8e5]",
          textColor: "text-warningcontent",
        },
      ],
    },
    {
      title: "22 Tasks",
      icon: "task",
      iconBg: "bg-[#d8e6fb]",
      stats: [
        {
          label: "Ongoing",
          count: 10,
          bgColor: "bg-[#fff8e5]",
          textColor: "text-warningcontent",
        },
        {
          label: "Overdue",
          count: 2,
          bgColor: "bg-[#fff0e5]",
          textColor: "text-errorcontent",
        },
        {
          label: "Completed",
          count: 10,
          bgColor: "bg-successbg",
          textColor: "text-successcontent",
        },
        {
          label: "Scheduled",
          count: 0,
          bgColor: "bg-[#f7edff]",
          textColor: "text-[#7955a3]",
        },
      ],
    },
    {
      title: "22 Issues",
      icon: "issue",
      iconBg: "bg-issuebg",
      stats: [
        {
          label: "Ignored",
          count: 2,
          bgColor: "bg-[#fff0e5]",
          textColor: "text-errorcontent",
        },
        {
          label: "Resolved",
          count: 10,
          bgColor: "bg-successbg",
          textColor: "text-successcontent",
        },
        {
          label: "Open",
          count: 10,
          bgColor: "bg-[#fff8e5]",
          textColor: "text-warningcontent",
        },
      ],
    },
    {
      title: "20 Forms",
      icon: "form",
      iconBg: "bg-scheduledbg",
      stats: [
        {
          label: "Open Responses",
          count: 0,
          bgColor: "bg-[#f7edff]",
          textColor: "text-[#7955a3]",
        },
        {
          label: "Submitted Responses",
          count: 10,
          bgColor: "bg-successbg",
          textColor: "text-successcontent",
        },
        {
          label: "Ongoing Tasks",
          count: 10,
          bgColor: "bg-[#fff8e5]",
          textColor: "text-warningcontent",
        },
      ],
    },
  ];

  // Work allocation tasks data
  const workAllocationTasks = [
    {
      id: "#3789",
      title: "How to Manage Stock",
      comments: 14,
      date: "22 June, 2024",
      time: "11:00 am",
      assignee: "A",
      status: "Ongoing",
      department: "Inventory",
      highlighted: false,
    },
    {
      id: "#3789",
      title: "How to Manage Stock",
      comments: 14,
      date: "3 April, 2025",
      time: "11:00 am",
      assignee: "A",
      status: "Ongoing",
      department: "Inventory",
      highlighted: true,
    },
    {
      id: "#7182",
      title: "Tracking Daily Earnings",
      comments: 18,
      date: "12 October, 2024",
      time: "11:00 am",
      assignee: "A",
      status: "Ongoing",
      department: "Inventory",
      highlighted: false,
    },
  ];

  // Second row of tasks
  const secondRowTasks = [
    {
      id: "#6047",
      title: "Tool for Managing Reservations",
      comments: 17,
      date: "5 September, 2025",
      time: "11:00 am",
      assignee: "A",
      status: "Ongoing",
      department: "Inventory",
      highlighted: false,
    },
    {
      id: "#6047",
      title: "Tool for Managing Reservations",
      comments: 17,
      date: "5 September, 2025",
      time: "11:00 am",
      assignee: "A",
      status: "Ongoing",
      department: "Inventory",
      highlighted: false,
    },
    {
      id: "#4820",
      title: "Coordinating Employee Shifts",
      comments: 15,
      date: "10 July, 2025",
      time: "11:00 am",
      assignee: "A",
      status: "Ongoing",
      department: "Inventory",
      highlighted: false,
    },
  ];

  // Third row of tasks
  const thirdRowTasks = [
    {
      id: "#5913",
      title: "Reviewing Client Happiness",
      comments: 16,
      date: "1 August, 2024",
      time: "11:00 am",
      assignee: "A",
      status: "Ongoing",
      department: "Inventory",
      highlighted: false,
    },
    {
      id: "#2456",
      title: "Ways to Prepare Meals",
      comments: 13,
      date: "15 May, 2024",
      time: "11:00 am",
      assignee: "A",
      status: "Ongoing",
      department: "Inventory",
      highlighted: false,
    },
  ];

  // Employee progress data
  const employeeProgress = [
    {
      name: "Anita",
      department: "IT Services",
      assigned: 90,
      ongoing: 90,
      overdue: 90,
      completed: "90%",
    },
    {
      name: "Rahul",
      department: "Human Resources",
      assigned: 31,
      ongoing: 31,
      overdue: 31,
      completed: "31%",
    },
    {
      name: "Priya",
      department: "Sales Division",
      assigned: 45,
      ongoing: 45,
      overdue: 45,
      completed: "45%",
    },
    {
      name: "Vikram",
      department: "Research and Development",
      assigned: 79,
      ongoing: 79,
      overdue: 79,
      completed: "79%",
    },
    {
      name: "Sita",
      department: "Marketing Team",
      assigned: 52,
      ongoing: 52,
      overdue: 52,
      completed: "52%",
    },
    {
      name: "Ravi",
      department: "Finance Department",
      assigned: 64,
      ongoing: 64,
      overdue: 64,
      completed: "64%",
    },
    {
      name: "Kiran",
      department: "Customer Support",
      assigned: 87,
      ongoing: 87,
      overdue: 87,
      completed: "87%",
    },
  ];

  // Notepad items
  const notepadItems = [
    {
      title: "Make shift & assign",
      description:
        "Assign individuals to specific shifts based on availability and role requirements",
    },
    {
      title: "Menu correction",
      description:
        "Update the menu to show the dishes and their ingredients clearly. Point out any new cooking methods or dietary options.",
    },
  ];

  // Overdue tasks
  const overdueTasks = [
    {
      name: "Menu Planning",
      assignedTo: "Ajay",
      status: "Overdue",
      dueDate: "12-07-2024",
    },
    {
      name: "Staff Scheduling",
      assignedTo: "Niraj",
      status: "Overdue",
      dueDate: "01-08-2023",
    },
    {
      name: "Inventory management",
      assignedTo: "Vijay",
      status: "Overdue",
      dueDate: "02-09-2022",
    },
    {
      name: "Customer Feedback Analysis",
      assignedTo: "Arvind",
      status: "Overdue",
      dueDate: "11-06-2025",
    },
    {
      name: "Budget Forecasting",
      assignedTo: "Priya",
      status: "Overdue",
      dueDate: "04-11-2020",
    },
    {
      name: "Marketing Strategy Development",
      assignedTo: "Suresh",
      status: "Overdue",
      dueDate: "10-05-2026",
    },
    {
      name: "Quality Assurance Testing",
      assignedTo: "Fatima",
      status: "Overdue",
      dueDate: "03-10-2021",
    },
  ];

  // Workflows
  const workflows = [
    {
      title: "Stock Control Strategies",
      responses: 47,
      tasks: 22,
      assignee: "A",
    },
    {
      title: "How to Handle Inventory",
      responses: 23,
      tasks: 15,
      assignee: "A",
    },
    {
      title: "Inventory Management Tips",
      responses: 56,
      tasks: 30,
      assignee: "A",
    },
    {
      title: "Managing Your Stock Effectively",
      responses: 89,
      tasks: 5,
      assignee: "A",
    },
    {
      title: "Optimizing Your Inventory",
      responses: 78,
      tasks: 12,
      assignee: "A",
    },
    {
      title: "Stock Management Techniques",
      responses: 34,
      tasks: 8,
      assignee: "A",
    },
  ];

  return (
    <main className="flex flex-col items-center gap-6 py-6 relative flex-1 self-stretch">
      <section className="flex flex-col items-start gap-6 px-6 w-full">
        <div className="flex items-center justify-between w-full">
          <h1 className="font-text-heading-h5 font-[number:var(--text-heading-h5-font-weight)] text-[#212121] text-[length:var(--text-heading-h5-font-size)] tracking-[var(--text-heading-h5-letter-spacing)] leading-[var(--text-heading-h5-line-height)] [font-style:var(--text-heading-h5-font-style)]">
            Good Evening ! Ajay
          </h1>

          <Button
            variant="outline"
            className="flex items-center gap-1 h-8 px-3.5 py-1.5 rounded-lg border border-[#ebebeb]"
          >
            <LayoutDashboardIcon className="w-4 h-4" />
            <span className="font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[#212121] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] [font-style:var(--text-small-medium-font-style)]">
              Add Widget
            </span>
          </Button>
        </div>

        <div className="flex items-center gap-6 w-full overflow-x-auto">
          {summaryCards.map((card, index) => (
            <Card
              key={index}
              className="flex-none bg-white rounded-xl border border-[#ebebeb]"
            >
              <CardContent className="p-4 flex flex-col gap-3">
                <div className="flex items-center gap-3 w-full">
                  {card.icon === "task" ? (
                    <div
                      className={`inline-flex items-center justify-center p-1.5 ${card.iconBg} rounded-lg`}
                    >
                      <img
                        className="w-6 h-6"
                        alt="Task"
                        src="https://c.animaapp.com/mdv83rmu5OQrzW/img/task-1.svg"
                      />
                    </div>
                  ) : card.icon === "issue" ? (
                    <div
                      className={`inline-flex items-center justify-center p-1.5 ${card.iconBg} rounded-lg`}
                    >
                      <img
                        className="w-6 h-6"
                        alt="Alert circle"
                        src="https://c.animaapp.com/mdv83rmu5OQrzW/img/alert-circle.svg"
                      />
                    </div>
                  ) : card.icon === "form" ? (
                    <div
                      className={`inline-flex items-center justify-center p-1.5 ${card.iconBg} rounded-lg`}
                    >
                      <img
                        className="w-6 h-6"
                        alt="Layout alt"
                        src="https://c.animaapp.com/mdv83rmu5OQrzW/img/layout-alt-02.svg"
                      />
                    </div>
                  ) : (
                    <img className="flex-none" alt="Frame" src={card.icon} />
                  )}

                  <h3 className="font-text-base-semibold font-[number:var(--text-base-semibold-font-weight)] text-[#212121] text-[length:var(--text-base-semibold-font-size)] tracking-[var(--text-base-semibold-letter-spacing)] leading-[var(--text-base-semibold-line-height)] [font-style:var(--text-base-semibold-font-style)]">
                    {card.title}
                  </h3>
                </div>

                <div className="inline-flex items-start gap-2">
                  {card.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="inline-flex items-center gap-1"
                    >
                      <span className="mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                        {stat.label}
                      </span>
                      <Badge
                        variant="outline"
                        className={`flex w-5 h-5 items-center justify-center px-[3px] py-0 ${stat.bgColor} rounded-full`}
                      >
                        <span
                          className={`text-center ${stat.textColor} font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]`}
                        >
                          {stat.count}
                        </span>
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6 px-6 w-full">
        <Card className="h-[280px] bg-white rounded-xl border border-[#ebebeb] overflow-hidden flex flex-col">
          <div className="flex items-start gap-3 pt-3 px-3 border-b border-[#ebebeb]">
            <div className="flex flex-col items-start gap-1 flex-1">
              <h3 className="font-text-base-semibold font-[number:var(--text-base-semibold-font-weight)] text-[#212121] text-[length:var(--text-base-semibold-font-size)] tracking-[var(--text-base-semibold-letter-spacing)] leading-[var(--text-base-semibold-line-height)] [font-style:var(--text-base-semibold-font-style)]">
                Work Allocated
              </h3>

              <Tabs defaultValue="tasks" className="w-full">
                <TabsList className="bg-transparent p-0 h-auto gap-2">
                  <TabsTrigger
                    value="tasks"
                    className="flex flex-col items-center gap-1.5 pt-0.5 pb-0 px-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    <div className="inline-flex items-center justify-center gap-1 px-2 py-0">
                      <span
                        className={`font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)] data-[state=active]:text-brandprimary`}
                      >
                        Tasks
                      </span>
                      <Badge className="flex w-5 h-5 items-center justify-center px-[3px] py-0 bg-brandlight rounded-[999999px]">
                        <span className="text-brandprimary text-center font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                          10
                        </span>
                      </Badge>
                    </div>
                    <div className="h-0.5 w-full bg-brandprimary rounded-[4px_4px_0px_0px] data-[state=inactive]:hidden"></div>
                  </TabsTrigger>

                  <TabsTrigger
                    value="issues"
                    className="flex flex-col h-[30px] items-center gap-2 pt-0.5 pb-0 px-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    <div className="inline-flex items-center justify-center gap-1 px-2 py-0">
                      <span className="font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                        Issues
                      </span>
                      <Badge className="flex w-5 h-5 items-center justify-center px-[3px] py-0 bg-neutralbg rounded-[999999px]">
                        <span className="text-[#212121] text-center font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                          10
                        </span>
                      </Badge>
                    </div>
                  </TabsTrigger>

                  <TabsTrigger
                    value="forms"
                    className="flex flex-col h-[30px] items-center gap-2 pt-0.5 pb-0 px-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    <div className="inline-flex items-center justify-center gap-1 px-2 py-0">
                      <span className="font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                        Forms
                      </span>
                      <Badge className="flex w-5 h-5 items-center justify-center px-[3px] py-0 bg-neutralbg rounded-[999999px]">
                        <span className="text-[#212121] text-center font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                          10
                        </span>
                      </Badge>
                    </div>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="flex items-start">
              <Select>
                <SelectTrigger className="bg-neutrallight-bg h-8 gap-2 px-3 py-[8.5px] rounded-lg">
                  <SelectValue placeholder="Select Employee" />
                  <ChevronDownIcon className="w-4 h-4" />
                </SelectTrigger>
              </Select>
            </div>

            <Button variant="ghost" size="icon" className="w-8 h-8">
              <MoreHorizontalIcon className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex flex-col gap-4 p-4 flex-1 overflow-y-auto">
            <div className="flex flex-col gap-4 pb-4">
              <div className="flex items-center gap-4 w-full">
                {workAllocationTasks.map((task, index) => (
                  <Card
                    key={index}
                    className={`flex-1 p-0 ${task.highlighted ? "shadow-[0px_2px_4px_-1px_#0000000f,0px_4px_6px_-1px_#0000001a]" : ""}`}
                  >
                    <CardContent className="p-3 flex flex-col gap-2">
                      <div className="flex items-start justify-between w-full">
                        <div className="flex flex-col items-start gap-1">
                          <div className="flex items-center gap-0.5">
                            <ChevronUpIcon className="w-4 h-4" />
                            <span className="mt-[-0.50px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                              ID {task.id}
                            </span>
                          </div>
                          <h4 className="font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[#212121] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] [font-style:var(--text-small-medium-font-style)]">
                            {task.title}
                          </h4>
                        </div>
                        <div className="flex items-center gap-0.5">
                          <MessageCircleIcon className="w-4 h-4" />
                          <span className="mt-[-0.50px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                            {task.comments}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2.5 w-full">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-0.5">
                              <CalendarIcon className="w-4 h-4" />
                              <span className="mt-[-0.50px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                                {task.date}
                              </span>
                            </div>
                            <div className="flex items-center gap-0.5">
                              <ClockIcon className="w-4 h-4" />
                              <span className="mt-[-0.50px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                                {task.time}
                              </span>
                            </div>
                          </div>
                          <div className="flex w-5 h-5 items-center justify-center bg-brandprimary rounded-full">
                            <span className="text-neutralwhite text-center font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                              {task.assignee}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 w-full">
                          <div className="p-0.5 bg-neutralbg rounded">
                            <LayoutGridIcon className="w-4 h-4" />
                          </div>
                          <div className="flex items-center justify-between flex-1">
                            <Badge className="px-1.5 py-0.5 bg-warningbg rounded-md border-[0.5px] border-[#d9a541]">
                              <span className="mt-[-0.25px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-warningcontent text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                                {task.status}
                              </span>
                            </Badge>
                            <div className="px-1.5 py-0 bg-neutralbg rounded-lg flex items-center gap-1">
                              <BriefcaseIcon className="w-4 h-4" />
                              <span className="text-[#212121] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                                {task.department}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex items-center gap-4 w-full">
                {secondRowTasks.map((task, index) => (
                  <Card key={index} className="flex-1 p-0">
                    <CardContent className="p-3 flex flex-col gap-2">
                      <div className="flex items-start justify-between w-full">
                        <div className="flex flex-col items-start gap-1">
                          <div className="flex items-center gap-0.5">
                            <ChevronUpIcon className="w-4 h-4" />
                            <span className="mt-[-0.50px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                              ID {task.id}
                            </span>
                          </div>
                          <h4 className="font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[#212121] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] [font-style:var(--text-small-medium-font-style)]">
                            {" "}
                            {task.title}
                          </h4>
                        </div>
                        <div className="flex items-center gap-0.5">
                          <MessageCircleIcon className="w-4 h-4" />
                          <span className="mt-[-0.50px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                            {task.comments}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2.5 w-full">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-0.5">
                              <CalendarIcon className="w-4 h-4" />
                              <span className="mt-[-0.50px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                                {task.date}
                              </span>
                            </div>
                            <div className="flex items-center gap-0.5">
                              <ClockIcon className="w-4 h-4" />
                              <span className="mt-[-0.50px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                                {task.time}
                              </span>
                            </div>
                          </div>
                          <div className="flex w-5 h-5 items-center justify-center bg-brandprimary rounded-full">
                            <span className="text-neutralwhite text-center font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                              {task.assignee}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 w-full">
                          <div className="p-0.5 bg-neutralbg rounded">
                            <LayoutGridIcon className="w-4 h-4" />
                          </div>
                          <div className="flex items-center justify-between flex-1">
                            <Badge className="px-1.5 py-0.5 bg-warningbg rounded-md border-[0.5px] border-[#d9a541]">
                              <span className="mt-[-0.25px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-warningcontent text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                                {task.status}
                              </span>
                            </Badge>
                            <div className="px-1.5 py-0 bg-neutralbg rounded-lg flex items-center gap-1">
                              <BriefcaseIcon className="w-4 h-4" />
                              <span className="text-[#212121] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                                {task.department}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex items-center gap-4 w-full">
                {thirdRowTasks.map((task, index) => (
                  <Card key={index} className="flex-1 p-0">
                    <CardContent className="p-3 flex flex-col gap-2">
                      <div className="flex items-start justify-between w-full">
                        <div className="flex flex-col items-start gap-1">
                          <div className="flex items-center gap-0.5">
                            <ChevronUpIcon className="w-4 h-4" />
                            <span className="mt-[-0.50px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                              ID {task.id}
                            </span>
                          </div>
                          <h4 className="font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[#212121] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] [font-style:var(--text-small-medium-font-style)]">
                            {task.title}
                          </h4>
                        </div>
                        <div className="flex items-center gap-0.5">
                          <MessageCircleIcon className="w-4 h-4" />
                          <span className="mt-[-0.50px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                            {task.comments}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2.5 w-full">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-0.5">
                              <CalendarIcon className="w-4 h-4" />
                              <span className="mt-[-0.50px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                                {task.date}
                              </span>
                            </div>
                            <div className="flex items-center gap-0.5">
                              <ClockIcon className="w-4 h-4" />
                              <span className="mt-[-0.50px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                                {task.time}
                              </span>
                            </div>
                          </div>
                          <div className="flex w-5 h-5 items-center justify-center bg-brandprimary rounded-full">
                            <span className="text-neutralwhite text-center font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                              {task.assignee}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 w-full">
                          <div className="p-0.5 bg-neutralbg rounded">
                            <LayoutGridIcon className="w-4 h-4" />
                          </div>
                          <div className="flex items-center justify-between flex-1">
                            <Badge className="px-1.5 py-0.5 bg-warningbg rounded-md border-[0.5px] border-[#d9a541]">
                              <span className="mt-[-0.25px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-warningcontent text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                                {task.status}
                              </span>
                            </Badge>
                            <div className="px-1.5 py-0 bg-neutralbg rounded-lg flex items-center gap-1">
                              <BriefcaseIcon className="w-4 h-4" />
                              <span className="text-[#212121] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                                {task.department}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <Card className="h-[280px] bg-white rounded-xl border border-[#ebebeb] overflow-hidden flex flex-col">
          <div className="flex items-start gap-3 pt-3 px-3 border-b border-[#ebebeb]">
            <div className="flex flex-col items-start gap-1 flex-1">
              <h3 className="font-text-base-semibold font-[number:var(--text-base-semibold-font-weight)] text-[#212121] text-[length:var(--text-base-semibold-font-size)] tracking-[var(--text-base-semibold-letter-spacing)] leading-[var(--text-base-semibold-line-height)] [font-style:var(--text-base-semibold-font-style)]">
                Employee wise progress
              </h3>

              <Tabs defaultValue="tasks" className="w-full">
                <TabsList className="bg-transparent p-0 h-auto gap-2">
                  <TabsTrigger
                    value="tasks"
                    className="flex flex-col items-center gap-1.5 pt-0.5 pb-0 px-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    <div className="inline-flex items-center justify-center gap-1 px-2 py-0">
                      <span
                        className={`font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)] data-[state=active]:text-brandprimary`}
                      >
                        Tasks
                      </span>
                      <Badge className="flex w-5 h-5 items-center justify-center px-[3px] py-0 bg-brandlight rounded-[999999px]">
                        <span className="text-brandprimary text-center font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                          10
                        </span>
                      </Badge>
                    </div>
                    <div className="h-0.5 w-full bg-brandprimary rounded-[4px_4px_0px_0px] data-[state=inactive]:hidden"></div>
                  </TabsTrigger>

                  <TabsTrigger
                    value="issues"
                    className="flex flex-col h-[30px] items-center gap-2 pt-0.5 pb-0 px-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    <div className="inline-flex items-center justify-center gap-1 px-2 py-0">
                      <span className="font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                        Issues
                      </span>
                      <Badge className="flex w-5 h-5 items-center justify-center px-[3px] py-0 bg-neutralbg rounded-[999999px]">
                        <span className="text-[#212121] text-center font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                          10
                        </span>
                      </Badge>
                    </div>
                  </TabsTrigger>

                  <TabsTrigger
                    value="workflows"
                    className="flex flex-col h-[30px] items-center gap-2 pt-0.5 pb-0 px-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    <div className="inline-flex items-center justify-center gap-1 px-2 py-0">
                      <span className="font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                        Workflows
                      </span>
                      <Badge className="flex w-5 h-5 items-center justify-center px-[3px] py-0 bg-neutralbg rounded-[999999px]">
                        <span className="text-[#212121] text-center font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                          10
                        </span>
                      </Badge>
                    </div>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="flex items-start">
              <Select>
                <SelectTrigger className="bg-neutrallight-bg h-8 gap-2 px-3 py-[8.5px] rounded-lg">
                  <SelectValue placeholder="Select Employee" />
                  <ChevronDownIcon className="w-4 h-4" />
                </SelectTrigger>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <ExternalLinkIcon className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <MoreHorizontalIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="flex flex-1 min-h-0 w-full overflow-hidden">
            <div className="w-full overflow-y-auto">
            <Table>
              <TableHeader className="bg-neutralbg">
                <TableRow>
                  <TableHead className="text-[#212121] font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] [font-style:var(--text-small-medium-font-style)]">
                    Name
                  </TableHead>
                  <TableHead className="text-[#212121] font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] [font-style:var(--text-small-medium-font-style)]">
                    Department
                  </TableHead>
                  <TableHead className="text-center text-[#212121] font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] [font-style:var(--text-small-medium-font-style)]">
                    Assigned
                  </TableHead>
                  <TableHead className="text-center text-[#212121] font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] [font-style:var(--text-small-medium-font-style)]">
                    Ongoing
                  </TableHead>
                  <TableHead className="text-center text-[#212121] font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] [font-style:var(--text-small-medium-font-style)]">
                    Overdue
                  </TableHead>
                  <TableHead className="text-center text-[#212121] font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] [font-style:var(--text-small-medium-font-style)]">
                    Completed
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="overflow-y-auto">
                {employeeProgress.map((employee, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                      {employee.name}
                    </TableCell>
                    <TableCell className="font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                      {employee.department}
                    </TableCell>
                    <TableCell className="text-center font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                      {employee.assigned}
                    </TableCell>
                    <TableCell className="text-center font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                      {employee.ongoing}
                    </TableCell>
                    <TableCell className="text-center font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                      {employee.overdue}
                    </TableCell>
                    <TableCell className="text-center font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                      {employee.completed}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          </div>
        </Card>

        <div className="flex gap-6 w-full">
          <Card className="flex-1 h-[280px] bg-white rounded-xl border border-[#ebebeb] overflow-hidden">
            <div className="flex items-center gap-3 p-3 border-b border-[#ebebeb]">
              <div className="flex-1">
                <h3 className="font-text-base-semibold font-[number:var(--text-base-semibold-font-weight)] text-[#212121] text-[length:var(--text-base-semibold-font-size)] tracking-[var(--text-base-semibold-letter-spacing)] leading-[var(--text-base-semibold-line-height)] [font-style:var(--text-base-semibold-font-style)]">
                  Personal Notepad
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <ExternalLinkIcon className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <MoreHorizontalIcon className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <CardContent className="p-4 flex flex-col gap-2 h-full">
              {notepadItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-xl"
                >
                  <div className="w-6 h-6 bg-[url(https://c.animaapp.com/mdv83rmu5OQrzW/img/circle.svg)] bg-[100%_100%]" />
                  <div className="flex flex-col items-start">
                    <h4 className="font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[#212121] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] [font-style:var(--text-small-medium-font-style)]">
                      {item.title}
                    </h4>
                    <p className="font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[#646464] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="flex-1 h-[280px] bg-white rounded-xl border border-[#ebebeb] overflow-hidden">
            <div className="flex items-start gap-2.5 pt-3 px-3 border-b border-[#ebebeb]">
              <div className="flex flex-col items-start gap-1 flex-1">
                <h3 className="font-text-base-semibold font-[number:var(--text-base-semibold-font-weight)] text-[#212121] text-[length:var(--text-base-semibold-font-size)] tracking-[var(--text-base-semibold-letter-spacing)] leading-[var(--text-base-semibold-line-height)] [font-style:var(--text-base-semibold-font-style)]">
                  Department wise allocation
                </h3>

                <Tabs defaultValue="tasks" className="w-full">
                  <TabsList className="bg-transparent p-0 h-auto gap-2">
                    <TabsTrigger
                      value="tasks"
                      className="flex flex-col items-center gap-1.5 pt-0.5 pb-0 px-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                    >
                      <div className="inline-flex items-center justify-center gap-1 px-2 py-0">
                        <span
                          className={`font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)] data-[state=active]:text-brandprimary`}
                        >
                          Tasks
                        </span>
                      </div>
                      <div className="h-0.5 w-full bg-brandprimary rounded-[4px_4px_0px_0px] data-[state=inactive]:hidden"></div>
                    </TabsTrigger>

                    <TabsTrigger
                      value="issues"
                      className="flex flex-col h-[30px] items-center gap-2 pt-0.5 pb-0 px-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                    >
                      <div className="inline-flex items-center justify-center gap-1 px-2 py-0">
                        <span className="font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                          Issues
                        </span>
                      </div>
                    </TabsTrigger>

                    <TabsTrigger
                      value="forms"
                      className="flex flex-col h-[30px] items-center gap-2 pt-0.5 pb-0 px-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                    >
                      <div className="inline-flex items-center justify-center gap-1 px-2 py-0">
                        <span className="font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                          Forms
                        </span>
                      </div>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <Button variant="ghost" size="icon" className="w-8 h-8">
                <MoreHorizontalIcon className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex items-start gap-1 pt-5 pb-1 px-3 relative flex-1 bg-white">
              <div className="inline-flex flex-col items-start justify-around gap-7 pt-0 pb-[47px] px-0 self-stretch">
                <div className="inline-flex flex-col items-start justify-between flex-1 grow">
                  <div className="font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                    100%
                  </div>
                  <div className="font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                    80%
                  </div>
                  <div className="font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                    60%
                  </div>
                  <div className="font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                    40%
                  </div>
                  <div className="font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                    20%
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start flex-1 self-stretch grow">
                <div className="flex items-center relative flex-1 self-stretch w-full grow">
                  <img
                    className="w-px relative self-stretch object-cover"
                    alt="Line"
                    src="https://c.animaapp.com/mdv83rmu5OQrzW/img/line-7.svg"
                  />

                  <div className="flex flex-col items-start justify-between pt-3 pb-0 px-0 flex-1 self-stretch grow">
                    <img
                      className="relative self-stretch w-full h-px object-cover"
                      alt="Line"
                      src="https://c.animaapp.com/mdv83rmu5OQrzW/img/line-1.svg"
                    />
                    <img
                      className="relative self-stretch w-full h-px object-cover"
                      alt="Line"
                      src="https://c.animaapp.com/mdv83rmu5OQrzW/img/line-1.svg"
                    />
                    <img
                      className="relative self-stretch w-full h-px object-cover"
                      alt="Line"
                      src="https://c.animaapp.com/mdv83rmu5OQrzW/img/line-1.svg"
                    />
                    <img
                      className="relative self-stretch w-full h-px object-cover"
                      alt="Line"
                      src="https://c.animaapp.com/mdv83rmu5OQrzW/img/line-1.svg"
                    />
                    <img
                      className="relative self-stretch w-full h-px object-cover"
                      alt="Line"
                      src="https://c.animaapp.com/mdv83rmu5OQrzW/img/line-1.svg"
                    />
                    <img
                      className="w-full h-px mb-[-1.00px] relative self-stretch object-cover"
                      alt="Line"
                      src="https://c.animaapp.com/mdv83rmu5OQrzW/img/line-5.svg"
                    />
                  </div>

                  <div className="flex w-[525px] h-40 items-end gap-[30px] px-[30px] py-0 absolute top-[13px] left-0 overflow-hidden overflow-x-scroll">
                    <div className="inline-flex items-end gap-[30px] pl-0 pr-[30px] py-0 flex-[0_0_auto]">
                      <div className="flex w-10 h-[33px] items-start pt-2.5 pb-0 px-0 bg-[#ffdd9d] rounded-[8px_8px_0px_0px] overflow-hidden">
                        <div className="h-[120px] mb-[-97.00px] flex-1 grow bg-brandsecondary" />
                      </div>
                      <div className="flex w-10 h-[65px] items-start pt-3 pb-0 px-0 bg-[#ffdd9d] rounded-[8px_8px_0px_0px] overflow-hidden">
                        <div className="h-[120px] mb-[-67.00px] flex-1 grow bg-brandsecondary" />
                      </div>
                      <div className="flex w-10 h-[97px] items-start pt-[30px] pb-0 px-0 bg-[#ffdd9d] rounded-[8px_8px_0px_0px] overflow-hidden">
                        <div className="self-stretch flex-1 grow bg-brandsecondary" />
                      </div>
                      <div className="flex w-10 items-center pt-[30px] pb-0 px-0 bg-[#ffdd9d] rounded-[8px_8px_0px_0px] overflow-hidden">
                        <div className="flex-1 grow h-[120px] bg-brandsecondary" />
                      </div>
                      <div className="flex w-10 items-center pt-[30px] pb-0 px-0 bg-[#ffdd9d] rounded-[8px_8px_0px_0px] overflow-hidden">
                        <div className="flex-1 grow h-[120px] bg-brandsecondary" />
                      </div>
                      <div className="flex w-10 items-center pt-[30px] pb-0 px-0 bg-[#ffdd9d] rounded-[8px_8px_0px_0px] overflow-hidden">
                        <div className="flex-1 grow h-[120px] bg-brandsecondary" />
                      </div>
                      <div className="flex w-10 items-center pt-[30px] pb-0 px-0 bg-[#ffdd9d] rounded-[8px_8px_0px_0px] overflow-hidden">
                        <div className="flex-1 grow h-[120px] bg-brandsecondary" />
                      </div>
                      <div className="flex w-10 items-center pt-[30px] pb-0 px-0 bg-[#ffdd9d] rounded-[8px_8px_0px_0px] overflow-hidden">
                        <div className="flex-1 grow h-[120px] bg-brandsecondary" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute w-4 h-[168px] top-0 left-[509px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.75)_100%)]" />
                </div>

                <div className="flex items-center justify-center gap-2.5 w-full">
                  <div className="font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                    Departments
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-3 absolute top-[5px] left-[410px]">
                <div className="inline-flex items-center gap-1">
                  <div className="w-3 h-3 bg-brandsecondary rounded" />
                  <div className="font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                    Tasks
                  </div>
                </div>
                <div className="inline-flex items-center gap-1">
                  <div className="w-3 h-3 bg-[#ffdd9d] rounded" />
                  <div className="font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                    Overdue Tasks
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex gap-6 w-full">
          <Card className="flex-1 h-[280px] bg-white rounded-xl border border-[#ebebeb] overflow-hidden">
            <div className="flex items-center gap-3 p-3 border-b border-[#ebebeb]">
              <div className="flex items-start gap-2 flex-1">
                <h3 className="font-text-base-semibold font-[number:var(--text-base-semibold-font-weight)] text-[#212121] text-[length:var(--text-base-semibold-font-size)] tracking-[var(--text-base-semibold-letter-spacing)] leading-[var(--text-base-semibold-line-height)] [font-style:var(--text-base-semibold-font-style)]">
                  Overdue tasks
                </h3>
                <Badge className="flex w-5 h-5 items-center justify-center px-[3px] py-0 bg-neutralbg rounded-[999999px]">
                  <span className="text-[#212121] text-center font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                    10
                  </span>
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <ExternalLinkIcon className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <MoreHorizontalIcon className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="flex flex-1 w-full">
              <Table>
                <TableHeader className="bg-neutralbg">
                  <TableRow>
                    <TableHead className="w-[180px] text-[#212121] font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] [font-style:var(--text-small-medium-font-style)]">
                      Task Name
                    </TableHead>
                    <TableHead className="w-[120px] text-[#212121] font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] [font-style:var(--text-small-medium-font-style)]">
                      Assigned to
                    </TableHead>
                    <TableHead className="text-[#212121] font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] [font-style:var(--text-small-medium-font-style)]">
                      Status
                    </TableHead>
                    <TableHead className="text-[#212121] font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] [font-style:var(--text-small-medium-font-style)]">
                      Due date
                    </TableHead>
                    <TableHead className="w-[73px] text-[#212121] font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] [font-style:var(--text-small-medium-font-style)]">
                      Reassign
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="overflow-y-auto">
                  {overdueTasks.map((task, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                        {task.name}
                      </TableCell>
                      <TableCell className="font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                        {task.assignedTo}
                      </TableCell>
                      <TableCell>
                        <Badge className="px-1.5 py-0.5 bg-[#fff0e5] rounded-md border-[0.5px] border-[#ff6d00]">
                          <span className="mt-[-0.25px] text-issuecontent font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                            {task.status}
                          </span>
                        </Badge>
                      </TableCell>
                      <TableCell className="font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                        {task.dueDate}
                      </TableCell>
                      <TableCell className="text-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-5 p-0.5 bg-neutralbg rounded"
                        >
                          <UserPlusIcon className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>

          <Card className="flex-1 h-[280px] bg-white rounded-xl border border-[#ebebeb] overflow-hidden">
            <div className="flex items-center gap-3 p-3 border-b border-[#ebebeb]">
              <div className="flex-1">
                <h3 className="font-text-base-semibold font-[number:var(--text-base-semibold-font-weight)] text-[#212121] text-[length:var(--text-base-semibold-font-size)] tracking-[var(--text-base-semibold-letter-spacing)] leading-[var(--text-base-semibold-line-height)] [font-style:var(--text-base-semibold-font-style)]">
                  Workflows
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <ExternalLinkIcon className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <MoreHorizontalIcon className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <CardContent className="p-4 flex flex-col gap-4 overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                {workflows.map((workflow, index) => (
                  <Card key={index} className="p-0">
                    <CardContent className="p-3 flex flex-col gap-4">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col items-start gap-1">
                          <h4 className="font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[#212121] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] [font-style:var(--text-small-medium-font-style)]">
                            {workflow.title}
                          </h4>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-0.5 bg-neutralbg rounded"
                        >
                          <EyeIcon className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <span className="mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                              Responses
                            </span>
                            <Badge
                              variant="outline"
                              className="bg-white px-[3px] py-0 rounded-full"
                            >
                              <span className="font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                                {workflow.responses}
                              </span>
                            </Badge>
                          </div>
                          <Separator orientation="vertical" className="h-4" />
                          <div className="flex items-center gap-1">
                            <span className="mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                              Tasks
                            </span>
                            <Badge
                              variant="outline"
                              className="bg-white px-[3px] py-0 rounded-full"
                            >
                              <span className="font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                                {workflow.tasks}
                              </span>
                            </Badge>
                          </div>
                        </div>
                        <div className="flex w-5 h-5 items-center justify-center bg-brandprimary rounded-full">
                          <span className="text-neutralwhite text-center font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                            {workflow.assignee}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};
