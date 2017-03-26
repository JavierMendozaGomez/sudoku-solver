var matriz = [[{seccion:1},{seccion:1},{seccion:1},{seccion:2},{seccion:2},{seccion:2},{seccion:3},{seccion:3},{seccion:3}]]

function filaDeSeccionLlena( casilla, secciones){
  return (secciones[casilla.seccion].fila[casilla.fila].numColocadas == 3)
}

function colDeSeccionLLena(casilla, secciones){
  return(secciones[casilla.seccion].col[casilla.col].numColocadas == 9)
}

function filaContieneValor(casilla,filas){
    return filas[casilla.fila].has(casilla.valor)
}
function colContieneValor(casilla,cols){
    return cols[casilla.col].has(casilla.valor)
}


function esFilaSuperior(casilla){
  return (casilla.fila == 0 || casilla.fila == 3|| casila.fila == 6 )
}

function esFilaIntermedia(casilla){
  return (casilla.fila == 1 || casilla.fila == 4|| casila.fila == 7 )
}

function esFilaInferior(casilla){
  return (casilla.fila == 2 || casilla.fila == 5|| casila.fila == 8 )
}

function esColEste(casilla){
  return (casilla.col == 0 || casilla.col == 3|| casila.col == 6 )
}

function esColCentro(casilla){
  return (casilla.col == 1 || casilla.col == 4|| casila.col == 7 )
}

function esColOeste(casilla){
  return (casilla.col == 2 || casilla.col == 5|| casila.col == 8 )
}

function colocaCasilla(casilla, secciones, filas, cols, casillasFijas){
    secciones[casilla.seccion].fila[casilla.fila].numColocadas++
    secciones[casilla.seccion].col[casilla.col].numColocadas++;
    casillasFijas[casilla.fila][casilla.col] = true;
    cols[casilla.col].set(casilla.valor, true)
    filas[casilla.fila].set(casilla.valor, true)
}

function esCasillaFija(casilla, casillasFijas){
    return casillasFijas[casilla.fila][casilla.col]
}

function cargaCasillasFijas(matriz,secciones,filas,cols, callback){
  var casillasFijas = new Array(9)
  for(var i = 0; i < 9; i++)
      casillasFijas[i] = new Array(9)

  for(var i = 0; i < 9; i++)
    for(var j = 0; j < 9; j++){
        if(matriz[i][j].valor != -1 ){
          var casilla = {i:i,j:j, valor: matriz[i][j].valor}
          colocaCasilla(casilla, secciones, filas, cols, casillasFijas)
        }
      }
}

function inicializa(callback){
  var filas,secciones,cols
  filas = new Array(9)
  for(var i = 0; i < filas.length;i++){
    filas[i] = new Map()
  }
  cols = new Array(9)
  for(var i = 0; i < filas.length;i++){
    cols[i] = new Map()
  }
  secciones = new Array(9);
  for(var i = 0; i < secciones.length; i++){
      secciones[i] = {fila: new Array(9), col: new Array(9)}
      for(var j = 0; j < 9; j++){
          secciones[i].fila[j] = {numColocadas: 0}
          secciones[i].col[j] = {numColocadas: 0}
      }
  }
  callback(null,{ filas: filas, cols: cols, secciones:secciones})
}

var i, secciones, filas,cols, casillasFijas;
inicializa(function(err, result){
      if(!err){
          secciones = result.secciones
          filas = result.filas
          cols = result.cols
          console.log(secciones)
          }
    }
)
