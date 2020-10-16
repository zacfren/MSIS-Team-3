waitingApp = new Vue({
  el: '#cardPaneLeft',
  data:{
    certList: [{
      fname: '',
      lname: '',
      address: '',
      mobilePhone: '',
      workPhone: '',
      email: '',
      dob: '',
      startDate: '',
      gender: '',
      position: '',
      radioNum: '',
      stationNum: '',
      active: '',
      certifications: ''
    }],
      newPTForm: {
        fname: '',
        lname: '',
        address: '',
        mobilePhone: '',
        workPhone: '',
        email: '',
        dob: '',
        startDate: '',
        gender: '',
        position: '',
        radioNum: '',
        stationNum: '',
        active: '',
        certifications: ''
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
      this.newPTForm.userID = (this.newPTForm.fname.substring(0,1)+this.newPTForm.lname).toLowerCase();
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
        this.PtList.push(json[0]);
        this.newPTForm = this.newUserData();
      });
      console.log("Creating (POSTing)...I");
      console.log(this.newPTForm);
    },
    newUserData() {
      return {
        fname: '',
        lname: '',
        address: '',
        mobilePhone: '',
        workPhone: '',
        email: '',
        dob: '',
        startDate: '',
        gender: '',
        position: '',
        radioNum: '',
        stationNum: '',
        active: '',
        certifications: ''
      }
    }
  },
  created(){
    this.fetchUser();
  }
});
