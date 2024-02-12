"use client";

import { cn } from "@/lib/utils";
import { Sidebar, LayoutDashboard, Users, LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const sidebarNav = [
  {
    title: "Feed",
    icon: LayoutDashboard,
    path: "/feed",
  },
  {
    title: "Posts",
    icon: Users,
    path: "/posts",
  },
];

export default function DashboardNav() {
  const path = usePathname();
  const router = useRouter();
  return (
    <nav className={cn(`relative hidden h-screen  lg:block w-40 pt-5`)}>
      <div className="space-y-2 py-2">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <h2 className="mb-2 px-2 text-xl font-semibold tracking-tight border-b pb-2">
              Forum App
            </h2>
            <nav className="flex flex-col gap-2 py-2">
              {sidebarNav.map((item) => {
                return (
                  <span
                    className={cn(
                      "group flex items-center rounded-md px-4 py-2 text-lg font-medium hover:bg-accent hover:text-accent-foreground cursor-pointer",
                      path === item.path ? "bg-accent" : "transparent"
                    )}
                    onClick={() => {
                      router.push(item.path);
                    }}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    <span className="text-sm">{item.title}</span>
                  </span>
                );
              })}
            </nav>
            <span className="group flex items-center rounded-md px-4 py-2 text-lg font-medium hover:bg-accent hover:text-accent-foreground cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span className="text-sm">Logout</span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}