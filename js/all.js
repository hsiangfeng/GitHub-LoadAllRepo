var app = new Vue({
  el: '#app',
  data: {
    urlAPI: 'https://api.github.com/users/hsiangfeng/repos',
    SortAPI: '?sort=updated',
    repo: [],
    searchPage='',
  },
  computed: {
    getRepo: function () {
      var xhr = new XMLHttpRequest();
      var self = this;
      var innterUrl = this.urlAPI + this.SortAPI + this.searchPage;
      console.log(innterUrl);
      xhr.open('GET', innterUrl);
      xhr.onload = function () {
        self.repo = JSON.parse(xhr.responseText);
      };
      xhr.send();
    }
  }
})
