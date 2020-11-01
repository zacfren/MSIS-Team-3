var memberReport = new Vue({
  el: '#memberReport',
  data: {
    ptList: [],
    certList: [],
    choose: {
      certification:''
    }

    },

    methods: {
      fetchUser() {
        fetch('api/reports/index.php')
        .then(response => response.json())
        .then(json => { memberReport.ptList = json())
        },

    fetchCert(){
      fetch('api/reports/filter.php')
      .then(response => response.json())
      .then(json => { memberReport.certList = json())
      }

    },


  created(){
    this.fetchUser();
    this.fetchCert();
  }
});
