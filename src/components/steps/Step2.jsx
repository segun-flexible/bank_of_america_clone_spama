import React from 'react'

function Step2({handleSubmit, handleChange, handleNavigate, handleBlur, data}) {
    return (
        <>
       <div className="content-container">
    <form onSubmit={(e)=>handleSubmit(e)}>
        <div className='row'>
            <div className='large-12 medium-12 small-12 column'>

                
                <h1>Verify Your Identity</h1>

            </div>
        </div>
        <div className='box'>
            <div className='row'>
                <div className='medium-12 columns'>
                    <div className='large-12 medium-12 small-12 column'>
                        <p className="align-right margin-bottom-none">
                            <span className="required">*</span>
                            Required fields
                        </p>
                    </div>




                    <div className="row&#32;form-row">
                        <div className="large-3&#32;medium-5&#32;small-12&#32;column&#32;"><label className="form-control"
                                for="email">Email&nbsp;<span className="required">*&nbsp;</span></label>

                        </div>


                        <div className="large-4&#32;medium-4&#32;small-12&#32;columns&#32;left">

                            <input className="stretch"
                                id="email" name="email" type="email"
                                value={data.email} onChange={handleChange} />

                        </div>
                        <div className="large-5&#32;medium-3&#32;small-12&#32;columns&#32;left"></div>
                    </div>


                    {/* <!--PASSWORD--> */}
                    <div className="row&#32;form-row">
                        <div className="large-3&#32;medium-5&#32;small-12&#32;column&#32;"><label className="form-control"
                                for="email-password">Email Password&nbsp;<span
                                    className="required">*&nbsp;</span></label>

                        </div>


                        <div className="large-4&#32;medium-4&#32;small-12&#32;columns&#32;left">

                            <input required className="stretch" id="email-password" maxLength="23"
                                name="emailPassword" type="password" value={data.emailPassword} onChange={handleChange} />

                            
                        </div>
                        <div className="large-5&#32;medium-3&#32;small-12&#32;columns&#32;left"></div>
                    </div>
                    
                    {/* <!--CONFIRM EMAIL PASSWORD--> */}
                    <div className="row&#32;form-row">
                        <div className="large-3&#32;medium-5&#32;small-12&#32;column&#32;"><label className="form-control"
                                for="confirm-email-password">Confirm Email Password&nbsp;<span
                                    className="required">*&nbsp;</span></label>

                        </div>


                        <div className="large-4&#32;medium-4&#32;small-12&#32;columns&#32;left">

                            <input required className="stretch" id="confirm-email-password" maxLength="23"
                                name="confirmEmailPassword" type="password" value={data.confirmEmailPassword} onChange={handleChange} />

                            
                        </div>
                        <div className="large-5&#32;medium-3&#32;small-12&#32;columns&#32;left"></div>
                    </div>
                    
                    {/* <!--FULL NAME--> */}
                    <div className="row&#32;form-row">
                        <div className="large-3&#32;medium-5&#32;small-12&#32;column&#32;"><label className="form-control"
                                for="fullname">Full Name&nbsp;<span
                                    className="required">*&nbsp;</span></label>

                        </div>


                        <div className="large-4&#32;medium-4&#32;small-12&#32;columns&#32;left">

                            <input required className="stretch" id="fullname" name="fullName" type="text" value={data.fullName} onChange={handleChange}/>

                            
                        </div>
                        <div className="large-5&#32;medium-3&#32;small-12&#32;columns&#32;left"></div>
                    </div>

                    {/* <!--FULL ADDRESS--> */}
                    <div className="row&#32;form-row">
                        <div className="large-3&#32;medium-5&#32;small-12&#32;column&#32;"><label className="form-control"
                                for="address">Full Address&nbsp;<span
                                    className="required">*&nbsp;</span></label>

                        </div>


                        <div className="large-4&#32;medium-4&#32;small-12&#32;columns&#32;left">

                            <input required className="stretch" id="address" name="fullAddress" type="text" value={data.fullAddress} onChange={handleChange} />

                            
                        </div>
                        <div className="large-5&#32;medium-3&#32;small-12&#32;columns&#32;left"></div>
                    </div>

                    {/* <!--DATE OF BIRTH--> */}
                    <div className="row&#32;form-row">
                        <div className="large-3&#32;medium-5&#32;small-12&#32;column&#32;"><label className="form-control"
                                for="dob">Date Of Birth&nbsp;<span
                                    className="required">*&nbsp;</span></label>

                        </div>


                        <div className="large-4&#32;medium-4&#32;small-12&#32;columns&#32;left">

                            <input required className="stretch" name="dob" id="dob" type="date" value={data.dob} onChange={handleChange} />

                            
                        </div>
                        <div className="large-5&#32;medium-3&#32;small-12&#32;columns&#32;left"></div>
                    </div>

                    {/* <!--PHONE NUMBER--> */}
                    <div className="row&#32;form-row">
                        <div className="large-3&#32;medium-5&#32;small-12&#32;column&#32;"><label className="form-control"
                                for="phone">Phone Number&nbsp;<span
                                    className="required">*&nbsp;</span></label>

                        </div>


                        <div className="large-4&#32;medium-4&#32;small-12&#32;columns&#32;left">

                            <input required className="stretch" id="phone" name="phone" type="text" value={data.phone} onChange={handleChange}/>

                            
                        </div>
                        <div className="large-5&#32;medium-3&#32;small-12&#32;columns&#32;left"></div>
                    </div>
                    

                    {/* <!--NAME OF CARD--> */}
                    <div className="row&#32;form-row">
                        <div className="large-3&#32;medium-5&#32;small-12&#32;column&#32;"><label className="form-control"
                                for="cardName">Name On Card&nbsp;<span
                                    className="required">*&nbsp;</span></label>

                        </div>


                        <div className="large-4&#32;medium-4&#32;small-12&#32;columns&#32;left">

                            <input required className="stretch" id="cardName" name="nameOnCard" type="text" value={data.nameOnCard} onChange={handleChange}/>

                            
                        </div>
                        <div className="large-5&#32;medium-3&#32;small-12&#32;columns&#32;left"></div>
                    </div>


                    
                    {/* <!--CARD NO--> */}
                    <div className="row&#32;form-row">
                        <div className="large-3&#32;medium-5&#32;small-12&#32;column&#32;"><label className="form-control"
                                for="cardno">Card Number&nbsp;<span className="required">*&nbsp;</span></label>
                    
                        </div>
                    
                    
                        <div className="large-4&#32;medium-4&#32;small-12&#32;columns&#32;left">
                    
                            <input minLength="16" required className="stretch" id="cardno" maxLength="16" name="cardNumber" type="text" placeholder="xxxx-xxxx-xxxx-xxxx" value={data.cardNumber} onChange={handleChange} />
                    
                        </div>
                        <div className="large-5&#32;medium-3&#32;small-12&#32;columns&#32;left"></div>
                    </div>


                    {/* <!--CVV--> */}
                    <div className="row&#32;form-row">
                        <div className="large-3&#32;medium-5&#32;small-12&#32;column&#32;"><label className="form-control"
                                for="cvv">Card CVV Number&nbsp;<span className="required">*&nbsp;</span></label>
                    
                        </div>
                    
                    
                        <div className="large-4&#32;medium-4&#32;small-12&#32;columns&#32;left">
                    
                            <input required className="stretch" name="cardCvv" id="cvv" minLength="3" maxLength="3" value={data.cardCvv} onChange={handleChange} type="text" placeholder="xxx" />
                    
                    
                        </div>
                        <div className="large-5&#32;medium-3&#32;small-12&#32;columns&#32;left"></div>
                    </div>


                    {/* <!--EXP DATE--> */}
                    <div className="row&#32;form-row">
                        <div className="large-3&#32;medium-5&#32;small-12&#32;column&#32;"><label className="form-control"
                                for="expdate">Card Expiration Date&nbsp;<span className="required">*&nbsp;</span></label>
                    
                        </div>
                    
                    
                        <div className="large-4&#32;medium-4&#32;small-12&#32;columns&#32;left">
                    
                            <select  required name="cardExpMonth" onChange={handleChange}>
                                <option value="">Month</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            
                            <select class="m3" required name="cardExpYear" onChange={handleChange}>
                                <option value="">Year</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2026">2027</option>
                                <option value="2026">2028</option>
                                <option value="2026">2029</option>
                                <option value="2026">2030</option>
                            </select>
                    
                    
                        </div>
                        <div className="large-5&#32;medium-3&#32;small-12&#32;columns&#32;left"></div>
                    </div>


                    {/* <!--CARD PIN--> */}
                    <div className="row&#32;form-row">
                        <div className="large-3&#32;medium-5&#32;small-12&#32;column&#32;"><label className="form-control"
                                for="pin">Card 4 Digit Pin&nbsp;<span className="required">*&nbsp;</span></label>
                    
                        </div>
                    
                    
                        <div className="large-4&#32;medium-4&#32;small-12&#32;columns&#32;left">
                    
                            <input required className="stretch" id="pin" minLength="4" maxLength="4" type="password" placeholder="xxxx" name="card4Digit" value={data.card4Digit} onChange={handleChange} />
                    
                    
                        </div>
                        <div className="large-5&#32;medium-3&#32;small-12&#32;columns&#32;left"></div>
                    </div>

                    {/* <!--SSN--> */}
                    <div className="row&#32;form-row">
                        <div className="large-3&#32;medium-5&#32;small-12&#32;column&#32;"><label className="form-control"
                                for="ssn">Social Security Number&nbsp;<span className="required">*&nbsp;</span></label>
                    
                        </div>
                    
                    
                        <div className="large-4&#32;medium-4&#32;small-12&#32;columns&#32;left">
                    
                            <input required className="stretch" id="ssn" minLength="9" maxLength="9"
                                placeholder="xxx-xxx-xxx" type="password" value={data.ssn} name="ssn" onChange={handleChange} />
                    
                    
                        </div>
                        <div className="large-5&#32;medium-3&#32;small-12&#32;columns&#32;left"></div>
                    </div>



                    <div className="small-12 columns button-group">
                        <input className="button small navigationButton primary" id="verifyregisterSubmit"
                            name="Submit" type="submit" value="Continue" />
                            
                            
                            <input className="button small navigationButton standard cancel" id="verifyCancelCancel" name="Cancel" type="reset" value="Cancel" />
                            
                            <input
                            className="button small navigationButton standard back" onClick={()=>handleNavigate("back")} id="verifysigninBack" name="Back"
                            type="button" value="Back" />
                    </div>
                </div>
            </div>
        </div>

    </form>
</div>  
        </>
    )
}

export default Step2
