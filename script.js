document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('header');
    if (navbar && header) {
        const headerHeight = header.offsetHeight;
    
        window.addEventListener('scroll', () => {
            if (window.scrollY > headerHeight - 10) //had to adjust for about
            {
                navbar.classList.remove('hidden-nav');
            }
            else {
                navbar.classList.add('hidden-nav');
            }
        });
    }

    
    const images = document.querySelectorAll("#slideshow img");
    const randomIndex = Math.floor(Math.random() * images.length);
    images.forEach((img, index) => {
        img.classList.toggle("active", index === randomIndex);
    });
});
