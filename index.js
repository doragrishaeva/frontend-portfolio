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
            {id : 1, name: 'Mortgage Calculator', img: 'images/mortgage.png', github:'https://github.com/doragrishaeva/mortgage-calculator', link: 'https://doragrishaeva.github.io/mortgage-calculator/', description: "Example of mortgage calculator on Vue js", categories: ['Frameworks'], subCategories: ['BEM Methodology', 'Adaptive design', 'SCSS', 'Vue JS'] },
            {id : 2, name: 'Shopping List', img: 'images/jquery-table.JPG', github:'https://github.com/doragrishaeva/jquery-table', link: 'https://doragrishaeva.github.io/jquery-table/', description: 'A single page app for shopping built on JQuery', categories: ['Components'], subCategories: ['JQuery', 'Bootstrap'] },
            {id: 3, name: 'Ravenous', img: 'images/ravenous.PNG', github:'https://github.com/doragrishaeva/ravenous', link: 'https://doragrishaeva.github.io/ravenous/', description: 'Restaurant searcher on React.js', categories: ['Frameworks', 'REST API'], subCategories: ['React JS', 'REST API']},
            {id : 4, name: 'Singolo', img: 'images/singolo.png', github:'https://github.com/doragrishaeva/singolo', link: 'https://doragrishaeva.github.io/singolo/', description: "Example of single page markup - Singolo", categories: ['Markup'], subCategories: ['BEM Methodology', 'JQuery', 'Adaptive design'] },
            {id : 5, name: 'Webdev', img: 'images/webdevd.PNG', github:'https://github.com/doragrishaeva/webdev', link: 'https://doragrishaeva.github.io/webdev/', description: 'Example of single page markup built on SCSS', categories: ['Markup'], subCategories: ['BEM Methodology', 'Adaptive design', 'SCSS'] },
            {id: 6, name: 'Rhyme Maker', img: 'images/rhyme-maker.PNG', github:'https://github.com/doragrishaeva/rhyme-maker', link: 'https://doragrishaeva.github.io/rhyme-maker/', description: 'A single page app for searching rhymes', categories: ['REST API'], subCategories: ['REST API'] },
            // {id : 7, name: 'Barbershop', img: '', link: '', description: '', categories: ['Frameworks'], subCategories: ['БЭМ', 'SCSS', 'Webpack', 'Vue', 'Adaptive design', 'Bootstrap'] },
            // {id : 8, name: 'Movie Searcher', img: '', link: '', description: '', categories: ['Frameworks'], subCategories: ['React', 'БЭМ', 'SCSS', 'Webpack'] },
            // {id : 9, name: 'OOP Hamburger', img: '', link: '', description: '', categories: ['Other'], subCategories: ['Other'] },  
            // {id : 10, name: 'Sing birds', img: '', link: '', description: '', categories: ['Frameworks'], subCategories: ['React', 'БЭМ', 'SCSS', 'Webpack'] }, 
        ],
        categories: ['Mark-up', 'Vanilla JS', 'Frameworks', 'REST API', 'Components', 'Other'],
    },
   
})