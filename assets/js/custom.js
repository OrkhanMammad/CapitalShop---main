var menubtn = document.getElementById('bottom-menu-btn')
menubtn.addEventListener('click', function () {
    let mobilemenu = document.getElementById('mobile-menu')
    mobilemenu.classList.toggle('mobile-menu-active')
})


var decrementsforbasketcount = document.getElementsByClassName('decrement-btn')
for (let decrementforbasketcount of decrementsforbasketcount) {
    decrementforbasketcount.addEventListener('click', function () {
        let id = decrementforbasketcount.getAttribute('id');
        let ChangeInputs = document.getElementsByClassName('basket-product-count')
        for (let changeInput of ChangeInputs) {
            if (changeInput.getAttribute('id') == id) {
                if (changeInput.value > 1) {
                    changeInput.value--
                }


            }
        }

    })
}



var incrementsforbasketcount = document.getElementsByClassName('increment-btn')
for (let incrementforbasketcount of incrementsforbasketcount) {
    incrementforbasketcount.addEventListener('click', function () {
        let id = incrementforbasketcount.getAttribute('id');
        let ChangeInputs = document.getElementsByClassName('basket-product-count')
        for (let changeInput of ChangeInputs) {
            if (changeInput.getAttribute('id') == id) {
                changeInput.value++


            }
        }

    })
}



var prdinfonavbtns = document.getElementsByClassName('product-info-nav-btn')
for (let prdinfonavbtn of prdinfonavbtns) {
    prdinfonavbtn.addEventListener('click', function () {
        let prevactives = document.getElementsByClassName('active-for-product-info-nav-btn')
        for (let prevactive of prevactives) {
            prevactive.classList.remove('active-for-product-info-nav-btn')
        }
        prdinfonavbtn.classList.add('active-for-product-info-nav-btn')
        let infoboxes = document.getElementsByClassName('product-info-box')
        for (let infobox of infoboxes) {
            if (infobox.getAttribute('id') == prdinfonavbtn.getAttribute('id')) {
                let preactiveboxes = document.getElementsByClassName('active-for-product-info-boxes')
                for (let preactivebox of preactiveboxes) {
                    preactivebox.classList.remove('active-for-product-info-boxes')
                }

                infobox.classList.add('active-for-product-info-boxes')
            }
        }

    })
}


var searchIcons=document.getElementsByClassName('searchIcon')
for(let searchIcon of searchIcons){
    searchIcon.addEventListener('click', function(){
       
        let searchBoxes=document.getElementsByClassName('search-box')
        for(let searchBox of searchBoxes){
            searchBox.classList.toggle('active-for-search')
        }
        
    })
}

var searchCloseIcons=document.getElementsByClassName('close-search-btn')
for(let searchCloseIcon of searchCloseIcons){
    searchCloseIcon.addEventListener('click', function(){
        
        let searchBoxes=document.getElementsByClassName('search-box')
        for(let searchBox of searchBoxes){
            searchBox.classList.toggle('active-for-search')
        }
        
    })
}
