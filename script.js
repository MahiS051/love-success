const target = document.getElementById("root");
let yes = document.getElementById('yes');

yes.addEventListener('click', ()=>{
    alert(" yess I love you 💕😍😘 ")
})

document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('target');

    noButton.addEventListener('mouseover', () => {
        const container = document.getElementById('container');
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});
