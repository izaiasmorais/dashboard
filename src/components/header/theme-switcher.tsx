"use client";
import { Monitor, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export function ThemeSwitcher() {
	const { setTheme, theme } = useTheme();

	useEffect(() => {
		console.log(theme);
	}, []);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="border w-10 h-10 flex items-center justify-center rounded-md">
				<Sun size={20} />
			</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuItem
					className="flex items-center gap-2 cursor-pointer"
					onClick={() => setTheme("light")}
				>
					<Sun size={20} />
					Light
				</DropdownMenuItem>

				<DropdownMenuItem
					className="flex items-center gap-2 cursor-pointer"
					onClick={() => setTheme("dark")}
				>
					<Moon size={20} />
					Dark
				</DropdownMenuItem>

				<DropdownMenuItem
					className="flex items-center gap-2 cursor-pointer"
					onClick={() => setTheme("system")}
				>
					<Monitor size={20} />
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
