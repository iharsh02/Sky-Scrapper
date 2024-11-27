import { Separator } from "@/components/ui/separator";
import { Sidebar } from "@/components/global/Sidebar";
import { BredCrumbHeader } from "@/components/global/BredCrumbHeader";
import { ModeToggle } from "@/components/global/ModeToggle";
import { MobileSidebar } from "@/components/global/MobileSidebar";
import Logo from "@/components/global/Logo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="flex h-screen">
    <div className="hidden md:block">
      <Sidebar />
    </div>
    <div className="flex flex-col flex-1 min-h-screen">
      <header className="
        flex 
        items-center
        justify-between
        px-6
        py-4
        h-[50px]
        container">
        <div className="flex gap-4 md:hidden">
          <Logo />
          <BredCrumbHeader />
        </div>
        <div className="hidden md:block">
          <BredCrumbHeader />
        </div>
        <div className="gap-1 flex items-center">
          <ModeToggle />
          <div className="md:hidden">
            <MobileSidebar />
          </div>
        </div>
      </header>
      <Separator>
        <div className="overflow-auto">
          <div className="flex-1 container py-4 text-accent-foreground">
            {children}
          </div>
        </div>
      </Separator>
    </div>
  </div>
}
