function openMenu() {
  document.getElementById("sidebar").style.left = "0";
  document.getElementById("overlay").style.display = "block";
}

function closeMenu() {
  document.getElementById("sidebar").style.left = "-220px";
  document.getElementById("overlay").style.display = "none";
}
 const menuBtn = document.querySelector('.line'); 
    const navMenu = document.querySelector('nav');   

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        navMenu.classList.toggle('active'); 
    });

   
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
