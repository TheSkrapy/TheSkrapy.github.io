let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }
    else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}

function seleccinar(){
    //Ocualta el menu una vez selecciono una opcion 
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion que aplica las animaciones a las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills"); 
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades [0].classList.add("arduino");
        habilidades [1].classList.add("unity");
        habilidades [2].classList.add("java");
        habilidades [3].classList.add("cyc");
        habilidades [4].classList.add("htmlycss");
        habilidades [5].classList.add("sonyvegas");
        habilidades [6].classList.add("photoshop");
        habilidades [7].classList.add("ryrstudio");
        habilidades [8].classList.add("linux");
        habilidades [9].classList.add("machinelearning");
        habilidades [10].classList.add("comunicacion");
        habilidades [11].classList.add("trabajo");
        habilidades [12].classList.add("creatividad");
        habilidades [13].classList.add("dedicacion");
        habilidades [14].classList.add("pmanagment");
        habilidades [15].classList.add("empathy");
        habilidades [16].classList.add("negotiation");
        habilidades [17].classList.add("criticalt");
    }
}

//Detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}