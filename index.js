const texts = ['Appetizing', 'Classic', 'Creamy', 'Delicious', 'Extraordinary','Fantastic', 'Intense', 'Luscious', 'mouth-watering' ];

const randomFood = (name) => {
	const text = texts[Math.floor(Math.random() * texts.length)];
	const foodMessage = `${name} is ${text}`;
	console.log(foodMessage);
};

module.exports = {
	randomFood
};

