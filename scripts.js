document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('show');
});

document.querySelectorAll('#menu a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelectorAll('.page').forEach(function(page) {
            page.classList.remove('active');
        });
        document.getElementById(link.getAttribute('href').substring(1)).classList.add('active');
        document.getElementById('menu').classList.remove('show');
    });
});
