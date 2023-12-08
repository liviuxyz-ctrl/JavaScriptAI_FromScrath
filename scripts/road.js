class Road {
	constructor(roadX, width, laneCount = 3) {
		this.roadX = roadX;
		this.width = width;
		this.laneCount = laneCount
		this.left = roadX - width / 2;
		this.right = roadX + width / 2;
		const infinity = 999999999;
		this.top = -infinity;
		this.bottom = infinity;
	}
	draw(ctx) {
		ctx.lineWidth = 5;
		ctx.strokeStyle = "white";

		for (let i = 0; i <= this.laneCount; i++) {
			// console.log(this.laneCount);
			console.log(i);
			let x = lerp(this.left, this.right, i / this.laneCount);
			if (i > 0 && i < this.laneCount) {
				ctx.setLineDash([20, 20]);
			} else {
				ctx.setLineDash([]);
			}
			ctx.beginPath();
			ctx.moveTo(x, this.top);
			ctx.lineTo(x, this.bottom);
			ctx.stroke();
		}
	}
}
