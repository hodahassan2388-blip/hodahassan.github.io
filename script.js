function openMenu() {
  document.getElementById("sidebar").style.left = "0";
  document.getElementById("overlay").style.display = "block";
}

function closeMenu() {
  document.getElementById("sidebar").style.left = "-220px";
  document.getElementById("overlay").style.display = "none";
}
 const menuBtn = document.querySelector('.line'); // زرار الـ 3 شرط
    const navMenu = document.querySelector('nav');   // القائمة

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // عشان الضغطة متتأثرش بحاجات تانية
        navMenu.classList.toggle('active'); // يضيف أو يشيل كلاس active
    });

    // اختياري: لو دوست في أي مكان في الصفحة والقائمة مفتوحة.. تقفل
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });