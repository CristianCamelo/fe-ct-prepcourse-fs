function interrumpir(num) { 
let array = [144,45,78,155,478,54,12]
let Narray =[]
for (let i =1; i<=10; i++){
      num = num+2
      Narray.push(num)
      if (num=3){
         return "Se interrumpió la ejecución"
      }
   }
}
   console.log(interrumpir(1))