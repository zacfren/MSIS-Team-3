var app = new Vue({
  el: '#certapp',
  data:{
    certList: [],
    activeCert: null,
      newCert: {
        agency: '',
        certificationName: '',
        expDate: ''
    },

    newCertForm: {
      agency: '',
      certificationName: '',
      expDate: ''
    },

    deleteCertForm: {},
    editCertForm: {},
    computed: {
  sortedArray: function() {
    function compare(a, b) {
      if (a.expDate < b.expDate)
        return -1;
      if (a.expDate > b.expDate)
        return 1;
      return 0;
    }

    return this.arrays.sort(compare);
  }
}
  },


  methods: {
    newCertData() {
      return {
        agency: '',
        certificationName: '',
        expDate: ''
      }
    },

    //get api
    fetchCert(){
      fetch('api/certifications/')
      .then(response => response.json())
      .then(json => {
        this.certList=json;
        console.log(this.certList);
      });
    },

    createCert( evt ){
      // this.newPTForm.certificationID = (this.newPTForm.agency.substring(0,1)+this.newPTForm.certificationName).toLowerCase();
      fetch('api/certifications/post.php', {
        method:'POST',
        body: JSON.stringify(this.newCertForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json())
      .then( json => {
        console.log("Returned from post:", json);
        this.certList.push(json[0]);
        this.newCertForm = this.newCertData();
      });
      console.log("Creating (POSTing)...I");
      console.log(this.newCertForm);
    },

    deleteCert( evt) {
      fetch('api/certifications/delete.php', {
        method: 'POST',
        body: JSON.stringify(this.deleteCertForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
        })
        .then( response => response.json() )
        .then( json => {
          console.log(this.deleteCertForm);
          //
          });
        console.log("Deleting Certification...!");
        },

    editCert( evt ) {
      fetch('api/certifications/edit.php', {
        method: 'POST',
        body: JSON.stringify(this.editCertForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log(this.editCertForm);
        //this.editedCert = "Certification " + this.editCertForm['certificationID']+" updated: "+this.editCertForm['certificationName'],
      });
      console.log("Updating Cert...!")
    }
  },
    created(){
      this.fetchCert();
        }

})
