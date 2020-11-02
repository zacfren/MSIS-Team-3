var reports2app = new Vue({
  el: '#memberReport2',
  data: {
    reports2List:[{
      reportsID:'',
      certificationID:'',
      empID:'',
      fname:'',
      lname:'',
      expDate:'',
      certificationName:'',
      stationNum:'',
      radioNum:''
    }],
    computed: {
  sortedArray: function() {
    function compare(a, b) {
      if (a.stationNum < b.stationNum)
        return -1;
      if (a.stationNum > b.stationNum)
        return 1;
      return 0;
    }

    return this.arrays.sort(compare);
  }
}
  },

  methods: {
    fetchReports(){
      fetch('api/reports/')
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
