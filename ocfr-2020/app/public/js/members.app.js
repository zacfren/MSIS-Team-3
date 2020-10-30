var waitingApp = new Vue({
  el: '#cardPaneLeft',
  data:{
    ptList: [],
    activePt: null,
      newPtForm: {
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
      },
      deletePtForm: {}
  },
  methods:{
    fetchUser(){
      fetch('api/members/')
      .then(response => response.json())
      .then(json => {
        this.ptList=json;
        console.log(this.ptList);
      });
    },
    createUser( evt ){

      fetch('api/members/post.php', {
        method:'POST',
        body: JSON.stringify(this.newPtForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        this.ptList.push(json[0]);
        this.newPtForm = this.newUserData();
      });
      console.log("Creating (POSTing)...I");
      console.log(this.newPtForm);
    },

    deletePt( evt) {
      fetch('api/members/delete.php', {
        method: 'POST',
        body: JSON.stringify(this.deletePtForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
        })
        .then( response => response.json() )
        .then( json => {
          console.log(this.deletePtForm);
          //
          });
        console.log("Deleting Member...!");
        },

    editPt( evt ) {
      fetch('api/members/edit.php', {
        method: 'POST',
        body: JSON.stringify(this.editPtForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log(editPtForm);
      });
      console.log("Updating Pt...!")
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
