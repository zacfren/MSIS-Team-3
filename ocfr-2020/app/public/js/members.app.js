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
  }

);
