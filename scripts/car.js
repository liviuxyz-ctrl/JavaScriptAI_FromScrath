class Car {
	constructor(carX, carY, width, height) {
		this.carX = carX;
		this.carY = carY;
		this.width = width;
		this.height = height;

		this.controls = new Controls();
	}

	drawCar(ctx) {
		ctx.beginPath();
		ctx.rect(this.carX - this.width / 2,
			this.carY - this.height / 2,
			this.width, this.height,
		);
		ctx.fill();
	}
}
