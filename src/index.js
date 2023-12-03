// Function to get the current date and time in the desired format
function getCurrentDateTime() {
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    // Format the date and time as desired
    var formattedDateTime = 'last login @ ' + day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds + ' on ttys002';
    return formattedDateTime;
}

    
// Get current date and time
var lastLoginElement = document.getElementById('lastLogin');
lastLoginElement.textContent = getCurrentDateTime();


// Get user agent information
var userAgent = navigator.userAgent;

// Display user agent information on the webpage
var userAgentElement = document.getElementById('userAgent');
userAgentElement.textContent = userAgent;

function handleTypedInput(input) {
    if (input.toLowerCase() === 'yes') {
        window.location.href = 'https://www.youtube.com/watch?v=-8PvYvli-4M'; 
    } else if (input.toLowerCase() === 'no') {
        window.location.href = 'src/me.webp';
    } else if (input.toLowerCase() === 'help') {
        // Provide help functionality or redirect to a help page for "help"
        window.location.href = 'https://www.youtube.com/watch?v=6n3pFFPSlW4'; 
    } else if (inpit.toLowerCase() == 'secretpassword') {
        window.location.href = '/#'
    }
    }

    let typedInput = '';

    document.addEventListener('keypress', function(event) {
    typedInput += event.key.toLowerCase();
    
    if (typedInput === 'yes' || typedInput === 'no' || typedInput === 'help') {
        handleTypedInput(typedInput);
        typedInput = ''; // Reset typed input
    }
    });


    document.addEventListener('contextmenu', event => event.preventDefault()) //stops users right clicking
    $(document).ready((function(){$("[data-bs-hover-animate]").mouseenter((function(){var a=$(this);a.addClass("animated "+a.attr("data-bs-hover-animate"))})).mouseleave((function(){var a=$(this);a.removeClass("animated "+a.attr("data-bs-hover-animate"))}))}));
    $(document).keydown(function (event) {
        if (event.keyCode == 123) { // Prevent F12
            return false;
        } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
            return false;
        }
    });
var rev = "fwd";
function titlebar(val){
    var msg  = "Liam G- Citizen";
    var res = " ";
    var speed = 300;
    var pos = val;
    msg = "   |-"+msg+"-|";
    var le = msg.length;
    if(rev == "fwd"){
        if(pos < le){
            pos = pos+1;
            scroll = msg.substr(0,pos);
            document.title = scroll;
            timer = window.setTimeout("titlebar("+pos+")",speed);
            }
        else {
            rev = "bwd";
            timer = window.setTimeout("titlebar("+pos+")",speed);
            }
        }
        else {
            if(pos > 0) {
                pos = pos-1;
                var ale = le-pos;
                scrol = msg.substr(ale,le);
                document.title = scrol;
                timer = window.setTimeout("titlebar("+pos+")",speed);
            }
            else {
                rev = "fwd";
                timer = window.setTimeout("titlebar("+pos+")",speed);
            }
        }
    }
titlebar(0);
