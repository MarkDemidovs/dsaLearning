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

const StringArray = new CustomArr();
const newString = new CustomArr();
function reverse(string) {
    
    for (let i = 0; i < string.length; i++) {
        StringArray.push(string[i])
        console.log(StringArray);
    }

    for (let i = 0; i < string.length; i++ ) {
        newString.push(StringArray.pop());
    }    

    return newString;
}


console.log(reverse("what"))