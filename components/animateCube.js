"use client";

import { motion } from "framer-motion";

export function AnimatedCube() {
	return (
		<motion.svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 256 256"
			className="w-full h-full"
			initial="hidden"
			animate="visible"
		>
			<defs>
				<clipPath id="cube-clip">
					<rect width="256" height="256" x="0" y="0" />
				</clipPath>
			</defs>
			<g clipPath="url(#cube-clip)">
				<motion.g
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					transform="matrix(1,0,0,1,37.882,73.02)"
				>
					{/* Main cube outline */}
					<g transform="matrix(1,0,0,1,90.118,54.98)">
						<motion.path
							fill="#fff"
							d="M0.001,48L-83.138,0L0,-48L83.138,0L0.001,48z"
							initial={{ pathLength: 0 }}
							animate={{ pathLength: 1 }}
							transition={{ duration: 1, ease: "easeInOut" }}
						/>
						<motion.path
							fill="none"
							stroke="#000"
							strokeWidth="3"
							d="M0.001,48L-83.138,0L0,-48L83.138,0L0.001,48z"
							initial={{ pathLength: 0 }}
							animate={{ pathLength: 1 }}
							transition={{ duration: 1, ease: "easeInOut" }}
						/>
					</g>

					{/* Inner lines */}
					<g>
						<motion.path
							fill="none"
							stroke="#000"
							strokeWidth="3"
							d="M131.543,42.98L110.848,54.98L110.854,54.98L131.548,42.98L131.543,42.98z"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5 }}
						/>
						<motion.path
							fill="none"
							stroke="#000"
							strokeWidth="3"
							d="M110.854,54.98L90.103,42.98L110.86,30.98L131.56,42.98L110.854,54.98z"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.7 }}
						/>
					</g>
				</motion.g>
			</g>
		</motion.svg>
	);
}
