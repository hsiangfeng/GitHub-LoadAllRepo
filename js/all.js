var app = new Vue({
  el: '#app',
  data: {
    urlApi: 'https://api.github.com/users/',
    typeApi: '/repos',
    urlName: 'vuejs',
    sortApi: '?sort=updated',
    repo: [],
    searchPage: '&per_page=10&sha=',
    clientId: '&Client_ID="6b4879b5d928051d0dd5"'
  },
  computed: {
    getRepo: function () {
      var xhr = new XMLHttpRequest();
      var vm = this;
      var innterUrl = this.urlApi + this.urlName + this.typeApi + this.sortApi + this.searchPage + this.clientId;
      xhr.open('GET', innterUrl);
      xhr.send(null);
      xhr.onload = function () {
        vm.repo = JSON.parse(xhr.responseText);
      };
    }
  }
})
