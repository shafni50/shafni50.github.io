(function() {
    const projectData = [
        {
            imgSrc: "images/project-huddle-page.webp",
            pHeading: "Huddle Page",
            pDescription: "Huddle Page is a responsive landing page created as a solution to a Frontend Mentor challenge. It features a modern design with flexible layouts, allowing users to access information and interact with the content seamlessly.",
            pLink: 'https://shafni50.github.io/huddle-page/',
            pCode: 'https://github.com/shafni50/frontendmentor-projects/tree/main/huddle-landing-page',
            pImgAlt: 'A Responsive Landing Website Page',
            pTags: ['HTML', 'CSS', 'Flex', 'User Interaction', 'Resposive Design']
        }, {
            imgSrc: "images/project-dropdown-nav.jpg",
            pHeading: "Dropdown Navigation Page",
            pDescription: "Our Dropdown Navigation Page offers an array of stunning dropdown menus and seamless navigation features that enhance user experience. With a sleek design and intuitive functionality, it offers a delightful browsing experience.",
            pLink: 'https://shafni50.github.io/simple-dropdown-menu-page/',
            pCode: 'https://github.com/shafni50/frontendmentor-projects/tree/main/dropdown-menu-page',
            pImgAlt: 'A User-Interface with Impressive Dropdown Menus and Navigation',
            pTags: ['HTML', 'CSS', 'JS', 'Flex','Navigation', 'Dropdowns', 'Resposive Design']
          } ,{
            imgSrc: "images/project-order-page.webp",
            pHeading: "Order Card Component",
            pDescription: "The Order Card Component is a compact and stylish user interface component designed for displaying order summaries. It enhances user experience by providing a clear overview of order details in an attractive format",
            pLink: 'https://shafni50.github.io/ordersummarycard/',
            pCode: 'https://github.com/shafni50/frontendmentor-projects/tree/main/order-summary-component-main',
            pImgAlt: 'Stylish Component Card Design For Order Summaries',
            pTags: ['HTML', 'CSS', 'Flex', 'Order Summaries', 'Resposive Design']
        }, {
            imgSrc: "images/project-product-page.webp",
            pHeading: "Product Card Component",
            pDescription: " The Product Card Component is a versatile card design for showcasing product details. Its clean and visually appealing layout makes it ideal for e-commerce websites, enabling users to quickly evaluate product information.",
            pLink: 'https://shafni50.github.io/productcardcomponent/',
            pCode: 'https://github.com/shafni50/frontendmentor-projects/tree/main/product-preview-card-component-main',
            pImgAlt: 'A Versatile Card Design For Product Details',
            pTags: ['HTML', 'CSS', 'Flex', 'E-Commerce', 'Card design', 'Resposive Design']
        }
    ];

    const projectsContainer = document.querySelector('.project-container');
    projectData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        const tagsHtml = project.pTags.map(tag => `<pre class="tag">${tag}</pre>`).join(' ');
        projectCard.innerHTML = `
        <div class="project-card__image">
            <img src="${project.imgSrc}" alt="${project.pImgAlt}">
        </div>
        <div class="project-card__icons">
            <a href="${project.pCode}" target="_blank">
                <svg height="0.8em" viewBox="0 0 640 512">
                    <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z">
                    </path>
                </svg>
            </a>
            <a href="${project.pLink}" target="_blank">
                <svg height="0.8em" viewBox="0 0 384 512">
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z">
                    </path>
                </svg>
            </a>
        </div>
        <div class="project-card__content">
            <h3>${project.pHeading}</h3>
            <p>
                ${project.pDescription}
            </p>
            <div class="tags">${tagsHtml}</div>
        </div>
    `;
    //reason to give the div above instead of pre for tags is because it will give different tags (tags seperated)
        projectsContainer.appendChild(projectCard);
    });
    
    // single-page - project and skills
    function showPage(page) {
        document.querySelectorAll('.show-page').forEach(section => {
            section.style.display = 'none';
        });
        document.querySelectorAll('.show-page-heading').forEach(h2 => {
            h2.classList.remove('active');
        });
    
        document.getElementById(page).style.display = 'block';
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('skills').style.display = 'none';
    
        document.querySelectorAll('.show-page-heading').forEach(h2 => {
            h2.addEventListener('click', function() {
                showPage(this.getAttribute('data-page'));
                this.classList.add('active');
            });
        });
    });

    // hamburger
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');

        body.classList.toggle('nav-menu-active');
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');

            body.classList.remove('nav-menu-active');
        });
    });

})();
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});