export const useRandomIcons = async (count = 9) => {
	const icons = import.meta.glob("@/assets/svg/stealable/*.svg");

	// Get all available icon paths
	const iconPaths = Object.keys(icons);

	if (iconPaths.length < count) {
		console.warn(`Only ${iconPaths.length} icons available, returning all.`);
		count = iconPaths.length;
	}

	// Shuffle and pick `count` random icons
	const randomIcons = iconPaths
		.sort(() => 0.5 - Math.random()) // Shuffle array
		.slice(0, count);

	// Import the selected icons
	const loadedIcons = await Promise.all(
		randomIcons.map((path) => icons[path]())
	);

	return loadedIcons.map((module: any, index) => ({
		path: randomIcons[index],
		component: module.default
	}));
};
