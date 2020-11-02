var memberReport = new Vue({
  el: '#memberReport',
  data: {
    reportsList: [],
    activeReport: null,
    },

    methods:{
      fetchUser(){
        fetch('api/reports/')
        .then(response => response.json())
        .then(json => {
          this.reportsList=json;
          console.log(this.reportsList);
        });
      }
    },

  created(){
    this.fetchUser();
    this.fetchCert();  }
});
