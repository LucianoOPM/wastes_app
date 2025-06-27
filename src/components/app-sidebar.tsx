import {
  BarChart3,
  CreditCard,
  FileText,
  LayoutDashboard,
  Tags,
  User,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarSeparator,
  SidebarFooter,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    id: "dashboard",
  },
  {
    name: "Transacciones",
    href: "/transactions",
    icon: CreditCard,
    id: "transactions",
  },
  { name: "Resumen", href: "/summary", icon: BarChart3, id: "summary" },
  { name: "Categorías", href: "/categories", icon: Tags, id: "categories" },
  { name: "Reportes", href: "/reports", icon: FileText, id: "reports" },
  { name: "Perfil", href: "/profile", icon: User, id: "profile" },
];

export function AppSidebar() {
  const pathName = usePathname();
  const { data: session } = useSession();

  if (!session || !session.user || !session.user.name) {
    return <div>NO SESSION</div>;
  }
  if (!session || !session.user || !session.user.email) {
    return <div>NO SESSION</div>;
  }

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-[10px]">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-blue-600 text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <BarChart3 className="size-5 text-white" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{"FinanceTracker"}</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton asChild isActive={pathName === item.href}>
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarSeparator />

      <SidebarFooter>
        <NavUser email={session?.user?.email} userName={session.user.name} />
      </SidebarFooter>
    </Sidebar>
  );
}

function NavUser({ email, userName }: { email: string; userName: string }) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={"/image.jps"} alt={"user image"} />
                <AvatarFallback className="rounded-lg">LP</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{userName}</span>
                <span className="truncate text-xs">{email}</span>
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
