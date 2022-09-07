const asideNavigationList = document.querySelector('.aside-navigation > ul');
const asideSection = document.querySelector('.section__aside');
const asideSectionContent = asideSection.nextElementSibling;
const contentHeadings = asideSectionContent.querySelectorAll('h3');

for (let i = 0; i < contentHeadings.length; i++) {
    contentHeadings[i].id = `heading-${i + 1}`;
    let listItem = document.createElement('li');
    listItem.classList.add('aside-navigation__item');
    let itemLink = document.createElement('a');
    itemLink.href = `#heading-${i + 1}`;
    itemLink.innerHTML = contentHeadings[i].textContent;
    listItem.appendChild(itemLink);
    asideNavigationList.appendChild(listItem);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.aside-navigation__item').forEach((link) => {
                const navigationLink = link.querySelector('a');
                link.classList.toggle(
                    'aside-navigation__item_active',
                    navigationLink.getAttribute('href').replace('#', '') === entry.target.id
                );
            });
        }
    });
}, {
    threshold: 1,
});

contentHeadings.forEach(
    (target) => observer.observe(target)
);
