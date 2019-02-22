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
  methods: {
    initRepo () {
      let localUserName = JSON.parse(window.localStorage.getItem('githubName')) || []
      if (localUserName.length !== 0) {
        this.urlName = localUserName
      }
      this.ajaxRepo()
    },
    ajaxRepo () {
      const vm = this
      let _Url = this.urlApi + this.urlName + this.typeApi + this.sortApi + this.searchPage
      window.fetch(_Url, { method: 'get' })
        .then(data => {
          return data.json()
        }).then(item => {
          if (item.documentation_url === 'https://developer.github.com/v3/#rate-limiting') {
            window.alert('出現錯誤：' + item.message)
          } else {
            vm.urlAll = _Url
            vm.repo = item
          }
        }).catch(error => {
          window.alert('目前出現錯誤：' + error)
        })
    },
    addRepo () {
      const vm = this
      window.localStorage.setItem('githubName', JSON.stringify(vm.urlName))
      window.alert(`已將目前 ${vm.urlName} 對象加入關注。`)
    }
  },
  created () {
    this.initRepo()
  }
})
window.onload = function () {
  $('.loading').fadeOut(1500)
}
