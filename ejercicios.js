/* 1)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME 2 NUMEROS COMO ARGUMENTOS (x y z) EN EL CUAL
SI x ES MENOR QUE z, x DIVIDE A z, CASO CONTRARIO SE MULTIPLICAN. RETORNAR
EL RESULTADO */

function argumentos(x,z){
    if(x<z){
        return x/z
    } return x*z
}

/* 2)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME UN VALOR COMO ARGUMENTO Y RETORNE DE QUE TIPO
ES (SI ES STRING, NUMBER, BOOLEAN, ETC) */

const argumentos = (a) => typeof(a)


/* 3)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME 6 VALORES (a,b,c,d,e,f) COMO ARGUMENTOS
- a y b SE SUMAN
- EL RESULTADO DE LA SUMA SE RESTA CON c
- LUEGO SE MULTIPLICA POR d Y SE DIVIDE POR e
- FINALMENTE SE HACE LA POTENCIA CON EL EXPONENTE f.
- SE RETORNA EL RESULTADO
- TIP: RECORDAR EL ORDEN */

function CalculoCombinado(a,b,c,d,e,f){
	return (((((a+b)-c)*d)/e)**f)
}

/* 
4)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO Y SE EXTRAIGA LOS
ULTIMOS 3 ELEMENTOS. RETORNAR EL RESULTADO COMO UN NUEVO ARRAY. */


function array(array){    
	const result = [];
    result.push(array[array.length-3], array[array.length-2], array[array.length-1]);
    return result;
}

/* 5)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO, ORDENAR ALFABÉTICAMENTE
Y/O DE MAYOR A MENOR Y RETORNAR EL RESULTADO
 */

function ordena(array){
    return array.sort();
}

/* 
6)---------
IMPLEMENTAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO UN ARRAY (a) Y UN VALOR(b).
LA FUNCION DEBE REMOVER TODOS LOS ELEMENTOS DEL ARRAY IGUALES AL VALOR(b).
RETORNAR EL ARRAY FILTRADO */

function eliminar(a,b){
    for (let i = 0; i < a.length; i++) {
        if(a[i] === b){
            a.splice(i, 1)
        }
    }
    return a;
}

/* 7)---------
IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN ARRAY DE NUMEROS COMO ARGUMENTO Y QUE
RETORNE LA SUMA DE LOS ELEMENTOS DEL ARRAY. IDEM A ESTE APARTADO CREAR OTRA
FUNCIÓN QUE RETORNE EL PROMEDIO DE LOS ELEMENTOS DEL ARRAY. */

function SumaArray(array){
     result = 0;
    array.forEach(valor => {
        result += valor;
    });
	return  result;
}
/* 
8)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME: OBJETO CON 2 O 3 PROPIEDADES Y UN STRING
COMO ARGUMENTOS. DEBE RETORNAR EL VALOR DE LA PROPIEDAD CUYA KEY SEA IGUAL
AL VALOR DEL STRING DEL ARGUMENTO */

function objeto(object, string){
	for (const key in object) {
        if(key === string){
            return(object[key])
        }
    }
}


/* Ej: objeto({nombre: 'Rosa', apellido: 'Gomez', Tel: '12434'}, 'nombre')
	Retorna 'Rosa' */

/* 9)---------
IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN OBJETO COMO ARGUMENTO Y RETORNAR
LA SUMA DE TODOS SUS VALORES. */

function SumaObjeto(object){
    let suma = 0;
    for(const key in object) {
        suma += object[key];
    }
    console.log (suma);
}

