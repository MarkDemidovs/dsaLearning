class CustomArr{
    constructor() {
        this.length = 0;
        this.data = {};
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length
        
    }
    get(index) {
        return this.data[index]
    }
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    shift() {
        const firstItem = this.data[0]

        for (let i = 0; i < this.length ; i++) {
            this.data[i] = this.data[i + 1]
        }

        delete this.data[this.length - 1];
        this.length--;
        return firstItem;
    }
    delete(index){
        const item = this.data[index]
        for (let i = index; i < this.length -1; i++) {
            this.data[i] = this.data[i + 1];

        }

        delete this.data[this.length - 1]
        this.length--
        return item;
    }
}

const MyArray = new CustomArr();
MyArray.push("w")
MyArray.push("d")
/*console.log(MyArray);

console.log(MyArray.get(0))
*/
console.log(MyArray)
console.log(MyArray.shift())
console.log(MyArray);
console.log(MyArray.delete(0))
console.log(MyArray);
