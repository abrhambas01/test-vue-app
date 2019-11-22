var vm = new Vue({
	el : "#app",
	data() {
		return {
			searchQuery: "",
			isTyping: false,
			searchResult: [],
			isLoading: false,
		}
	},

	computed : { 
		show_materials(){

		}

	},

	methods : { 
		debounceInput: _.debounce(function (e) {
			console.log(this.searchQuery);
		}, 1000),

		searchUser: function(searchQuery) {
			this.isLoading = true;
			axios.get('https://api.github.com/search/users?q=' + searchQuery)
			.then(response => {
				this.isLoading = false;
				this.searchResult = response.data.items;
			});
		}
	},
	watch : { 
		searchQuery: _.debounce(function() {
			this.isTyping = false;
		}, 1000),

		isTyping: function(value) {
			if (!value) {
				this.searchUser(this.searchQuery);
			}
		}
	}
});