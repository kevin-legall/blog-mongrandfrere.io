// scrollNav //

const scrollNav = document.querySelector(".primary-navigation");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    scrollNav.classList.add("scrolled");
  } else {
    scrollNav.classList.remove("scrolled");
  }
});

// searchBar //

const things = [

    { name: 'Les analyses de CV', anchor:"blog-category-les-analyses-de-cv.html" },
    { name: 'Lettre de motivation', anchor:"blog-category-lettre-de-motivation.html" },
    { name: 'Les Tutos D\'Hugo', anchor:"blog-category-les-tutos-hugo.html" },
  ];
  
  const searchInput = document.getElementById('searchinput');
  
  
  searchInput.addEventListener('keyup', () => {
    const input = searchInput.value;
  
    const result = things.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
  
    let suggestion = '';
  
    if (input != '') {
      result.forEach(resultItem =>
        suggestion +=`
          <a href="${resultItem.anchor}" class="result-anchor"><div class="suggestion">${resultItem.name}</div></a>
        `
      )
    }
  
      document.getElementById('suggestions').innerHTML = suggestion;
  })
  
// yearMoving //

var today = new Date();
var annee = today.getFullYear();
var year = document.getElementById("year");
year.innerHTML = annee;
