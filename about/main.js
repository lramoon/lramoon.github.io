window.addEventListener("load", () => {
    const loader_out = () => {
        let loader = document.querySelector('.wave_about')
        loader.classList.toggle('wave_out')
        const hidden_loader = () => {
            loader.classList.add('d-none')
            let main = document.querySelector('.main')
            main.classList.remove('d-none')
        }
        setTimeout(hidden_loader, 1000)
    }
    setTimeout(loader_out, 1500)
})