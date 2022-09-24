let sideMenu = document.getElementById("sideMenu");
let menuBtn = document.getElementById("menuBtn");
let closeBtn = document.getElementById("closeBtn");
let themeToggler = document.querySelector(".theme-toggler");

// SHOW SIDEBAR
menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block";
});

// CLOSE SIDEBAR
closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
});



// let themeColor = document.body.classList.add('dark-theme-variables');


// // CHANGE THEME
// themeToggler.addEventListener("click", () =>{
//     let themeColor = document.body.classList.toggle('dark-theme-variables');

//     window.localStorage.setItem('theme', JSON.stringify(themeColor));

//     if (localStorage.getItem('theme') === false) {
//         console.log('im dark')
//     } else {
//         console.log('im light')
//     }

//     themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
//     themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");

// });

// let body;


function change() {
    let body = document.body;
        body.classList.toggle("dark-theme-variables");

    if (body.classList.contains("dark-theme-variables")) {
        //if class was added to body
        localStorage.setItem("background", "dark-theme-variables");
        //save information in "background" localStorage variable, use dark-mode class name
    } else {
        localStorage.setItem("background", "");
        //if class was removed set background" localStorage variable to null
    } switch (themeToggler) {
        default :
        themeToggler.querySelector('span:nth-child(1)').classList.add('active');
            break;
        case 1 :
            themeToggler.querySelector('span:nth-child(1)').classList.add('active');
            break;
    }

    // themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    // themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

}



// function getDarkModa() {
//     if (document.body.classList.contains('dark-theme-variables')) {
//         document.body.localStorage.getItem('background');
//     } else {
//         document.body.localStorage.setItem("background", "");
//     }
// }



// window.onload=() => {
//     let themm = localStorage.getItem('background');

//     if (themm === 'background') {
//         document.body.classList.add('dark-theme-variables')
//     } else {
//         document.body.classList.remove('dark-theme-variables')
//     }
// }

document.addEventListener("DOMContentLoaded", function (event) {
    //when loading document
    let background = localStorage.getItem("background");
    // get localStorage var background
    if (background !== null) {
        // if its not null and empty
        document.body.className += background;
        //add class to body
    }
});











// window.onload = () => {
//     if (window.localStorage.key('theme') === true) {
//         document.body.classList.add('dark-theme-variables');
//         localStorage.getItem('theme')
//     } else {
//         document.body.classList.remove('dark-theme-variables');
//     };
// }

// if (document.body.classList.contains('dark-theme-variables')) {
//     window.localStorage.setItem('theme', JSON.stringify(document.body))
// } else {
//     document.body = document.body;
// }
// window.localStorage.removeItem('theme');





// FILL ORDERS TABLE
orders.forEach(order => {
    const tr = document.createElement('tr');
    const trcontent = `
        <tr>
            <td>${order.productName}</td>
            <td>${order.productNumber}</td>
            <td>${order.paymentStatus}</td>
            <td class="${order.shipping === 'Declined' ? 'success' : order.shipping === 'pending' ? 'warning' : 'primary'}">${order.shipping}</td>
            <td class="primary"> Details</td >
        </tr>
    `
    tr.innerHTML = trcontent;
    document.getElementById('tbody').appendChild(tr);
})