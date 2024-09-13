import { ReactNode } from "react";
import { Card } from "../ui/card";
import { formatCurrency } from "@/utils/formatCurrency";

interface SummaryCardProps {
	title: string;
	value: number;
	icon: ReactNode;
	description: ReactNode;
}

export function SummaryCard({
	value,
	description,
	icon,
	title,
}: SummaryCardProps) {
	return (
		<Card className="p-4 md:p-6">
			<div className="flex justify-between items-center">
				<span className="text-sm font-semibold">{title}</span>
				{icon}
			</div>

			<h1 className="text-xl md:text-2xl mt-4 font-bold leading-tight">
				{formatCurrency(value)}
			</h1>

			<span className="text-muted-foreground font-medium text-xs">
				{description}
			</span>
		</Card>
	);
}
