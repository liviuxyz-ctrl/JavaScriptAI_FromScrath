class Controls {
	constructor() {
		this.left = false;
		this.right = false;
		this.up = false;
		this.revers = false;

		this.#addKeyboardListeners();
	}

	#addKeyboardListeners() {
		document.addEventListener('keydown', (event) => {
			switch (event.code) {
				case 'ArrowLeft':
					this.left = true;
					break;
				case 'ArrowRight':
					this.right = true;
					break;
				case 'ArrowUp':
					this.up = true;
					break;
				case 'ArrowDown':
					this.revers = true;
					break;
			}
			console.table(this);
		});
		document.addEventListener('keyup', (event) => {
			switch (event.code) {
				case 'ArrowLeft':
					this.left = false;
					break;
				case 'ArrowRight':
					this.right = false;
					break;
				case 'ArrowUp':
					this.up = false;
					break;
				case 'ArrowDown':
					this.revers = false;
					break;
			}
		});
		console.table(this);
	}
}
