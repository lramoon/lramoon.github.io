window.addEventListener("load", () => {
	const loader_out = () => {
		let loader = document.querySelector(".wave_work");
		loader.classList.toggle("wave_out");
		const hidden_loader = () => {
			loader.classList.add("d-none");
			let main = document.querySelector(".main");
			main.classList.remove("d-none");
		};
		setTimeout(hidden_loader, 1000);
	};
	setTimeout(loader_out, 1500);
	// Seleccionamos todos los videos dentro de las secciones con las clases específicas
	const videos = document.querySelectorAll(".background-video");

	videos.forEach((video) => {
		// Agrega evento para reproducir cuando el mouse entra
		video.parentElement.addEventListener("mouseenter", () => {
			video.play();
		});

		// Agrega evento para pausar y reiniciar cuando el mouse sale
		video.parentElement.addEventListener("mouseleave", () => {
			video.pause();
			video.currentTime = 0; // Reinicia el video al inicio
		});
	});
});
