//Create FormField class and the constructor/object within
class FormField {
    constructor(name, label, type, options = []) {
      this.name = name;
      this.label = label;
      this.type = type;
      this.options = options;
    }
  }
  
//Create InitialValues class and the constructor/object within
  class InitialValues {
    constructor(
        fName = '', 
        lName = '', 
        addrStreet1 = '', 
        addrStreet2 = '', 
        addrCity = '', 
        addrState = '', 
        addrZip = '', 
        addrCountry = '', 
        phone = '', 
        email = '', 
        prefContact = '', 
        soSeno = '', 
        dob = '', 
        birthCity = '', 
        birthState = '', 
        birthCountry = '', 
        homeClinic = '', 
        homeClinAddr = '', 
        homeClinPhone = '', 
        homeClinStartDT = '', 
        npiNo = '', 
        caqhNo = '', 
        caqhUsername = '', 
        caqhSignIn = '', 
        pecosUsername = '', 
        pecosAccessCd = '', 
        theraLicNo = '', 
        theraLicState = '', 
        theraLicEffDT = '', 
        theraLicEndDT = '', 
        indMedProvNO = '', 
        multiStateLicFLEX = '', 
        theraEduInst = '', 
        theraDegree = '', 
        theraGradDate = '', 
        eduInstAddrStr1 = '', 
        eduInstAddrStr2 = '', 
        eduInstAddrCity = '', 
        eduInstAddrState = '', 
        eduInstAddrZip = '', 
        eduInstAddrCountry = '', 
        ref1Name = '', 
        ref1Title = '', 
        ref1Phone = '', 
        ref1Email = '', 
        ref1YearsKnown = '', 
        ref2Name = '', 
        ref2Title = '', 
        ref2Phone = '', 
        ref2Email = '', 
        ref2YearsKnown = ''
      ) {
        this.fName = fName;
        this.lName = lName;
        this.addrStreet1 = addrStreet1;
        this.addrStreet2 = addrStreet2;
        this.addrCity = addrCity;
        this.addrState = addrState;
        this.addrZip = addrZip;
        this.addrCountry = addrCountry;
        this.phone = phone;
        this.email = email;
        this.prefContact = prefContact;
        this.soSeno = soSeno;
        this.dob = dob;
        this.birthCity = birthCity;
        this.birthState = birthState;
        this.birthCountry = birthCountry;
        this.homeClinic = homeClinic;
        this.homeClinAddr = homeClinAddr;
        this.homeClinPhone = homeClinPhone;
        this.homeClinStartDT = homeClinStartDT;
        this.npiNo = npiNo;
        this.caqhNo = caqhNo;
        this.caqhUsername = caqhUsername;
        this.caqhSignIn = caqhSignIn;
        this.pecosUsername = pecosUsername;
        this.pecosAccessCd = pecosAccessCd;
        this.theraLicNo = theraLicNo;
        this.theraLicState = theraLicState;
        this.theraLicEffDT = theraLicEffDT;
        this.theraLicEndDT = theraLicEndDT;
        this.indMedProvNO = indMedProvNO;
        this.multiStateLicFLEX = multiStateLicFLEX;
        this.theraEduInst = theraEduInst;
        this.theraDegree = theraDegree;
        this.theraGradDate = theraGradDate;
        this.eduInstAddrStr1 = eduInstAddrStr1;
        this.eduInstAddrStr2 = eduInstAddrStr2;
        this.eduInstAddrCity = eduInstAddrCity;
        this.eduInstAddrState = eduInstAddrState;
        this.eduInstAddrZip = eduInstAddrZip;
        this.eduInstAddrCountry = eduInstAddrCountry;
        this.ref1Name = ref1Name;
        this.ref1Title = ref1Title;
        this.ref1Phone = ref1Phone;
        this.ref1Email = ref1Email;
        this.ref1YearsKnown = ref1YearsKnown;
        this.ref2Name = ref2Name;
        this.ref2Title = ref2Title;
        this.ref2Phone = ref2Phone;
        this.ref2Email = ref2Email;
        this.ref2YearsKnown = ref2YearsKnown;
    }
  }
  
  //Create an instance of the initialValues class as blank (to be filled in by user)
  const initialValues = new InitialValues();
  
  //Create fields object and fill with instances of the FormField class for each field. Builds out the questions(fields) and possible answers

  const fields = [
    new FormField(
              'fName',
              'First Name',
              'text'
            ),
            new FormField(
              'lName',
              'Last Name',
              'text'
            ),
            new FormField(
              'addrStreet1',
              'Street Address 1',
              'text'
            ),
            new FormField(
              'addrStreet2',
              'Street Address 2',
              'text'
            ),
            new FormField(
              'addrCity',
              'City',
              'text'
            ),
            new FormField(
              'addrState',
              'State',
              'text'
            ),
            new FormField(
              'addrZip',
              'ZIP Code',
              'text'
            ),
            new FormField(
              'addrCountry',
              'Country',
              'text'
            ),
            new FormField(
              'phone',
              'Phone',
              'text'
            ),
            new FormField(
              'email',
              'Email',
              'text'
            ),
            new FormField(
              'prefContact',
              'Preferred Contact Method',
              'radio',
              [
                { value: 'Email', label: 'Email' },
                { value: 'Phone', label: 'Phone' },
              ]
            ),
            new FormField(
              'soSeno',
              'Social Security Number',
              'text'
            ),
            new FormField(
              'dob',
              'Date of Birth',
              'date'
            ),
            new FormField(
              'birthCity',
              'Birth City',
              'text'
            ),
            new FormField(
              'birthState',
              'Birth State',
              'text'
            ),
            new FormField(
              'birthCountry',
              'Birth Country',
              'text'
            ),
            new FormField(
              'homeClinic',
              'Home Clinic',
              'text'
            ),
            new FormField(
              'homeClinAddr',
              'Home Clinic Address',
              'text'
            ),
            new FormField(
              'homeClinPhone',
              'Home Clinic Phone',
              'text'
            ),
            new FormField(
              'homeClinStartDT',
              'Home Clinic Start Date',
              'date'
            ),
            new FormField(
              'npiNo',
              'NPI Number',
              'text'
            ),
            new FormField(
              'caqhNo',
              'CAQH Number',
              'text'
            ),
            new FormField(
              'caqhUsername',
              'CAQH Username',
              'text'
            ),
            new FormField(
              'caqhSignIn',
              'CAQH Sign In',
              'text'
            ),
            new FormField(
              'pecosUsername',
              'PECOS Username',
              'text'
            ),
            new FormField(
              'pecosAccessCd',
              'PECOS Access Code',
              'text'
            ),
            new FormField(
              'theraLicNo',
              'Therapist License Number',
              'text'
            ),
            new FormField(
              'theraLicState',
              'Therapist License State',
              'text'
            ),
            new FormField(
              'theraLicEffDT',
              'Therapist License Effective Date',
              'date'
            ),
            new FormField(
              'theraLicEndDT',
              'Therapist License End Date',
              'date'
            ),
            new FormField(
              'indMedProvNO',
              'Individual Medical Provider Number',
              'text'
            ),
            new FormField(
              'multiStateLicFLEX',
              'Multi-State License/FLEX',
              'text'
            ),
            new FormField(
              'theraEduInst',
              'Therapist Education Institution',
              'text'
            ),
            new FormField(
              'theraDegree',
              'Therapist Degree',
              'text'
            ),
            new FormField(
              'theraGradDate',
              'Therapist Graduation Date',
              'date'
            ),
            new FormField(
              'eduInstAddrStr1',
              'Education Institution Address 1',
              'text'
            ),
            new FormField(
              'eduInstAddrStr2',
              'Education Institution Address 2',
              'text'
            ),
            new FormField(
              'eduInstAddrCity',
              'Education Institution City',
              'text'
            ),
            new FormField(
              'eduInstAddrState',
              'Education Institution State',
              'text'
            ),
            new FormField(
              'eduInstAddrZip',
              'Education Institution ZIP Code',
              'text'
            ),
            new FormField(
              'eduInstAddrCountry',
              'Education Institution Country',
              'text'
            ),
            new FormField(
              'ref1Name',
              'Reference 1 Name',
              'text'
            ),
            new FormField(
              'ref1Title',
              'Reference 1 Title',
              'text'
            ),
            new FormField(
              'ref1Phone',
              'Reference 1 Phone',
              'text'
            ),
            new FormField(
              'ref1Email',
              'Reference 1 Email',
              'text'
            ),
            new FormField(
              'ref1YearsKnown',
              'Reference 1 Years Known',
              'text'
            ),
            new FormField(
              'ref2Name',
              'Reference 2 Name',
              'text'
            ),
            new FormField(
              'ref2Title',
              'Reference 2 Title',
              'text'
            ),
            new FormField(
              'ref2Phone',
              'Reference 2 Phone',
              'text'
            ),
            new FormField(
              'ref2Email',
              'Reference 2 Email',
              'text'
            ),
            new FormField(
              'ref2YearsKnown',
              'Reference 2 Years Known',
              'text'
            ),
          ];
  
  export { initialValues, fields };