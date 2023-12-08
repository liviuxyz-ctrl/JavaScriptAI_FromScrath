const canvas = document.getElementById("myCanvas")
canvas.height = window.innerHeight;
canvas.width = 200;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width * 0.9);
const car = new Car(100, 100, 30, 50);
car.drawCar(ctx);
animate();

function animate() {
	requestAnimationFrame(animate);
	canvas.height = window.innerHeight;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	road.draw(ctx);
	car.update();
	car.drawCar(ctx);
}

