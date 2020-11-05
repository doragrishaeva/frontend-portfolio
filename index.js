$(document).ready(() => {
    //Scroll to section id
    $('.navigation__link').mPageScroll2id({
        offset:70
    });
});

const app = new Vue({
    el: '#portfolio',
    data: {
        projects: [
            // {id : 1, name: 'Yoga', img: '', link: '', description: '', categories: ['Mark-up', 'Frameworks'], subCategories: ['БЭМ', 'SCSS', 'Webpack', 'Vue', 'Adaptive design', 'Bootstrap'] },
            // {id : 2, name: 'Barbershop', img: '', link: '', description: '', categories: ['Frameworks'], subCategories: ['БЭМ', 'SCSS', 'Webpack', 'Vue', 'Adaptive design', 'Bootstrap'] },
            // {id : 3, name: 'Email', img: '', link: '', description: '', categories: ['Mark-up'], subCategories: ['Email'] },
            {id : 4, name: 'Singolo', img: '/images/singolo.png', github:'https://github.com/doragrishaeva/singolo', link: 'https://doragrishaeva.github.io/singolo/', description: "Example of single page markup - Singolo", categories: ['Markup'], subCategories: ['BEM Methodology', 'JQuery', 'Adaptive design'] },
            // {id : 5, name: 'Calculator', img: '', link: '', description: '', categories: ['Vanilla JS'], subCategories: ['Vanilla JS'] },
            // {id : 6, name: 'Shelter', img: '', link: '', description: '', categories: ['Mark-up'], subCategories: ['БЭМ', 'SCSS', 'Adaptive design'] },
            {id : 7, name: 'Webdev', img: '/images/webdevd.png', github:'https://github.com/doragrishaeva/webdev', link: 'https://doragrishaeva.github.io/webdev/', description: 'Example of single page markup built on SCSS', categories: ['Markup'], subCategories: ['BEM Methodology', 'Adaptive design', 'SCSS'] },
            // {id : 8, name: 'Weather Forecast', img: '', link: '', description: '', categories: ['REST API'], subCategories: ['API'] },
            // {id : 9, name: 'ToDo List', img: '', link: '', description: '', categories: ['Components', 'Vanilla JS'], subCategories: ['Components', 'Vanilla JS'] },
            // {id : 10, name: 'Movie Searcher', img: '', link: '', description: '', categories: ['Frameworks'], subCategories: ['React', 'БЭМ', 'SCSS', 'Webpack'] },
            // {id : 11, name: 'Virtual Keyboard', img: '', link: '', description: '', categories: ['Vanilla JS'], subCategories: ['Vanilla JS'] },
            // {id : 12, name: 'OOP Hamburger', img: '', link: '', description: '', categories: ['Other'], subCategories: ['Other'] },
            {id : 13, name: 'Shopping List', img: '/images/jquery-table.jpg', github:'https://github.com/doragrishaeva/jquery-table', link: 'https://doragrishaeva.github.io/jquery-table/', description: 'A single page app for shopping built on JQuery', categories: ['Components'], subCategories: ['JQuery', 'Bootstrap'] },
            // {id : 14, name: 'Tag Game', img: '', link: '', description: '', categories: ['Vanilla JS'], subCategories: ['Vanilla JS'] },
            // {id : 15, name: 'Notebook', img: '', link: '', description: '', categories: ['Vanilla JS'], subCategories: ['Vanilla JS'] },
            // {id : 16, name: 'Drag and Drop List', img: '', link: '', description: '', categories: ['Vanilla JS', 'Components'], subCategories: ['Vanilla JS', 'Components'] },
            // {id : 17, name: 'Sing birds', img: '', link: '', description: '', categories: ['Frameworks'], subCategories: ['React', 'БЭМ', 'SCSS', 'Webpack'] },
            // {id : 18, name: 'Banners Rotator', img: '', link: '', description: '', categories: ['Components'], subCategories: ['Components'] },
            // {id : 19, name: 'Two Steps Registration', img: '', link: '', description: '', categories: ['Other'], subCategories: ['Other'] },
            {id: 20, name: 'Rhyme Maker', img: '/images/rhyme-maker.png', github:'https://github.com/doragrishaeva/rhyme-maker', link: 'https://doragrishaeva.github.io/rhyme-maker/', description: 'A single page app for searching rhymes', categories: ['REST API'], subCategories: ['REST API'] },
            {id: 21, name: 'Ravenous', img: '/images/ravenous.png', github:'https://github.com/doragrishaeva/ravenous', link: 'https://doragrishaeva.github.io/ravenous/', description: 'Restaurant searcher on React.js', categories: ['Frameworks', 'REST API'], subCategories: ['React JS', 'REST API']}
        ],
        categories: ['Mark-up', 'Vanilla JS', 'Frameworks', 'REST API', 'Components', 'Other'],
    },
   
})