
new Vue({
    el: '#app',
    ready: function() {
        this.$http.get('https://api.myjson.com/bins/r8mm', function(data) {
            this.$set('books', data);
        }).error(function(data, status, request) {
            console.log('fail' + status + "," + request);
        })
    },
    data: {
        sortparam: '',
        book: {
            id: 0,
            author: '',
            name: '',
            price: ''
        },
        books: ''
    },
    computed: {
        sum: function() {
            var result = 0;
            for (var i = 0; i < this.books.length; i++) {
                result = Number(this.books[i].price) + result;
            };
            return result;
        }
    },

    methods: {
        addBook: function() {
            this.book.id = this.books.length + 1;
            this.books.push(this.book);
            this.book = '';
        },
        delBook: function(book) {
            this.books.$remove(book);
        },
        sortBy: function(sortparam) {

            this.sortparam = sortparam;
        }
    }
});