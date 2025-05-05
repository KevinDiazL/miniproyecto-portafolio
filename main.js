let buttonActive = document.querySelector("#dark1")

buttonActive.addEventListener("click", darkSwitch)

function darkSwitch() {
    document.documentElement.classList.toggle("dark")
}

const perfil = [{
    icon: "./resources/chainsaw.png",
    client1: `Client review From<br>Australia  `,
    client2: "5.0",
    review: `Oustanding Web Developer,
    Exceeded All Expectation. highly
    Recomended Without hesitation`,
    titleExpertinse: "EXPERTINSE",
    backendtxt: "BACKEND",
    CMStxt: "CMS",
    FROTENDtxt: "FROTEND",
    backend: "88%",
    CMS: "90%",
    FROTEND: "93%",
    iconbtn: "./resources/up-right.png",
    textbtn: "CONTACTO",
    link1: "SOBRE MI",
    link2: "HABILIDADES",
    link3: "PROYECTOS",

}, {
    name: "Kevin Diaz",
    function: "Front end",
    img: "./resources/WhatsApp Image 2025-04-14 at 12.48.33 AM-Photoroom.png",
}, {
    subtitule: "¿QUIEN SOY?",
    content: ` I am a full-stack website dveloper
                specialized in reactJs.
                Plus I<br>
                Also know some Wordpress front-enf development with<br>
                Elementos and WooCommerce<br><br>
                Programming is my passion, that´s the reason I am working at the<br>
                time of my academic career.<br><br>
                Additionally, I like top lay PC games and read story-type books in<br>
                My leisure time which is kinda fun and relaxing`,
    img2: "./resources/foto1.jpeg",
    img3: "./resources/foto2.jpeg",
}, {
    subtitule2: "MIS HABILIDADES",
    icons: ["./resources/htmlicon.png", "./resources/css3icon.png", "./resources/logo-javascript-icon-512.png", "./resources/react.png",
        , "./resources/MongoDB-Image.png", "./resources/next.png", "./resources/node-js-icon-1817x2048-g8tzf91e.png", "./resources/Tailwind_CSS_Logo.svg.png"],
    YearExperience: 4,
    Experience: `Years
    <br>Experience
    <br>Working`
}, {
    subtitule3: "HABILIDADES ADICIONALES",
    icons2: ["./resources/axios.png", "./resources/reduz_jv.png", "./resources/Bootstrap_logo.svg.png", "./resources/mui-labs.png",
        , "./resources/framer-motion-logo-png_seeklogo-446185.png", "./resources/firestorelogo.png", "./resources/pngimg.com - wordpress_PNG41.png"],
}, {
    subtitule4: `THE WORKS
                <br>CLOSEST TO
                <br>MY HEART`,
    txt: `Plumbing<br>Company`,
    img4: "./resources/plumbing.webp",
    img5: "resources/drink.jpg",
    img6: "./resources/robin grassner.jpg",
    subtitule5: "LET´S HAVE A CHAT",
}
]

let nav = document.querySelector("#navegador");
nav.innerHTML = `<img class="w-7" src="${perfil[0].icon}" alt="Icono de sierra">
            <a class="ml-auto px-5 dark:hover:opacity-45 " href="#perfil">${perfil[0].link1}</a >
            <a class="px-5 dark:hover:opacity-45 " href="#habilidades">${perfil[0].link2}</a>
            <a class="mr-auto px-5 dark:hover:opacity-45 " href="#proyectos">${perfil[0].link3}</a>
            <button class="rounded-full border border-white flex flex-row items-center mt-1 p-1 cursor-pointer" >
                <a class="pr-2" href="#Contacto">${perfil[0].textbtn}</a>
                <img class="w-7" src="${perfil[0].iconbtn}" alt="flecha">
            </button>`;

let div1 = document.querySelector("#Cuadro1");
div1.innerHTML = `<h3 class="text-white text-[10px] md:text-[15px]">${perfil[0].client1}<span class="bg-purple-900 text-[14px]">${perfil[0].client2}</span>
                </h3>
                <p class="text-[#63697b] dark:text-black text-[10px] md:text-[15px]">${perfil[0].review}
                </p>`

let div2 = document.querySelector("#Expertise");
div2.innerHTML = `<h3 class="text-white text-[10px] md:text-[15px]">${perfil[0].titleExpertinse}</h3>
                <br>
                <div class="flex flex-row justify-between relative">
                    <p class="text-[#63697b] dark:text-black text-[10px] md:text-[15px]">${perfil[0].backendtxt}</p>
                    <div class="bg-white  h-0.5 md:h-1 my-auto w-[100%]"></div>
                    <div
                        class="bg-purple-700 h-3 w-3 md:h-4 md:w-4 border border-amber-50 rounded-full absolute left-2/3 ">
                    </div>
                    <span class="border border-amber-50 rounded text-amber-50 text-[12px] p-0.5 md:p-0">${perfil[0].backend}</span>
                </div>
                <br>
                <div class="flex flex-row justify-between">
                    <p class="text-[#63697b]  dark:text-black text-[10px] md:text-[15px]">${perfil[0].CMStxt}</p>
                    <div class="bg-white h-0.5 md:h-1 my-auto mr-auto w-[60%]"></div>
                    <div
                        class="bg-blue-500 h-3 w-3 md:h-4 md:w-4 border border-amber-50 rounded-full absolute left-2/4 ">
                    </div>
                    <span class="border border-amber-50 rounded text-amber-50 text-[12px] p-0.5 md:p-0">${perfil[0].CMS}</span>
                </div>
                <br>
                <div class="flex flex-row justify-between">
                    <p class="text-[#63697b]  dark:text-black text-[10px] md:text-[15px]">F${perfil[0].FROTENDtxt}</p>
                    <div class="bg-white  h-0.5 md:h-1 my-auto w-[100%]"></div>
                    <div
                        class="bg-yellow-200 h-3 w-3 md:h-4 md:w-4 border border-amber-50 rounded-full absolute left-2/3 ">
                    </div>
                    <span class="border border-amber-50 rounded text-amber-50 text-[12px] p-0.5 md:p-0">${perfil[0].FROTEND}</span>
                </div>`;
let div3 = document.querySelector("#div1");
div3.innerHTML = `<h1 class=" text-white md:text-[60px] text-[35px]  text-shadow-lg/30 font-bold p-0">Yo soy<span
                    class="text-[#ebf88f] text-shadow-lg/30 font-bold p-0"> ${perfil[1].name} </span>
            </h1>
            <br>
            <br>
            <br>
            <h1 class="text-white md:text-[60px] text-[30px] text-shadow-lg/30 font-bold p-0 "><span
                    class="border border-amber-50 rounded-2xl p-1 md:p-0">${perfil[1].function}</span>
                Developer</h1>`;

let div4 = document.querySelector("#div2");
div4.innerHTML = `<img class="lg:w-90 w-65 mx-auto z-0 drop-shadow-[0_-100px_120px_rgba(235,248,143,1)]"
                src="${perfil[1].img}" alt="">
            <!-- </div> -->
            <button
                class="bg-[#ebf88f] border-b-black border-2 p-2 rounded-full w-40 font-semibold absolute bottom-1 mb-5 ">
                <a href="https://kevindiazl.github.io/funval-n1/">MOSTRAR MIS PROYECTOS</a>
            </button>`;

let section2 = document.querySelector("#perfil")
section2.innerHTML = `<img class="absolute md:w-[180px] w-[70px] left-12 bottom-3 md:top-1/2 rounded-3xl rotate-15 shadow-[0_0px_45px_rgba(99,105,123,1)] z-0"
                src="${perfil[2].img2}" alt="foto1">
            <img class="absolute md:w-[140px] w-[90px] right-16 bottom-3 md:top-1/2 rounded-3xl -rotate-15 shadow-[-25px_-25px_45px_rgba(99,105,123,1)]  "
                src="${perfil[2].img3}" alt="">
            <span class="flex flex-col">
                <h2 class="text-[#ebf88f] text-shadow-lg/30 font-bold p-0  lg:text-[60px] text-[40px] z-1">
                ${perfil[2].subtitule}
                </h2>
            </span>
            <br>
            <p class="text-white  dark:text-black lg:text-[20px] text-[15px] z-4 ">${perfil[2].content}
            </p>
            <br>
            <button class="bg-[#ebf88f] border-b-black border-2 lg:p-2 rounded-full w-50 p-1 lg:w-80 font-semibold">
               <a href="https://kevindiazl.github.io/funval-n1/">MOSTRAR MIS PROYECTOS</a>
            </button>`;
let text = document.querySelector("#text");
text.textContent = perfil[3].subtitule2;



let content = document.querySelector("#icons")
perfil[3].icons.forEach(element => {
    content.innerHTML = `<div
                        class="w-[23%] border-amber-50 border-1 rounded-2xl bg-[#1d2237] dark:bg-[#4e77ff] flex flex-col justify-center items-center">
                        <img class="w-[50px] h-[50px] md:w-[120px] md:h-[120px] p-1 " src="./resources/htmlicon.png"
                            alt="${perfil[3].icons[element]}">
                    </div>`;
});
let div5 = document.querySelector("#information");
div5.innerHTML = `<h3 class="text-[50px] md:text-[100px] text-white font-bold">${perfil[3].YearExperience}</h3>
                    <h3 class="text-[20px] md:text-[40px] text-white font-semibold md:leading-11">${perfil[3].Experience}
                    </h3>
                    <br>
                    <button
                        class="bg-[#ebf88f] border-b-black border-2 p-2 rounded-full lg:w-80 md:w-52 font-semibold ">
                        DOWNLOAD MY CV
                    </button>`;
let div6 = document.querySelector("#text2");
div6.textContent = perfil[4].subtitule3;

let content2 = document.querySelector("#icons2")
perfil[4].icons2.forEach(item => {
    content2.innerHTML = ` <img class="lg:w-[80px] lg:h-[80px]  w-[50px] h-[50px]" src="${perfil[4].icons2[item]}"
                        alt="axios-icon">`;
})

let title = document.querySelector("#title");
title.textContent = perfil[5].subtitule4;

let div7 = document.querySelector("#content2");
div7.innerHTML = `<button
                        class="bg-[#ebf88f] border-b-black text-[12px] md:text-[16px] border-2 md:p-3 rounded-full w-35 h-11 md:h-auto md:w-100 font-bold mr-4 shadow-[0_0px_45px_rgba(99,105,123,1)]  ">
                        <a href="https://kevindiazl.github.io/funval-n1/">MOSTRAR MIS PROYECTOS</a>
                    </button>
                    <h4 class="text-white text-[20px] md:text-3xl font-semibold text-shadow-[0_0px_10px_rgba(99,105,123,1)]">${perfil[5].txt}</h4>
                </div>
                <img class="border border-white w-1/3 md:w-1/4 md:hover:w-1/4 rounded-3xl md:h-full object-cover h-1/4"
                    src="${perfil[5].img4}" alt="img-plomeria">
                <img class="border border-white w-1/3 hover:w-2/3 md:w-1/8 rounded-3xl object-cover ml-auto md:h-full md:hover:w-1/4 ease-in-out duration-75 h-1/4"
                    src="${perfil[5].img5}" alt="Img-bebida">
                <img class="rounded-3xl object-cover w-1/3 hover:w-2/3 md:hover:w-1/4 md:w-1/8 md:h-full ease-in-out duration-75 h-1/4"
                    src="${perfil[5].img6}" alt="Img-edificio">`;
let textSection = documentElement.querySelector("#titleText")
textSection.textContent = perfil[5].subtitule5;


