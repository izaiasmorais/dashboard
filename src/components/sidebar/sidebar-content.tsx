import { Home, Users } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

export function SidebarContent() {
	return (
		<>
			<div className="flex flex-col gap-1">
				<span className="text-sm text-muted-foreground font-medium mb-1">
					GERAL
				</span>

				<SidebarItem
					title="Dashboard"
					href="/"
					icon={<Home size={20} strokeWidth={1.5} />}
				/>

				<SidebarItem
					title="Prescrições"
					href="/prescricoes"
					icon={<Users size={20} strokeWidth={1.5} />}
				/>
			</div>
		</>
	);
}
