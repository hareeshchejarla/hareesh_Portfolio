document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var headerNav = document.getElementById('main-nav-sec');
        if (window.scrollY >= 50) {
            headerNav.classList.add('fixed-top');
        } else {
            headerNav.classList.remove('fixed-top');
        }
    });
});
// for small devices header fixed
window.addEventListener('scroll', function () {
    var headerNavSm = document.getElementById('main-nav-sec-sm');
    smWindowScroll = window.scrollY;
    console.log(smWindowScroll)
    if (window.scrollY >= 100) {
        headerNavSm.classList.add('fixed-top');
    } else {
        headerNavSm.classList.remove('fixed-top');
    }
});

/*********library-sec**********/
const library = () => {
    // Add the 'title' class to the library element
    let libraryElement = document.getElementById("library");
    libraryElement.classList.add("title");
    const imageIds = ["books-img", "lab-img", "transportation-img", "sports-img", "clubs-img"];

// Loop through the array and remove the "title" class for each element
    const elementIdsToRemoveTitle = ["laboratories", "transportation", "sports", "clubs"];
    const defaultcls = document.getElementsByClassName('defaultCls');
elementIdsToRemoveTitle.forEach(id => {
    let element = document.getElementById(id);
    if (element) {
        element.classList.remove("title");
        element.classList.remove("defaultCls");
    }
});

    imageIds.forEach((id) => {
      let imgElement = document.getElementById(id);
      imgElement.classList.add("hideImg");
    
      if (id === "books-img") {
        imgElement.src = "imgs/books-icon.svg";
        imgElement.classList.remove("hideImg");
      }
    });    
    // Update the facilityLibraryImg source
    let facilityLibraryImg = document.getElementById('facilities-laboratory-img').querySelector('img');
    facilityLibraryImg.src = "imgs/library-image.png";
};

/********laboratory-sec***********/

const laboratory = () => {
    // Add the 'title' class to the laboratory element
    let laboratoryElement = document.getElementById("laboratories");
    laboratoryElement.classList.add("title");

    // Loop through the array and remove the "title" class for each element
    const elementIdsToRemoveTitle = ["library", "transportation", "sports", "clubs"];
    const defaultcls = document.getElementsByClassName('defaultCls');
elementIdsToRemoveTitle.forEach(id => {
    let element = document.getElementById(id);
    if (element) {
        element.classList.remove("title");
        element.classList.remove("defaultCls");
    }
});

    const imageIds = ["books-img", "lab-img", "transportation-img", "sports-img", "clubs-img"];

    imageIds.forEach((id) => {
      let imgElement = document.getElementById(id);
      imgElement.classList.add("hideImg");
    
      if (id === "lab-img") {
        imgElement.src = "imgs/microscope-lab-img.svg";
        imgElement.classList.remove("hideImg");
      }
    });    

    // Update the facilityLabImg source (assuming you have a different image for the laboratory)
    let facilityLabImg = document.getElementById('facilities-laboratory-img').querySelector('img');
    facilityLabImg.src = "imgs/laboratories-image.png";
};

/********transport-sec***********/

const transport = () => {
    // Add the 'title' class to the laboratory element
    let transportElement = document.getElementById("transportation");
    transportElement.classList.add("title");
    
    // Loop through the array and remove the "title" class for each element
const elementIdsToRemoveTitle = ["library", "laboratories", "sports", "clubs"];
const defaultcls = document.getElementsByClassName('defaultCls');
elementIdsToRemoveTitle.forEach(id => {
    let element = document.getElementById(id);
    if (element) {
        element.classList.remove("title");
        element.classList.remove("defaultCls");
    }
});

    const imageIds = ["books-img", "lab-img", "transportation-img", "sports-img", "clubs-img"];
    imageIds.forEach((id) => {
      let imgElement = document.getElementById(id);
      imgElement.classList.add("hideImg");
    
      if (id === "transportation-img") {
        imgElement.src = "imgs/microscope-lab-img.svg";
        imgElement.classList.remove("hideImg");
      }
    });    

    // Update the facilityLabImg source (assuming you have a different image for the laboratory)
    let facilityLabImg = document.getElementById('facilities-laboratory-img').querySelector('img');
    facilityLabImg.src = "imgs/laboratories-image.png";
};

/******sports-sec*****/


const sports= () => {
    // Add the 'title' class
    let transportElement = document.getElementById("sports");
    transportElement.classList.add("title");
    
    // Loop remove the "title" class for each element
const elementIdsToRemoveTitle = ["library", "laboratories", "transportation", "clubs"];
const defaultcls = document.getElementsByClassName('defaultCls');
elementIdsToRemoveTitle.forEach(id => {
    let element = document.getElementById(id);
    if (element) {
        element.classList.remove("title");
        element.classList.remove("defaultCls");
    }
});

    const imageIds = ["books-img", "lab-img", "transportation-img", "sports-img", "clubs-img"];
    imageIds.forEach((id) => {
      let imgElement = document.getElementById(id);
      imgElement.classList.add("hideImg");
    
      if (id === "sports-img") {
        imgElement.src ="imgs/books-icon.svg";
        imgElement.classList.remove("hideImg");
      }
    });    

    // Update the facilityLabImg
    let facilityLabImg = document.getElementById('facilities-laboratory-img').querySelector('img');
    facilityLabImg.src ="imgs/library-image.png" ;
};

/******clubs-sec*********/
const clubs = () => {
    // Add the 'title' class
    let clubsElement = document.getElementById("clubs");
    clubsElement.classList.add("title");
    
    // Loop to remove the "title" class for each element
const elementIdsToRemoveTitle = ["library", "laboratories", "transportation", "sports"];
const defaultcls = document.getElementsByClassName('defaultCls');
elementIdsToRemoveTitle.forEach(id => {
    let element = document.getElementById(id);
    if (element) {
        element.classList.remove("title");
        element.classList.remove("defaultCls");
        
    }
});

    const imageIds = ["books-img", "lab-img", "transportation-img", "sports-img", "clubs-img"];
    imageIds.forEach((id) => {
      let imgElement = document.getElementById(id);
      imgElement.classList.add("hideImg");
    
      if (id === "clubs-img") {
        imgElement.src ="imgs/microscope-lab-img.svg";
        imgElement.classList.remove("hideImg");
      }
    });    
    // Update the facilityLabImg
    let facilityLabImg = document.getElementById('facilities-laboratory-img').querySelector('img');
    facilityLabImg.src ="imgs/laboratories-image.png" ;
};