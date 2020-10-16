waitingApp = new Vue({
  el: '#cardPaneLeft',
  data:{
    ptList: [{
      firstName: '',
      lastName: '',
      userId: ''
    }],
      newPTForm: {
        firstName:'',
        lastName:'',
        userId:''
      }
  },
  methods:{
    fetchUser(){
      fetch('api/members/')
      .then(response => response.json())
      .then(json => {
        this.ptList=json;
        console.log(this.users);
      });
    },
    createUser(){
      this.newPTForm.userID = (this.newPTForm.firstName.substring(0,1)+this.newPTForm.lastName).toLowerCase();
      fetch('api/members/post.php', {
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
        firstName: "",
        lastName: "",
        userID: ""
      }
    }
  },
  created(){
    this.fetchUser();
  }
});
