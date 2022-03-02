import projects from './projects.js';

window.addEventListener('load', () => {
    const grid = document.querySelector('.projects__grid');
    projects.forEach(el => {
        const node = document.createElement('a');
        node.setAttribute('href', el.link);
        node.setAttribute('target', '_blank');
        node.classList.add('projects-item');

        const projectName = document.createElement('div');
        projectName.classList.add('projects-item__name');
        projectName.textContent = el.name;

        const projectDescription = document.createElement('div');
        projectDescription.classList.add('projects-item__description');
        projectDescription.textContent = el.description;

        const flexBlock = document.createElement('div');
        flexBlock.classList.add('project-item__content');

        const projectImg = document.createElement('img');
        projectImg.classList.add('projects-item__img');
        projectImg.setAttribute('src', el.img);

        const projectTechs = document.createElement('div');

        el.categories.forEach(category => {
            const projectTech = document.createElement('div');
            projectTech.classList.add('projects-item__tech');
            projectTech.textContent = category;
            projectTechs.append(projectTech);
        });

        flexBlock.append(projectTechs, projectImg);
        node.append(projectName, projectDescription, flexBlock);
        grid.append(node);
    });
});

const navigationLinks = document.querySelectorAll('.navigation__link');
const sections = document.querySelectorAll('[data-link]');

navigationLinks.forEach(el => {
    el.addEventListener('click', (event) => {
        navigationLinks.forEach(el => el.classList.remove('navigation__link_active'));
        event.currentTarget.classList.add('navigation__link_active');

        let currentEl;
        sections.forEach(el => el.dataset.link === event.target.dataset.href && (currentEl = el));
        currentEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});
