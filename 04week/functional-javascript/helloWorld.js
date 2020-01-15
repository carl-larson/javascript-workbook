class address {
  constructor (iLine1, iCity, iState, iZip) {
    this.line1 = iLine1;
    this.city = iCity;
    this.state = iState;
    this.zip = iZip;
  }
  generateString(){
    return `${this.line1}
${this.city}, ${this.state} ${this.zip}`
  }
}

class license {
  constructor (iName, iNumber) {
    this.name = iName;
    this.number = iNumber;
  }
  updateAddress(newAdd) {
    this.address = newAdd;
  }
  makeLicense(){
    return `${this.name}
${this.number}
${this.address}`;
  }
}

let school = new address ("314 Highland Blvd", "Austin", "TX", "78752");
let driver = new license ("Jim", "123456789");
// console.log(school.generateString());
driver.updateAddress(school.generateString());
console.log(driver.makeLicense());
