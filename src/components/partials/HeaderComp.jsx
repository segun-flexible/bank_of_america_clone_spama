import React from 'react'
import logo from "../../img/logo.png"
function HeaderComponent() {
    return (
        <>

         <a class="skip-to" href="#content">Skip to content</a>
    <div class="header-container" role="banner">







        <div class="row header-row">
            <div class="columns brand-container show-for-medium-up">
                <div class="small-12 medium-3 custom-medium-push-5 columns">
                    <div class="logo-wrapper">
                        <a href="/">
                            <img class="header-logo&#32;medium&#32;img-responsive" id="brand-logo"
                                src={logo} title="" />
                        </a>
                    </div>
                </div>
                <div class="small-12 medium-9 custom-medium-pull-7 columns">
                    <div class="program-wrapper">
                        <span class="header-card-program"></span>
                    </div>
                </div>
            </div>

            <div class="small-12 show-for-small-only columns">
                <nav data-topbar class="top-bar mobile-nav" role="navigation" aria-label="Main" style={{height:51}}>

                    <ul class="title-area">
                        
                        <li class="name">
                            <a href="/">
                                <img alt="Bank&#32;Of&#32;America,&#32;N.&#32;A.&#32;Logo"
                                    class="header-logo&#32;medium&#32;img-responsive" id="brand-logo-mobile"
                                    src={logo} title="" />
                            </a>
                        </li>
                        <li class="toggle-topbar menu-icon">
                            <button id="bars" class="menu-icon" aria-expanded="false">
                                <i class="fa fa-bars" aria-hidden="true"></i>
                                <span class="a11y-hide-visually">Expand Navigation Menu</span>
                            </button>
                        </li>
                        <li class="header-card-program"></li>
                    </ul>


                    <section class="top-bar-section">
                        <ul class="left">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Sign In</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Activate My Card</a>
                            </li>
                        </ul>
                    </section>






                </nav>
            </div>


            <div class="row show-for-medium-up">
                <div class="medium-12 columns">
                    <nav data-topbar class="top-bar desktop-nav" role="navigation" aria-label="Main">

                        <section class="top-bar-section">
                            <ul class="left">
                                <li>
                                    <a href="javascript:void(0)">Home</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Sign In</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Activate My Card</a>
                                </li>
                            </ul>
                        </section>






                    </nav>
                </div>
            </div>
        </div>




    </div>   

        </>
    )
}

export default HeaderComponent
