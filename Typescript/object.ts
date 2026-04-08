// Object - A collection of key-value pair inside the {}. {key:value}
// key inside the object internally will be converted to string.


const obj= 
{
    name:"John",
    age:30,
    city:"New York",
    fun: function(){
        console.log(this.name, this.age, this.city);
    }
    // this keyword - It refers to the current object. It is used to access the properties and methods of the current object.
}


console.log(obj.name);
console.log(obj.age);
console.log(obj.city);
obj.fun()

console.log(obj["age"]);


