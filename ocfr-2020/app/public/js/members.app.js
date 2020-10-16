waitingApp = new Vue({
  el: '#cardPaneLeft',
  data:{
    ptList: [{
      fname: 'firstNameTest',
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
    fetchUser(){
      fetch('./api/members/')
      .then(response => response.json())
      .then(json => {
        this.ptList=json;
        console.log(this.ptList);
      });
    },
    createUser(){
      this.newPTForm.empID = (this.newPTForm.fname.substring(0,1)+this.newPTForm.lname).toLowerCase();
      fetch('api/members/post.php', {
        method:'POST',
        body: JSON.stringify(this.person),
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

var app = new Vue({
  el: '#triagePage',
  data: {
    ptList: [],
    visitList: [],
    activePt: null,
    triageForm: {
      priority: null,
      symptoms: ''
    },
    newPtForm: {}
  },
  computed: {
    activePtName() {
      return this.activePt ? this.activePt.lastName + ', ' + this.activePt.firstName : ''
    }
  },
  methods: {
    newPtData() {
      return {
        firstName: "",
        lastName: "",
        dob: "",
        sexAtBirth: ""
      }
    },
    handleNewPtForm( evt ) {
      // evt.preventDefault();  // Redundant w/ Vue's submit.prevent

      // TODO: Validate the data!

      fetch('api/records/post.php', {
        method:'POST',
        body: JSON.stringify(this.newPtForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        // TODO: test a result was returned!
        this.ptList.push(json[0]);
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newPtForm);

      this.newPtForm = this.newPtData();
    },
    handleTriageForm( evt ) {
      console.log("Form submitted!");

      this.triageForm.pt = this.activePt;
      console.log(this.triageForm);

    }
  },
  created() {
    fetch("api/records/")
    .then( response => response.json() )
    .then( json => {
      this.ptList = json;

      console.log(json)}
    );

    fetch("api/visits/")
    .then( response => response.json() )
    .then( json => {
      this.visitList = json;

      console.log(json)}
    );

    this.newPtForm = this.newPtData();
  }
})
