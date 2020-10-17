waitingApp = new Vue({
  el: '#cardPaneLeft',
  data:{
    ptList: [{
      certificationID: '',
      agency: '',
      certificationName: '',
      expDate: '',
    }],
      newPTForm: {
        certificationID: '',
        agency: '',
        certificationName: '',
        expDate: '',
      }
  },
  methods:{
    //get api
    fetchUser(){
      fetch('api/certifications/')
      .then(response => response.json())
      .then(json => {
        this.ptList=json;
        console.log(this.ptList);
      });
    },
    createUser(){
      this.newPTForm.userID = (this.newPTForm.agency.substring(0,1)+this.newPTForm.lname).toLowerCase();
      fetch('api/certifications/post.php', {
        method:'POST',
        body: JSON.stringify(this.newUser),
        headers: {
          "Content-Type": "applications/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        this.ptList.push(json[0]);
        this.newPTForm = this.newUserData();
      });
      console.log("Creating (POSTing)...I");
      console.log(this.newPTForm);
    },
    newUserData() {
      return {
        certificationID: '',
        agency: '',
        certificationName: '',
        expDate: '',
      }
    }
  },
  created(){
    this.fetchUser();
  }
});
