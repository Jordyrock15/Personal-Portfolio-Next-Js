export const BorderAnimation = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.3,
		},
	},
};

export const BorderAnimationChildren = {
	hidden: { x: -800 },
	show: {
		x: 0,
		transition: { duration: 1 },
	},
};

export const SlideInUp = {
	hidden: { y: 100 },
	show: {
		y: 0,
		transition: { duration: 1 },
	},
};

export const SlideInRight = {
	hidden: {
		x: -200,
	},
	show: {
		x: 0,
		transition: { duration: 1 },
	},
};

export const scrollReveal = {
	hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			delay: 0.3,
			duration: 0.75,
		},
	},
};

export const scrollRevealRight = {
	hidden: { opacity: 0, x: -200 },
	show: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 0.2,
			duration: 0.75,
		},
	},
};

export const scrollRevealChildren = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,

		transition: { delay: 0.2, duration: 1 },
	},
};
