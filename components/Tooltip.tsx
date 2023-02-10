import type { TooltipInterface } from "../interface/Tooltip.Interface";
import type { FC } from "react";

export const Tooltip: FC<TooltipInterface> = ({ title }: TooltipInterface) => {
	return (
		<div className="absolute right-0 -top-11 items-center flex duration-300">
			<div className="relative whitespace-nowrap rounded bg-red-100 border border-red-300 px-3 py-1 text-base font-light text-red-900 drop-shadow-xl z-20 duration-150">
				<div className="absolute inset-x-0 right-1 -bottom-[4.8px] flex items-center justify-end -z-10">
					<div className="w-2 h-2 -rotate-45 duration-150 bg-red-100 border-l border-b border-red-300 "></div>
				</div>
				{title}
			</div>
		</div>
	);
};
