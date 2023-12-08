class Car {
	constructor(carX, carY, width, height) {
		this.carX = carX;
		this.carY = carY;
		this.width = width;
		this.height = height;

		this.speed = 0;
		this.acceleration = 0.2;
		this.maxSpeed = 3;
		this.friction = 0.05;
		this.angle = 0;

		this.controls = new Controls();
	}

	update() {
		this.handleControls();
		this.limitSpeed();
		this.regulateFriction();
		this.updatePosition();
	}

	handleControls() {
		const { forward, reverse, left, right } = this.controls;
		if (forward) this.speed += this.acceleration;
		if (reverse) this.speed -= this.acceleration;
		if (this.speed != 0){
			const flip = this.speed < 0 ? 1 : -1;
			if (left) this.angle += 0.03 * flip
			if (right) this.angle -= 0.03 * flip;
		}

	}

	limitSpeed() {
		const maxReverseSpeed = -this.maxSpeed / 2;
		if (this.speed > this.maxSpeed) this.speed = this.maxSpeed;
		if (this.speed < maxReverseSpeed) this.speed = maxReverseSpeed;
	}

	regulateFriction() {
		if (this.speed > 0) this.speed =
			Math.max(0, this.speed - this.friction);
		if (this.speed < 0) this.speed =
			Math.min(0, this.speed + this.friction);
	}

	updatePosition() {
		this.carX += Math.sin(this.angle) * this.speed;
		this.carY -= Math.cos(this.angle) * this.speed;
	}

	drawCar(ctx) {
		ctx.save();
		ctx.translate(this.carX, this.carY);
		ctx.rotate(-this.angle);
		ctx.beginPath();
		ctx.rect(-this.width / 2,
			-this.height / 2,
			this.width, this.height,
		);
		ctx.fill();

		ctx.restore();
	}
}
