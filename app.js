window.onload = function(){
    crearBoton();
    let boton = document.getElementById("miBoton");
    let myStyle = {
        cursor: "pointer",
        color: "white",
        padding: "20px",
        background: "blue",
        "border-style": "dashed",
        "border-width": "5px",
        "border-color": "aqua",
        "font-family": "cursive",
        "font-size": "25px",
        "border-radius": "8px",
    }
    boton.addEventListener("mouseover", function(e){ //Cuando el mouse esta ensima del elemento
        // this.setAttribute("style", "color:red;"); //Para utilizar esta propiedad tener en cuenta que sobreescribe los existentes 
        this.style.cssText = "border:none;";
        Object.assign(this.style, {"font-family": "fantasy","cursor": "pointer"});
        this.style.background = "transparent";
    })
    // boton.onmouseover = (e)=>{
    //     Object.assign(e.target.style, myStyle);
    // }
    boton.addEventListener("mouseout", function(e){ //Cuando el mouse no esta en el elemento
        this.removeAttribute("style");
    })
    // boton.onmouseout = (e)=>{
    //     e.target.removeAttribute("style");
    // }
    boton.addEventListener("click", function(e){ // Cuando hacemos clien en un elemento
        Object.assign(this.style, myStyle);
    })
    // boton.onclick = (e)=>{
    //     alert("Clik en el");
    // }
    crearSalto({i:2});
    crearDiv();
    let div = document.getElementById("miDiv");
    div.addEventListener("mousemove", function(){ //Cuando el mouse esta sobre el elemento
        console.log("Me estoy moviendo en el div");
    });
    // div.onmousemove = (e)=>{
    //     e.target.style.background = `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`;
    // }
    div.addEventListener("mouseleave", function(){ // Cuando el mouse sale del elemento selecionado
        console.log("No estoy sobre el elemento div");
    })
    // div.onmouseleave = (e)=>{
    //     Object.assign(e.target.style, {background: "black"})
    // }
    div.addEventListener("mousedown", function(e){ //Cuando das click con cualquier boton del mouse
        alert("Preciona cualquier boton del mouse");
        console.log(`%c ${(e.which== 1) ? "Click Izquierdo"
        : (e.which== 2) ? "Click Rueda" 
        : (e.which== 3) ? "Click Derecho" 
        : "No se"}`, "color:red;");
    })
    // div.onmousedown = (e)=>{
    //     alert("Di click con cualquier boton");
    // }
    div.addEventListener("mouseup", function(){ //Cuando suelto el cualquier clik del mause en el elemento
        alert("Solte el click en el div");
    })
    // div.onmouseup = (e)=>{
    //     e.target.style.background = `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`;
    // }
}
let crearSalto = ({...arg})=>{
    let i = 0;
    let fragment = new DocumentFragment();
    ciclo:
    while(i < arg.i){
        let salto = document.createElement("BR");
        fragment.appendChild(salto)
        i++;
        continue ciclo;
    }
    document.body.appendChild(fragment);
}
let crearBoton = ()=>{
    let buton = document.createElement("BUTTON");
    let texto = document.createTextNode("Click");
    buton.id = "miBoton";
    buton.type = "button";
    buton.appendChild(texto);
    document.body.appendChild(buton);
}
let crearDiv = ()=>{
    let div = document.createElement("DIV");
    div.id = "miDiv";
    div.style.width = "100%";
    div.style.height = "50px";
    div.style.background = "#00000026";
    document.body.appendChild(div);
}