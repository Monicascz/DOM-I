const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//NAVIGATION LINKS
const navItems = document.querySelectorAll('a')
// navItems[0].textContent = siteContent.nav["nav-item-1"]
// navItems[1].textContent = siteContent.nav["nav-item-2"]
// navItems[2].textContent = siteContent.nav["nav-item-3"]
// navItems[3].textContent = siteContent.nav["nav-item-4"]
// navItems[4].textContent = siteContent.nav["nav-item-5"]
// navItems[5].textContent = siteContent.nav["nav-item-6"]
 
//OR FOR LOOP VERSION
for (let i=0; i<navItems.length; i++){
  navItems[i].innerHTML = siteContent['nav'][`nav-item-${i+1}`]
}

const navItemsArr = Array.from(navItems)
//CHANGING NAV LINK COLORS
let firstAnchor = document.createElement('a')
firstAnchor.textContent = "TestAnchor" 
firstAnchor.href = "#"
document.querySelector('nav').prepend(firstAnchor)


navItemsArr.push(firstAnchor)
// console.log(navItemsArr)

navItemsArr.forEach(item=> {
  item.style.color = "orange";
})
// firstAnchor.style.color = "orange";


const navIMG = document.querySelector('#logo-img')
navIMG.src = siteContent.nav['img-src']


//H1 HEADER //
const ctaTitle = document.querySelector('h1');
ctaTitle.textContent = siteContent.cta["h1"];
ctaTitle.innerHTML = siteContent.cta["h1"].split(' ').join('<br/>');

//button
ctaTitle.nextElementSibling.textContent = siteContent.cta['button'];

//HEADER IMAGE
const headerIMG = document.querySelector('#cta-img');
headerIMG.src = siteContent.cta['img-src'];

//MAIN CONTENT

const mainH4 = document.querySelectorAll('h4')
mainH4[0].textContent = siteContent["main-content"]["features-h4"]
mainH4[1].textContent = siteContent["main-content"]["about-h4"]
mainH4[2].textContent = siteContent["main-content"]["services-h4"]
mainH4[3].textContent = siteContent["main-content"]["product-h4"]
mainH4[4].textContent = siteContent["main-content"]["vision-h4"]


const mainCont = document.querySelectorAll('.top-content .text-content p')
mainCont[0].textContent = siteContent["main-content"]["features-content"]
mainCont[1].textContent = siteContent["main-content"]["about-content"]

document.querySelector('#middle-img').src = siteContent["main-content"]["middle-img-src"]



const bottomCont = document.querySelectorAll('.bottom-content .text-content p')
bottomCont[0].textContent = siteContent["main-content"]["services-content"]
bottomCont[1].textContent = siteContent["main-content"]["product-content"]
bottomCont[2].textContent = siteContent["main-content"]["vision-content"]

//BOTTOM SECTION CONTACT
mainH4[5].textContent = siteContent.contact["contact-h4"]
const contactP = document.querySelectorAll('.contact p')

contactP[1].textContent = siteContent.contact.phone
contactP[2].textContent = siteContent.contact.email


contactP[0].innerHTML = siteContent.contact.address.split('t S').join('t <br/> S')


//FOOTER
const footer = document.querySelector('footer p')
footer.textContent = siteContent.footer.copyright




