class Myset extends Set{

        	constructor(arr)
		{	
			super(arr)
			this.arr = arr

		}
		getArray()
		{
			return this.arr
		}
		add(value){

			//if(!this.hasValue(value)) this.arr.push(value)
			super.add(value)
		}
		deleteValue(value){
			//this.arr = this.arr.filter(y => y !== value)
			super.delete(value)
		}
		hasValue(value){
			//return this.arr.includes(value)
			return super.has(value)
		}
		get size(){
			//return this.arr.length
			return super.size
		}
		toArray(){
			console.log(`object to string ${this.arr}`)
			return Array.from(this)

		}
		reset(){
			return this.arr
		}

}

kamalArray = new Myset([1,2,3,4,5,6])
console.log(kamalArray.getArray())
kamalArray.add(8)
kamalArray.deleteValue(3)
console.log(kamalArray.getArray())
console.log("total size of the array is " + kamalArray.size)
console.log("array " + kamalArray.toArray())
console.log(" callng reset function " + kamalArray.reset().toString())


