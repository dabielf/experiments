import { motion } from "motion/react";

export default function Experiment1() {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<motion.div
				animate={{
					scale: 1.5,
					transition: { duration: 4 },
				}}
			>
				<h1>Page Experiment 1</h1>
			</motion.div>
		</div>
	);
}
