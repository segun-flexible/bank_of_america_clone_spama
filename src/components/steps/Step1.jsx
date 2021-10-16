import React from 'react'

function Step1({handleSubmit, handleChange, data}) {
    return (
        <>
         <div className="content-container">
    <form onSubmit={(e)=>handleSubmit(e)}>
        <div className='row'>
            <div className='large-12 medium-12 small-12 column'>
            
            <h1>Sign In</h1>

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
                                htmlFor="username">Username&nbsp;<span
                                    className="required">*&nbsp;</span></label>

                        </div>


                        <div className="large-4&#32;medium-4&#32;small-12&#32;columns&#32;left">

                            <input onChange={handleChange} required autoComplete="off" className="stretch"
                                id="username" name="username" type="text" value={data.username} />

                        </div>
                        <div className="large-5&#32;medium-3&#32;small-12&#32;columns&#32;left"></div>
                    </div>


                    {/* PASSWORD */}
                    <div className="row&#32;form-row">
                        <div className="large-3&#32;medium-5&#32;small-12&#32;column&#32;"><label className="form-control"
                                htmlFor="password">Password&nbsp;<span
                                    className="required">*&nbsp;</span></label>

                        </div>


                        <div className="large-4&#32;medium-4&#32;small-12&#32;columns&#32;left">

                            <input onChange={handleChange} required className="stretch" id="password"
                                name="password" type="password" value={data.password} />


                            <span className="field-validation-valid&#32;error&#32;text"
                                data-valmsg-htmlFor="VerifyUserRequestHandler.Model.Username" data-valmsg-replace="true"
                                id="password_Validation"></span>
                            <div>
                                <div className="data-rows"><input id="VerifyUserRequestHandler_Model_RememberMe"
                                        name="VerifyUserRequestHandler.Model.RememberMe" type="checkbox" value="true" />
                                    <input name="VerifyUserRequestHandler.Model.RememberMe" type="hidden"
                                        value="false" /><label className="check-box-label-with-tootip&#32;normal"
                                        htmlFor="VerifyUserRequestHandler_Model_RememberMe">Remember Username</label>
                                    <button aria-describedby="VerifyUserRequestHandler_Model_RememberMe"
                                        aria-label="Your&#32;username&#32;will&#32;be&#32;remembered&#32;on&#32;this&#32;device."
                                        className="has-tip&#32;tip-top&#32;radius" data-tooltip="" tabIndex="0"
                                        title="Your&#32;username&#32;will&#32;be&#32;remembered&#32;on&#32;this&#32;device."
                                        type="button"><i className="fa&#32;fa-question-circle"><span aria-hidden="true"
                                                className="a11y-hide-visually" role="tooltip">Your username will be
                                                remembered on this device.</span></i></button>
                                </div><small></small><small><a href="javascript:void(0)">Need Username?</a><span
                                        aria-hidden='true'> | </span><a>Forgot
                                        Username?</a></small>
                            </div>
                        </div>
                        <div className="large-5&#32;medium-3&#32;small-12&#32;columns&#32;left"></div>
                    </div>

                    <div className='small-12 columns button-group'>
                        <input className="button&#32;small&#32;navigationButton&#32;primary"
                            id="verifyverifyyouridentitySubmit" name="Submit" type="submit" value="Continue" />
                    </div>
                </div>
            </div>
        </div>

    </form>
</div>   
        </>
    )
}

export default Step1
