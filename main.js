// MENU ARRAY
const menu  = [
    {
        id: 1,
        name: "Italian Pizza",
        category: "Dinner",
        price: "15$",
        img: "./img/menu-item1.jpeg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae sem nec nibh sodales finibus. Nunc sapien purus, tempor a fringilla at, cursus non leo. In lacinia neque nunc, nec efficitur est consectetur eget.",
    },
    {
        id: 2,
        name: "Avocado Toast & Egg",
        category: "Breakfast",
        price: "12$",
        img: "./img/menu-item2.jpeg",
        text: "Etiam augue libero, elementum sed nulla sit amet, mattis maximus tellus. Aenean ac molestie turpis. Nunc congue pellentesque orci, a gravida metus.",
    },
    {
        id: 3,
        name: "Salmon Quinoa Salad",
        category: "Dinner",
        price: "17$",
        img: "./img/menu-item3.jpeg",
        text: "In vitae lorem vel mauris vulputate finibus. Integer pharetra elit erat, sit amet ullamcorper neque porttitor at. Cras sed euismod augue.",
    },
    {
        id: 4,
        name: "Tempé Skewer & Chipotle",
        category: "Lunch",
        price: "15$",
        img: "./img/menu-item4.jpeg",
        text: "Mauris pulvinar metus quis nisi hendrerit, eget hendrerit lorem pellentesque. Cras nunc leo, tempor eu sollicitudin ut, vulputate sed nibh.",
    },
    {
        id: 5,
        name: "Classique Burger & Fries",
        category: "Dinner",
        price: "17$",
        img: "./img/menu-item5.jpeg",
        text: "Suspendisse justo leo, commodo vitae finibus at, gravida sit amet neque. Proin consequat, metus at finibus finibus, lacus libero tincidunt lectus, ac lacinia neque enim nec magna.",
    },
    {
        id: 6,
        name: "Cheese & Chocolate Cake",
        category: "Dessert",
        price: "7$",
        img: "./img/menu-item6.jpeg",
        text: "Pellentesque a lorem elit. Integer eu tristique neque, at laoreet orci.",
    },
    {
        id: 7,
        name: "Beef Bourgignon",
        category: "Lunch",
        price: "16$",
        img: "./img/menu-item7.jpeg",
        text: "Integer sit amet justo in magna iaculis molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed posuere magna nisi, a consectetur augue porta et. Aenean et dui quis nibh sollicitudin vulputate in et erat.",
    },
    {
        id: 8,
        name: "Pesto Pasta & Parmesan",
        category: "Lunch",
        price: "14$",
        img: "./img/menu-item8.jpeg",
        text: "In libero libero, aliquet ut pretium non, ultrices ac nisl. Proin cursus lorem mauris, vestibulum vulputate velit cursus quis.",
    },
    {
        id: 9,
        name: "Incredible Pancakes",
        category: "Breakfast",
        price: "15$",
        img: "./img/menu-item9.jpeg",
        text: "Sed urna elit, sodales eu nibh eget, iaculis tincidunt velit. Suspendisse sit amet tincidunt urna. Fusce fringilla, enim sed maximus ullamcorper, dolor lectus posuere sem, sit amet viverra sem massa vitae nibh.",
    },
    {
        id: 10,
        name: "Grilled Chicken Fahitas",
        category: "Lunch",
        price: "14$",
        img: "./img/menu-item10.jpeg",
        text: "Aenean interdum velit efficitur massa consequat, ut euismod magna gravida. Maecenas id quam suscipit, gravida tortor viverra, posuere metus. Curabitur commodo gravida lorem nec dignissim.",
    },
    {
        id: 11,
        name: "Sea Fruits Pho Soup",
        category: "Lunch",
        price: "17$",
        img: "./img/menu-item11.jpeg",
        text: "Nam efficitur mi nisi, id pretium mauris tempor et. Vestibulum porta mi a orci rutrum egestas. Morbi sed ipsum turpis. Nunc tempus ullamcorper dignissim.",
    },
    {
        id: 12,
        name: "Fruit for Thoughts",
        category: "Dessert",
        price: "9$",
        img: "./img/menu-item12.jpeg",
        text: "Suspendisse mollis nisi a massa feugiat, vitae maximus sapien ornare. Nullam vitae est molestie, scelerisque eros iaculis, efficitur ex.",
    },
];

const sectionCenter = document.querySelector('.section-center');

const btnWrapper = document.querySelector('.btn-wrapper');

window.addEventListener('DOMContentLoaded', function (){
    displayMenuItems(menu);
    displayCategoryBtns(menu);
})

function displayMenuItems(menuItems){

    // GO THROUGHT ARRAY TO CREATE DOM
    let displayMenu = menuItems.map(function(item){
        return `<article class="menu-item">
        <img src=${item.img} class="item-img" alt=${item.title}>
        <h4 class="item-name">${item.name}</h4>
        <h4 class="item-price">${item.price}</h4>              
        <p class="item-text">${item.text}</p>
        </article>`;
    });
    displayMenu = displayMenu.join("");
    // PUSH DOM IN HTML
    sectionCenter.innerHTML = displayMenu;
};

function displayCategoryBtns(menu){
    // GET ARRAY OF UNIQUE CATEGORIES 
    const categories = menu.reduce(function(values, item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
        // START ARRAY WITH THE ALL CATEGORY
    },['All']);

    // GO THROUGHT ARRAY TO CREATE DOM
    const categoryBtns = categories.map(function(category){
        return `<button type="button" class="filter-btn">${category}</button>`;
    }).join("");
    // PUSH DOM IN HTML
    btnWrapper.innerHTML = categoryBtns; 
    
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function(){
            if(btn.innerText === "All"){
                displayMenuItems(menu);
            }else {        
                const menuCategory = menu.filter(function (menuItem) {
                    if(menuItem.category === btn.innerText){
                        return menuItem;
                    }
                });
                displayMenuItems(menuCategory);
            }
        });
    });    
};