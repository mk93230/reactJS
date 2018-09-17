class Set{

        	constructor(arr)
		{	
			this.arr = arr
		}
		getArray()
		{
			return this.arr
		}
		add(value){

			if(!this.hasValue(value)) this.arr.push(value)
		}
		deleteValue(value){
			this.arr = this.arr.filter(y => y !== value)
		}
		hasValue(value){
			return this.arr.includes(value)
		}
		get size(){
			return this.arr.length
		}
}

kamalArray = new Set([1,2,3,4,5,6])
console.log(kamalArray.getArray())
kamalArray.add(8)
kamalArray.deleteValue(3)
console.log(kamalArray.getArray())
console.log("total size of the array is " + kamalArray.size)


