var reportsapp = new Vue({
  el: '#memberReport',
  data: {
    reportsList:[{
      reportsID:'',
      certificationID:'',
      empID:'',
      fname:'',
      lname:'',
      expDate:'',
      certificationName:''
    }],
  },

  methods: {
    fetchReports(){
      fetch('api/reports/index.php')
      .then( response => response.json() )
      .then( json => {
        this.reportsList = json;
        console.log(this.reportsList)});
      }
},
 created() {
  this.fetchReports();
 }
});







// var memberReport = new Vue({
//   el: '#memberReport',
//   data: {
//     reportsList: [],
//     computed:
//     },
//
//     methods:{
//       fetchUser(){
//         fetch('api/reports/')
//         .then(response => response.json())
//         .then(json => {
//           this.reportsList=json;
//           console.log(this.reportsList);
//         });
//       }
//     },
//
//   created(){
//     this.fetchUser();
//     this.fetchCert();  }
// });
