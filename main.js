const palabras=[
    "perro",
    "gato",
    "oveja",
    "casa",
    "vaca",
    "telefono",
    "mucho",
    "rodaja",
    "tatuaje",
    "carro",
    "moto",
    "coche",
    "aleman",
    "frances",
    "arabe",
    "atun",
    "carne",
    "pollo"
]
let ingresos=[]
let intentos=5
let conforma=[]
let flag=false

const aleatorio=Math.floor(Math.random()* palabras.length)
const palabraAlea=palabras[aleatorio]

console.log('la palabra tiene una longitud de',palabraAlea.length)


for (j=0;j<palabraAlea.length;j++){
    conforma.push("")
}

while (intentos>0){
    flag=false
    let letra=prompt('Ingrese una letra')

    if (ingresos.includes(letra)){
        alert('Ya habias digitado esa letra antes')
    }else{
        ingresos.push(letra)

        for (i=0;i<palabraAlea.length;i++){
            if (letra==palabraAlea[i]){
                flag=true
                conforma.splice(i,1,letra)
            }
        } 

        if (flag==false){
            intentos--
            if (intentos==0){
                alert('perdiste')
                console.log(`La palabra secreta era ${palabraAlea}`)
                break;
            }
        }

        console.log(conforma)  
        let conforma2=conforma.join("")
        if (palabraAlea==conforma2){
            alert('Felicidades, Ganaste')
            break;
        }
        console.log(`Te quedan ${intentos} intentos`)
    }
}
