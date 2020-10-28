var app = new Vue({
  el: '#certapp',
  data:{
    certList: [],
    activeCert: null,
    newCert: {
      agency: '',
      certificationName: '',
      expDate: '',
      }
  },
  // created() {
  //   this.fetchCert
  // },

  methods: {
    //get api
    fetchCert(){
      fetch('api/certifications/')
      .then(response => response.json())
      .then(json => {
        this.ptList=json;
        console.log(this.certList);
      });
    },
    createCert( evt ){
      // this.newPTForm.certificationID = (this.newPTForm.agency.substring(0,1)+this.newPTForm.certificationName).toLowerCase();
      fetch('api/certifications/post.php', {
        method:'POST',
        body: JSON.stringify(this.newCert),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json())
      .then( json => {
        console.log("Returned from post:", json);
        this.certList.push(json[0]);
        this.newCert = this.newCertData();
      });
      console.log("Creating (POSTing)...I");
      console.log(this.newCert);
    },
    newCertData() {
      return {
        agency: '',
        certificationName: '',
        expDate: '',
      }
    },
    deleteCert:function(certificationID){
      {
        axios.post('delete.php', {
          action:'delete',
          id: certificationID
        }).then(function(response){
          application
        })
        })
      }
    }
  },

  created(){
    this.fetchCert();
  }
})
