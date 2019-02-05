const app = new Vue({
  el: '#app',
  data: {
    urlApi: 'https://api.github.com/users/',
    typeApi: '/repos',
    urlName: 'vuejs',
    sortApi: '?sort=updated',
    repo: [],
    searchPage: '&per_page=5&sha=',
    urlAll: ''
  },
  computed: {
    getRepo: function () {
      let _Url = this.urlApi + this.urlName + this.typeApi + this.sortApi + this.searchPage
      window.fetch(_Url, { method: 'get' })
        .then(data => {
          return data.json()
        }).then(item => {
          this.urlAll = _Url
          this.repo = item
        }).catch(error => {
          console.log(error)
        })
    }
  }
})
window.onload = function () {
  $('.loading').fadeOut(1500)
}
