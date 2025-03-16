// add button catgories
function loadcategories (){
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then((res)=>res.json())
    .then((data)=> displaycatgories (data.categories))
    .catch((error)=>console.log(error))
}

// display catgories
function displaycatgories (categories){

    const idpatcatgories = document.getElementById('patcatgories');
    categories.forEach(element => {
        // console.log(element);
        const creatdiv = document.createElement('div');
        creatdiv.classList= "flex justify-center"
        creatdiv.innerHTML =`
        <button class="btn flex justify-center items-center lg:gap-3 gap-2 border-[#0E7A8126] border bg-slate-100 rounded-xl lg:w-[150px] w-[100px] lg:px-3 lg:py-8 py-6 px-2">
            <img class="w-5 lg:w-10 h-5 lg:h-10" src="${element.category_icon}" alt="">
            <h1 class="font-bold lg:text-xl text-base">${element.category}</h1>
        </button>
        `

        // append
        idpatcatgories.appendChild(creatdiv);
    });

}

// load pat card 
function loadpatcard (){
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then((res)=>res.json())
    .then((data)=>displaypatcard (data.pets))
    .catch((error)=>console.log(error))
}

// display pat card
function displaypatcard (patcard){

    const patcontainer = document.getElementById('patcontainer');
    patcard.forEach(element =>{
        const div = document.createElement('div');
        div.classList="card bg-base-100 shadow-sm"
        div.innerHTML=`
        <figure class="lg:px-5 px-2 pt-2  lg:pt-5">
            <img
            src="${element.image}"
            alt=""
            class="rounded-xl" />
        </figure>
        <div class="lg:m-5 m-2">
            <h1 class="font-bold lg:text-2xl text-xs">${element.pet_name}</h1>
            <div class="space-y-[2px] py-2 lg:py-5 border-b border-slate-300">
                ${!element.breed || element.breed === ""?`<h1 class="text-[8px] lg:text-lg">Breed : Not Available</h1>`:`<h1 class="text-[8px] lg:text-lg">Breed : ${element.breed}</h1>`}
                ${!element.date_of_birth || element.date_of_birth === ""?`<h1 class="text-[8px] lg:text-lg">Birth : Not Available</h1>`:`<h1 class="text-[8px] lg:text-lg">Birth : ${element.date_of_birth}</h1>`}
                ${!element.gender || element.gender === ""?`<h1 class="text-[8px] lg:text-lg">Gender : Not Available</h1>`:`<h1 id="gender" class="text-[8px] lg:text-lg">Gender : ${element.gender}</h1>`}
                ${!element.price || element.price === ""?`<h1 class="text-[8px] lg:text-lg">Price : Not Available</h1>`:`<h1 id="price" class="text-[8px] lg:text-lg">Price : ${element.price}$</h1>`}
            </div>
            <div class="flex justify-between py-2 lg:py-5 ">
            <button onclick="likebuttonshow(${element.petId})" class="btn lg:px-3 lg:py-2 px-[4px] py-[3px] w-fit h-fit p-0"><img class="lg:h-5 w-2 h-2 lg:w-5" src="images/like.png" alt=""></button>
            <button class="btn lg:px-3 lg:py-1 w-fit h-fit lg:text-lg text-[7px] px-[4px] py-[2px]">Adopt</button>
            <button class="btn lg:px-3 lg:py-1 w-fit h-fit lg:text-lg text-[7px] px-[4px] py-[2px]">Details</button>
            </div>
        </div>
        `

        // append
        patcontainer.appendChild(div);
    })

}


// like button click load data
function likebuttonshow (id){

   fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
   .then((res)=>res.json())
   .then((data)=>displaylikebuttonshow(data.petData))
   .catch((error)=>console.log(error))

}

// like button click display data
function displaylikebuttonshow (id){

    // console.log(id);
    const addthumnal = document.getElementById('clicklikebuttonshowthumnal');
    const div = document.createElement('div');
    div.classList= ""
    div.innerHTML =`
    <img class="lg:rounded-xl rounded-lg" src="${id.image}" alt="">
    `
    // append
    addthumnal.appendChild(div);
}

// click button view more scrol
function scrol(){

    if (screen.width > 480){
        window.scrollTo(0,1055);
        
    }
    else{
        window.scrollTo(0,645)
    }

}

loadcategories();
loadpatcard();
