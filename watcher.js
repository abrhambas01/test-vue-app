var app = new Vue({

	el : "#app",
	
	data() {
		return {
			first_name : "William",
			last_name : "Henry",
			input_name : "Mark Henry",
			old_input_value : "",
			numbers : [ 5, 8, 3]
		}
	},
	/*
	use filters to format a specific method something like capitalizing a string.
	or formatting 
	*/
	filters : {

		capitalize(){ }

	},

	computed : { 

		full_name(){
			return this.first_name +" " +this.last_name ; 
		},
		
		sum_of_numbers(){
			return this.numbers.reduce((sum,val) => sum + 
				val);
		},

		product_of_numbers(){
			return this.numbers.reduce((sum,val) => sum + 
				val);	
		}
	},

	methods : { 
		update_counter(){
		}

	},
	watch : { 
		full_name(){
			console.log(this.full_name);
		},

		input_name(){
			console.log(this.input_name);
		/*	const new_value = this.input_name ; 
			
			setTimeOut(() => {
				this.old_input_value =  new_value ; 
			},5000);*/
		}
	}
});