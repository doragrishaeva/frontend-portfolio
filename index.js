const app = new Vue({
    el: '#portfolio',
    data: {
        projects: [
            {id : 0, name: 'Yoga', img: '', link: '', description: '', categories: ['Mark-up', 'Frameworks'], subCategories: ['БЭМ', 'SCSS', 'Webpack', 'Vue', 'Adaptive design', 'Bootstrap'] },
            {id : 1, name: 'Barbershop', img: '', link: '', description: '', categories: ['Frameworks'], subCategories: ['БЭМ', 'SCSS', 'Webpack', 'Vue', 'Adaptive design', 'Bootstrap'] },
            {id : 2, name: 'Email', img: '', link: '', description: '', categories: ['Mark-up'], subCategories: ['Email'] },
            {id : 3, name: 'Singolo', img: 'images/singolo.png', link: 'https://doragrishaeva.github.io/singolo/', description: '', categories: ['Mark-up'], subCategories: ['БЭМ', 'JQuery', 'Adaptive design'] },
            {id : 4, name: 'Calculator', img: '', link: '', description: '', categories: ['Vanilla JS'], subCategories: ['Vanilla JS'] },
            {id : 5, name: 'Shelter', img: '', link: '', description: '', categories: ['Mark-up'], subCategories: ['БЭМ', 'SCSS', 'Adaptive design'] },
            {id : 6, name: 'Webdev', img: '', link: '', description: '', categories: ['Mark-up'], subCategories: ['БЭМ', 'Adaptive design'] },
            {id : 7, name: 'Weather Forecast', img: '', link: '', description: '', categories: ['REST API'], subCategories: ['API'] },
            {id : 8, name: 'ToDo List', img: '', link: '', description: '', categories: ['Components', 'Vanilla JS'], subCategories: ['Components', 'Vanilla JS'] },
            {id : 9, name: 'Movie Searcher', img: '', link: '', description: '', categories: ['Frameworks'], subCategories: ['React', 'БЭМ', 'SCSS', 'Webpack'] },
            {id : 10, name: 'Virtual Keyboard', img: '', link: '', description: '', categories: ['Vanilla JS'], subCategories: ['Vanilla JS'] },
            {id : 11, name: 'OOP Hamburger', img: '', link: '', description: '', categories: ['Other'], subCategories: ['Other'] },
            {id : 12, name: 'JQuery Table', img: '', link: '', description: '', categories: ['Components'], subCategories: ['JQuery'] },
            {id : 13, name: 'Tag Game', img: '', link: '', description: '', categories: ['Vanilla JS'], subCategories: ['Vanilla JS'] },
            {id : 14, name: 'Notebook', img: '', link: '', description: '', categories: ['Vanilla JS'], subCategories: ['Vanilla JS'] },
            {id : 15, name: 'Drag and Drop List', img: '', link: '', description: '', categories: ['Vanilla JS', 'Components'], subCategories: ['Vanilla JS', 'Components'] },
            {id : 16, name: 'Sing birds', img: '', link: '', description: '', categories: ['Frameworks'], subCategories: ['React', 'БЭМ', 'SCSS', 'Webpack'] },
            {id : 17, name: 'Banners Rotator', img: '', link: '', description: '', categories: ['Components'], subCategories: ['Components'] },
            {id : 18, name: 'Two Steps Registration', img: '', link: '', description: '', categories: ['Other'], subCategories: ['Other'] },
        ],
        categories: ['Mark-up', 'Vanilla JS', 'Frameworks', 'REST API', 'Components', 'Other'],
    },
    computed: {
        markUpProjects() {
            return this.projects.filter(item => item.categories.indexOf('Mark-up') != -1)
        },
        vanillaJSProjects() {
            return this.projects.filter(item => item.categories.indexOf('Vanilla JS') != -1)
        },
        frameworksProjects() {
            return this.projects.filter(item => item.categories.indexOf('Frameworks') != -1)
        },
        restApiProjects() {
            return this.projects.filter(item => item.categories.indexOf('REST API') != -1)
        },
        componentsProjects() {
            return this.projects.filter(item => item.categories.indexOf('Components') != -1)
        },
        otherProjects() {
            return this.projects.filter(item => item.categories.indexOf('Other') != -1)
        },
    }
})