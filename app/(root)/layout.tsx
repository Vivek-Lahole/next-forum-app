import DashboardNav from "@/components/DashBoardNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      <div>
        <div className="flex h-screen overflow-scroll">
          <DashboardNav />
          <main className="w-full h-screen flex flex-col items-center justify-center">
            {children}
          </main>
        </div>
      </div>
    </body>
  );
}