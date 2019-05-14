


class Car {
    constructor(brand,color,bak,serfiyyat){
        this.brand=brand;
        this.color=color;
        this.bak = bak;
       

    }
    fullname(){
        return this.brand+" "+ this.color+" "+this.bak+" "

    }
   litrbak(litr){
    
    
    if(litr>=this.bak){
        return "Dasdi"

    }else{
      
     var bosyer=this.bak-litr
      return bosyer+"Litr bos yer qalir"
      }   
    }

} 

   

var Bmw=new Car("Bmw","Black",60);


console.log(Bmw.litrbak(50))