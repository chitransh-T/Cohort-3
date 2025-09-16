// classes and object in javascript
class Test{
 constructor(width , height , color){
    this.width = width;
    this.height = height;
    this.color = color; 
 }

 area(){
    const area = this.width * this.height;
    return area;
 }

 paint(){
    const color = (`you rectangle color is ${this.color}`);
    return color;
 }
}

const rect = new Test(3,4 ,"red");
const area = rect.area();
const color = rect.paint();
console.log(color);
console.log(area);

// understanding the map and storing the value in the form of key and value like we do in the objects but map is the cleaner appraoch
 // basically the Map is the predefined class
const map = new Map();
map.set('name', 'chitransh');
map.set('age' , 21);
const firstname = map.get('name')
console.log ( map.get('age'));
console.log(firstname);