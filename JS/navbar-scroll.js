window.addEventListener('scroll', (e) => {
    const nav = document.querySelector('.navbar');

    if (window.scrollY > 0)
    {
        nav.style.setProperty("box-shadow", "0px 0px 10px black");
    }
    else
    {
        nav.style.removeProperty("box-shadow", "0px 0px 10px black");
    }
});