///PASO 1
//creamos una variable para almacenar el evento que este ocurriendo con el mouse
//le damos un valor de vacio para que no cargue la página con algun evento
var mouseEvent = "empty";
//creamos dos variables para guardar las ultimas posiciones del mouse
var last_position_of_x, last_position_of_y;



    //Ya está hecho en la clase pasada
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    
    color = "black";
    width_of_line = 1;
    canvas.addEventListener("mousedown", my_mousedown);
    ///Termina lo ya hecho anteriormente




    //PASO 2
    function my_mousedown(e)
    {
        //inicio de la actividad adicional
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //final de la actividad adicional

        //PASO 2
        ///////////////////////////////////////////
        //Agregar el guardar este valor cuando se declic al mouse
        mouseEvent = "mouseDown";
        /////////////////////////////////////////////
    }
    



    //PASO 3
    //evento levantar el mouse
    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    //PASO 4
    //evento dejar el área
    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }





    //PASO 5
    //evento cuando se mueve el mouse sobre el lienzo
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        //Para obtener las coordenadas de la posicion del mouse
        ///lo guardamos en una variable
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;


        //revisamos si es que el valor de la variable es igual a dar clic
        if (mouseEvent == "mouseDown") {
            //en caso de que si se esté dando clic en ese mismo momento
            //podremos dibujar en la pantalla
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width_of_line;


            //para decirle donde iniciará el trazo de la línea
            console.log("Last position of x and y coordinates = ");
            console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
            ctx.moveTo(last_position_of_x, last_position_of_y);


            //donde terminarán los trazos de las líneas
            console.log("Current position of x and y coordinates = ");
            console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
            ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
            ctx.stroke();
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

    //PASO 3
    //evento levantar el mouse
    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    //PASO 4
    //evento dejar el área
    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }


//actividad adicional
//boton borrar
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
