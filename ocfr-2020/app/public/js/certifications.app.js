waitingApp = new Vue({
  el: '#randomUsersID',
  data:{
    users: [{
      firstName: '',
      lastName: '',
      userId: ''
    }],
      newUser: {
        firstName:'',
        lastName:'',
        userId:''
      }
  },
  methods:{
    fetchUser(){
      fetch('api/users/')
      .then(response => response.json())
      .then(json => {
        this.users=json;
        console.log(this.users);
      });
    },
    createUser(){
      this.newUser.userID = (this.newUser.firstName.substring(0,1)+this.newUser.lastName).toLowerCase();
      fetch('api/users/insertusers.php', {
        method:'POST',
        body: JSON.stringify(this.newUser),
        headers: {
          "Content-Type": "applications/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        this.users.push(json[0]);
        this.newUser = this.newUserData();
      });
      console.log("Creating (POSTing)...I");
      console.log(this.newUser);
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
