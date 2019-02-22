const app = new Vue({
  el: '#app',
  data: {
    urlApi: 'https://api.github.com/users/',
    typeApi: '/repos',
    urlName: '',
    sortApi: '?sort=updated',
    repo: [],
    searchPage: '&per_page=5&sha=',
    urlAll: ''
  },
  methods: {
    initRepo () {
      this.urlName = JSON.parse(window.localStorage.getItem('githubName')) || ''
      let _Url = this.urlApi + this.urlName + this.typeApi + this.sortApi + this.searchPage
      this.ajaxRepo(_Url)
    },
    getRepo () {
      let _Url = this.urlApi + this.urlName + this.typeApi + this.sortApi + this.searchPage
      this.ajaxRepo(_Url)
    },
    ajaxRepo (url) {
      const vm = this
      window.fetch(url, { method: 'get' })
        .then(data => {
          return data.json()
        }).then(item => {
          if (item.documentation_url === 'https://developer.github.com/v3/#rate-limiting') {
            window.alert('出現錯誤：' + item.message)
          } else {
            vm.urlAll = url
            vm.repo = item
          }
        }).catch(error => {
          window.alert('目前出現錯誤：' + error)
        })
    },
    addRepo () {
      const vm = this
      window.localStorage.setItem('githubName', JSON.stringify(vm.urlName))
      window.alret(`已將目前 ${vm.urlName} 對象加入關注。`)
    }
  },
  created () {
    this.initRepo()
  }
})
window.onload = function () {
  $('.loading').fadeOut(1500)
}
