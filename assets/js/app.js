const navbarbtn = () => {
    document.getElementById("name").classList.toggle("show-navbar")
    document.getElementById("rotates").classList.toggle("color-oranges")
    document.getElementById("transparent").classList.toggle("color-oranges")
    document.getElementById("rotates-2").classList.toggle("color-oranges")
    document.body.classList.toggle("overflow-hidden")
}

const lenis = new Lenis({
    autoRaf: true,
    duration: 7,
    lerp: 0.5,
});

lenis.on('scroll', (e) => {
    console.log(e);
});