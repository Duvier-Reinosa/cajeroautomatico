class billete
{
  constructor(v, c)
  {
   this.valor = v;
   this.cantidad = c;
  }
}

function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for (var bi of caja)
  {
    if(dinero > 0)
      {
        div = Math.floor(dinero / bi.valor);

        if(div > bi.cantidad)
        {
          papeles = bi.cantidad;
        }
        else
        {
            papeles = div;
        }

        entregado.push( new billete(bi.valor, papeles) );
        dinero = dinero - (bi.valor * papeles);
      }
  }
  if (dinero > 0)
  {
      resultado.innerHTML = "no tengo billetes de " + dinero;
  }
  else
  {
    for(var e of entregado)
   {
     if (e.cantidad > 0)
     {

       resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br />" ;
     }

   }

  }
}

 var caja = [];
 var entregado = [];
 caja.push( new billete(100, 50) );
 caja.push( new billete(50, 300) );
 caja.push( new billete(20, 200) );
 caja.push( new billete(10, 100) );
 caja.push( new billete(5, 50) );

var dinero = 0;
var div = 0;
var papeles = 0;

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
var resultado = document.getElementById("res");
