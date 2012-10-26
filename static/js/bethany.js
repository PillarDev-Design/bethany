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
// switchTabs                                 \\
//============================================\\
function switchTabs(tabName, newContent){
    var activateArray = [], deactivateArray = [];

    if(tabName === 'home_nav_home'){
        activateArray.push('home_nav_home');
        deactivateArray = ['home_nav_about', 'home_nav_resume', 'home_nav_contact'];
    }else if(tabName === 'home_nav_about'){
        activateArray.push('home_nav_about');
        deactivateArray = ['home_nav_home', 'home_nav_resume', 'home_nav_contact'];
    }else if(tabName === 'home_nav_resume'){
        activateArray.push('home_nav_resume');
        deactivateArray = ['home_nav_about', 'home_nav_home', 'home_nav_contact'];
    }else if(tabName === 'home_nav_contact'){
        activateArray.push('home_nav_contact');
        deactivateArray = ['home_nav_about', 'home_nav_resume', 'home_nav_home'];
    }

    // Activate
    var activateLength = activateArray.length;
    for(var i=0; i<activateLength; i++){
        if($(activateArray[i]).hasClass('home_nav_inactive')){
            $(activateArray[i]).removeClass('home_nav_inactive');
            $(activateArray[i]).addClass('home_nav_active');
        }
    }

    // Deactivate
    var deactivateLength = deactivateArray.length;
    for(var i=0; i<deactivateLength; i++){
        if($(deactivateArray[i]).hasClass('home_nav_active')){
            $(deactivateArray[i]).removeClass('home_nav_active');
            $(deactivateArray[i]).addClass('home_nav_inactive');
        }
    }

    // Initial Fade
    $('home_nav_content').set('tween', { duration: 500 }).fade('out');

    // Replace Content and Fade back on a timer.
    setTimeout(function(){
        // Replace Content
        $('home_nav_content').innerHTML = newContent;

        // Fade back in
        $('home_nav_content').set('tween', { duration: 500 }).fade('in'); 
    }, 500);
}
//============================================\\
// homeNavBoxEvents                           \\
//============================================\\
function homeNavBoxEvents(){
    var replacementContent = "";

    /**************************************************************************\
     * HOME                                                                   *
    \**************************************************************************/
    $('home_nav_home').addEvent('click', function(){
        // Define replacementContent
        replacementContent = "This is the test content of home. This is the test content of home. This is the test content of home. This is the test content of home. This is the test content of home. This is the test content of home. This is the test content of home. This is the test content of home. This is the test content of home. This is the test content of home.";

        // Call switchTabs
        switchTabs('home_nav_home', replacementContent);
    });

    /**************************************************************************\
     * ABOUT                                                                  *
    \**************************************************************************/
    $('home_nav_about').addEvent('click', function(){
        // Define replacementContent
        replacementContent = "This is the test content of about. This is the test content of about. This is the test content of about. This is the test content of about. This is the test content of about. This is the test content of about. This is the test content of about. This is the test content of about. This is the test content of about. This is the test content of about.";

        // Call switchTabs
        switchTabs('home_nav_about', replacementContent);
    });

    /**************************************************************************\
     * RESUME                                                                 *
    \**************************************************************************/
    $('home_nav_resume').addEvent('click', function(){
        // Define replacementContent
        replacementContent = "This is the test content of resume. This is the test content of resume. This is the test content of resume. This is the test content of resume. This is the test content of resume. This is the test content of resume. This is the test content of resume. This is the test content of resume. This is the test content of resume. This is the test content of resume.";

        // Call switchTabs
        switchTabs('home_nav_resume', replacementContent);
    });

    /**************************************************************************\
     * CONTACT                                                                *
    \**************************************************************************/
    $('home_nav_contact').addEvent('click', function(){
        // Define replacementContent
        replacementContent = "This is the test content of contact. This is the test content of contact. This is the test content of contact. This is the test content of contact. This is the test content of contact. This is the test content of contact. This is the test content of contact. This is the test content of contact. This is the test content of contact. This is the test content of contact.";

        // Call switchTabs
        switchTabs('home_nav_contact', replacementContent);
    });
}
