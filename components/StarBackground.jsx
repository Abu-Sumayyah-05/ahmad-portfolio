import { useState, useEffect, useCallback } from "react";

export const StarBackground = () => {
	const [stars, setStars] = useState([]);
	const [meteors, setMeteors] = useState([]);

	const generateStars = useCallback(() => {
		const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
		const newStars = [];
		for (let i = 0; i < numberOfStars; i++) {
			newStars.push({
				id: i,
				size: Math.random() * 3 + 1,
				x: Math.random() * 100,
				y: Math.random() * 100,
				opacity: Math.random() * 0.5 + 0.5,
				animationDuration: Math.random() * 4 + 2,
			});
		}
		setStars(newStars);
	}, []);

	const generateMeteors = useCallback(() => {
		const numberOfMeteors = 4;
		const newMeteors = [];

		for (let i = 0; i < numberOfMeteors; i++) {
			newMeteors.push({
				id: i,
				size: Math.random() * 2 + 1,
				x: Math.random() * 100,
				y: Math.random() * 20,
				delay: Math.random() * 15,
				animationDuration: Math.random() * 3 + 3,
			});
		}
		setMeteors(newMeteors);
	}, []);

	useEffect(() => {
		generateStars();
		generateMeteors();

		const handleResize = () => generateStars();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [generateStars, generateMeteors]);

	return (
		<div>
			{stars.map(star => (
				<div key={star.id} style={{
					position: 'absolute',
					width: star.size,
					height: star.size,
					backgroundColor: 'white',
					borderRadius: '50%',
					opacity: star.opacity,
					left: `${star.x}%`,
					top: `${star.y}%`,
					animationDuration: `${star.animationDuration}s`,
				}} />
			))}
			{meteors.map(meteor => (
				<div key={meteor.id} style={{
					position: 'absolute',
					width: meteor.size,
					height: meteor.size,
					backgroundColor: 'yellow',
					borderRadius: '50%',
					left: `${meteor.x}%`,
					top: `${meteor.y}%`,
					animationDuration: `${meteor.animationDuration}s`,
					animationDelay: `${meteor.delay}s`,
				}} />
			))}
		</div>
	);
};
