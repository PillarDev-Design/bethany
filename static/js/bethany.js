/******************************************************************************\
| bethany.js                                                                   |
|------------------------------------------------------------------------------|
| Contains JavaScript snippets for Bethany's site controls.                    |
\******************************************************************************/


/******************************************************************************\
| Global Variables                                                             |
\******************************************************************************/

/******************************************************************************\
| Global Functions                                                             |
\******************************************************************************/
//============================================\\
// centralInit                                \\
//============================================\\
function centralInit(){
    homeNavBoxEvents();
}
//============================================\\
// homeNavBoxEvents                           \\
//============================================\\
function homeNavBoxEvents(){
    /**************************************************************************\
     * HOME                                                                   *
    \**************************************************************************/
    $('home_nav_home').addEvent('click', function(){
        //====================================================================\\
        // Adjust Tab Classes                                                 \\
        //====================================================================\\
        if($('home_nav_home').hasClass('home_nav_active')){
        }else{
            $('home_nav_home').removeClass('home_nav_inactive');
            $('home_nav_home').addClass('home_nav_active');
            if($('home_nav_about').hasClass('home_nav_active')){
                $('home_nav_about').removeClass('home_nav_active');
                $('home_nav_about').addClass('home_nav_inactive');
            }
            if($('home_nav_resume').hasClass('home_nav_active')){
                $('home_nav_resume').removeClass('home_nav_active');
                $('home_nav_resume').addClass('home_nav_inactive');
            }
            if($('home_nav_contact').hasClass('home_nav_active')){
                $('home_nav_contact').removeClass('home_nav_active');
                $('home_nav_contact').addClass('home_nav_inactive');
            }
        }
        //====================================================================\\
        // Adjust Content                                                     \\
        //====================================================================\\
        // Initial Fade
        $('home_nav_content').fade(0);
        // Replace Content, then Fade back in on a timer.
        setTimeout(function(){
            // Replace Content
            $('home_nav_content').innerHTML = "This is the test content of home. This is the test content of home. This is the test content of home. This is the test content of home. This is the test content of home. This is the test content of home. This is the test content of home. This is the test content of home. This is the test content of home. This is the test content of home.";
            // Fade back in
            $('home_nav_content').fade(1); 
        }, 1000);
    });
    /**************************************************************************\
     * ABOUT                                                                  *
    \**************************************************************************/
    $('home_nav_about').addEvent('click', function(){
        //====================================================================\\
        // Adjust Tab Classes                                                 \\
        //====================================================================\\
        if($('home_nav_about').hasClass('home_nav_active')){
        }else{
            $('home_nav_about').removeClass('home_nav_inactive');
            $('home_nav_about').addClass('home_nav_active');
            if($('home_nav_home').hasClass('home_nav_active')){
                $('home_nav_home').removeClass('home_nav_active');
                $('home_nav_home').addClass('home_nav_inactive');
            }
            if($('home_nav_resume').hasClass('home_nav_active')){
                $('home_nav_resume').removeClass('home_nav_active');
                $('home_nav_resume').addClass('home_nav_inactive');
            }
            if($('home_nav_contact').hasClass('home_nav_active')){
                $('home_nav_contact').removeClass('home_nav_active');
                $('home_nav_contact').addClass('home_nav_inactive');
            }
        }
        //====================================================================\\
        // Adjust Content                                                     \\
        //====================================================================\\
        // Initial Fade
        $('home_nav_content').fade(0);
        // Replace Content, then Fade back in on a timer.
        setTimeout(function(){
            // Replace Content
            $('home_nav_content').innerHTML = "This is the test content of about. This is the test content of about. This is the test content of about. This is the test content of about. This is the test content of about. This is the test content of about. This is the test content of about. This is the test content of about. This is the test content of about. This is the test content of about.";
            // Fade back in
            $('home_nav_content').fade(1); 
        }, 1000);
    });
    /**************************************************************************\
     * RESUME                                                                 *
    \**************************************************************************/
    $('home_nav_resume').addEvent('click', function(){
        //====================================================================\\
        // Adjust Tab Classes                                                 \\
        //====================================================================\\
        if($('home_nav_resume').hasClass('home_nav_active')){
        }else{
            $('home_nav_resume').removeClass('home_nav_inactive');
            $('home_nav_resume').addClass('home_nav_active');
            if($('home_nav_home').hasClass('home_nav_active')){
                $('home_nav_home').removeClass('home_nav_active');
                $('home_nav_home').addClass('home_nav_inactive');
            }
            if($('home_nav_about').hasClass('home_nav_active')){
                $('home_nav_about').removeClass('home_nav_active');
                $('home_nav_about').addClass('home_nav_inactive');
            }
            if($('home_nav_contact').hasClass('home_nav_active')){
                $('home_nav_contact').removeClass('home_nav_active');
                $('home_nav_contact').addClass('home_nav_inactive');
            }
        }
        //====================================================================\\
        // Adjust Content                                                     \\
        //====================================================================\\
        // Initial Fade
        $('home_nav_content').fade(0);
        // Replace Content, then Fade back in on a timer.
        setTimeout(function(){
            // Replace Content
            $('home_nav_content').innerHTML = "This is the test content of resume. This is the test content of resume. This is the test content of resume. This is the test content of resume. This is the test content of resume. This is the test content of resume. This is the test content of resume. This is the test content of resume. This is the test content of resume. This is the test content of resume.";
            // Fade back in
            $('home_nav_content').fade(1); 
        }, 1000);
    });
    /**************************************************************************\
     * CONTACT                                                                *
    \**************************************************************************/
    $('home_nav_contact').addEvent('click', function(){
        //====================================================================\\
        // Adjust Tab Classes                                                 \\
        //====================================================================\\
        if($('home_nav_contact').hasClass('home_nav_active')){
        }else{
            $('home_nav_contact').removeClass('home_nav_inactive');
            $('home_nav_contact').addClass('home_nav_active');
            if($('home_nav_home').hasClass('home_nav_active')){
                $('home_nav_home').removeClass('home_nav_active');
                $('home_nav_home').addClass('home_nav_inactive');
            }
            if($('home_nav_resume').hasClass('home_nav_active')){
                $('home_nav_resume').removeClass('home_nav_active');
                $('home_nav_resume').addClass('home_nav_inactive');
            }
            if($('home_nav_about').hasClass('home_nav_active')){
                $('home_nav_about').removeClass('home_nav_active');
                $('home_nav_about').addClass('home_nav_inactive');
            }
        }
        //====================================================================\\
        // Adjust Content                                                     \\
        //====================================================================\\
        // Initial Fade
        $('home_nav_content').fade(0);
        // Replace Content, then Fade back in on a timer.
        setTimeout(function(){
            // Replace Content
            $('home_nav_content').innerHTML = "This is the test content of contact. This is the test content of contact. This is the test content of contact. This is the test content of contact. This is the test content of contact. This is the test content of contact. This is the test content of contact. This is the test content of contact. This is the test content of contact. This is the test content of contact.";
            // Fade back in
            $('home_nav_content').fade(1); 
        }, 1000);
    });
}
