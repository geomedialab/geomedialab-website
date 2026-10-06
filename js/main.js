document.addEventListener('DOMContentLoaded', function () {
    // mobile menu: the header carries the open/closed state, CSS does the rest
    const header = document.querySelector('.site-header');
    document.getElementById('open').addEventListener('click', () => header.classList.add('nav-open'));
    document.getElementById('close').addEventListener('click', () => header.classList.remove('nav-open'));

    // heading anchor links: smooth-scroll and keep the hash in the URL
    document.querySelectorAll('.heading-wrapper').forEach((wrapper) => {
        wrapper.addEventListener('click', function (event) {
            const link = wrapper.querySelector('a.anchor');
            if (!link || event.target.closest('a') !== link) return;
            event.preventDefault();
            document.getElementById(link.hash.slice(1)).scrollIntoView({ behavior: 'smooth' });
            history.pushState(null, '', link.hash);
        });
    });

    // external links open in a new tab
    document.querySelectorAll('a[href]').forEach(function (link) {
        if (link.hostname && link.hostname !== window.location.hostname) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener');
        }
    });
});
