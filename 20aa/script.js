// Mouse on answer buttons effects //
function hoverOn(clicked_id) {
    document.getElementById(clicked_id).style.backgroundColor = "#e0af6a";
    document.getElementById(clicked_id).style.borderRadius = "38px";
    document.getElementById(clicked_id).style.transform = "scale(1.04)";
    document.getElementById(clicked_id).style.cursor = "pointer";
};
function Active(clicked_id) {
    document.getElementById(clicked_id).style.backgroundColor = "#c59a5e";
    document.getElementById(clicked_id).getElementsByTagName("img")[0].setAttribute('draggable', false);
};
function Released(clicked_id) {
    document.getElementById(clicked_id).style.backgroundColor = "#DCAF72";
    document.getElementById(clicked_id).style.borderRadius = "30px";
    document.getElementById(clicked_id).style.transform = "scale(1)";
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////      Swapper Button     ////
//  Rotate function for swapper img ON USER CLICK
var landscapeRotateAngle = 90;
var portraitRotateAngle = 0;
var rollCounter = 0; // Rickroll?
function rotate(image) {
    if (window.matchMedia("(orientation: landscape)").matches) {
        image.setAttribute("style", "transform: rotate(" + landscapeRotateAngle + "deg) scale(1.3)");
        window.setTimeout(function(){
            image.setAttribute("style", "transform: rotate(" + (landscapeRotateAngle-180) + "deg) scale(1.0)");
        },900)
        landscapeRotateAngle = landscapeRotateAngle + 180;

    } else if (window.matchMedia("(orientation: portrait)").matches) {
        image.setAttribute("style", "transform: rotate(" + portraitRotateAngle + "deg) scale(1.3)");
        window.setTimeout(function(){
            image.setAttribute("style", "transform: rotate(" + (portraitRotateAngle-180) + "deg) scale(1.0)");
        },900)
        portraitRotateAngle = portraitRotateAngle + 180;
        
    }

    //  Anyone wants some Rickroll? 7 Clicks in 2500ms
    rollCounter = rollCounter + 1;
    if (rollCounter === 7) {
        window.open("https://youtu.be/dQw4w9WgXcQ?start=0&autoplay=1", '_blank', "noopener noreferrer");
    };
    window.setTimeout(function(){
        rollCounter = 0;
    },3500);
    

    //  Actual useful function!!
    if (questionStructure_toggle) { 
        questionStructure_toggle = false;   //    NAME to STRUCTURE
        if (displayStructure_toggle) {
            window.setTimeout(function(){
                document.getElementById("question-img").style.display = "none";
                document.getElementById("question-text").style.display = "block"
                var allAnswerboxes_img = document.getElementsByClassName("answer-select-box-img");
                for (var i = 0; i < allAnswerboxes_img.length; i++) {
                    allAnswerboxes_img[i].style.display = "inline";
                };
                var allAnswerboxes_text = document.getElementsByClassName("answer-text");
                for (var i = 0; i < allAnswerboxes_text.length; i++) {
                    allAnswerboxes_text[i].style.display = "none";
                };
    
                QnA();
            },700);
        } else if (!displayStructure_toggle) {
            window.setTimeout(function(){
                document.getElementById("question-img").style.display = "none";
                document.getElementById("question-text").style.display = "block"
                var allAnswerboxes_img = document.getElementsByClassName("answer-select-box-img");
                for (var i = 0; i < allAnswerboxes_img.length; i++) {
                    allAnswerboxes_img[i].style.display = "none";
                };
                var allAnswerboxes_text = document.getElementsByClassName("answer-text");
                for (var i = 0; i < allAnswerboxes_text.length; i++) {
                    allAnswerboxes_text[i].style.display = "inline";
                };
    
                QnA();
            },700);
        }

        

    } 
    else if (!questionStructure_toggle) { 
        questionStructure_toggle = true;    //  STRUCTURE to NAME
        if (displayStructure_toggle) {
            window.setTimeout(function(){
                document.getElementById("question-img").style.display = "inline";
                document.getElementById("question-text").style.display = "none"
                var allAnswerboxes_img = document.getElementsByClassName("answer-select-box-img");
                for (var i = 0; i < allAnswerboxes_img.length; i++) {
                    allAnswerboxes_img[i].style.display = "none";
                };
                var allAnswerboxes_text = document.getElementsByClassName("answer-text");
                for (var i = 0; i < allAnswerboxes_text.length; i++) {
                    allAnswerboxes_text[i].style.display = "inline";
                };
    
                QnA();
            },700);
        } else if (!displayStructure_toggle) {
            window.setTimeout(function(){
                document.getElementById("question-img").style.display = "none";
                document.getElementById("question-text").style.display = "inline"
                var allAnswerboxes_img = document.getElementsByClassName("answer-select-box-img");
                for (var i = 0; i < allAnswerboxes_img.length; i++) {
                    allAnswerboxes_img[i].style.display = "none";
                };
                var allAnswerboxes_text = document.getElementsByClassName("answer-text");
                for (var i = 0; i < allAnswerboxes_text.length; i++) {
                    allAnswerboxes_text[i].style.display = "inline";
                };
    
                QnA();
            },700);
        }
    }
};

//  Check for @media to fix swapper position AUTOMATIC SCREEN ROTATION
var ifPortrait = window.matchMedia("screen and (max-width: 1200px) and (orientation: Portrait), screen and (max-height: 800px) and (orientation: Portrait)");

function myFunction(ifPortrait) {
    if (ifPortrait.matches) { // If media query matches
        document.getElementById("swapper-img").style.transform = ("rotate(" + portraitRotateAngle + "deg) scale(1.3)");
        window.setTimeout(function(){
            document.getElementById("swapper-img").style.transform = ("rotate(" + (portraitRotateAngle-180) + "deg) scale(1.0)");
        },250)
        portraitRotateAngle = portraitRotateAngle + 180;
        console.log("Portrait screen detected! Rotating for Portrait...");

    } else {
        document.getElementById("swapper-img").style.transform = ("rotate(" + landscapeRotateAngle + "deg) scale(1.3)");
        window.setTimeout(function(){
            document.getElementById("swapper-img").style.transform = ("rotate(" + (landscapeRotateAngle-180) + "deg) scale(1.0)");
        },250)
        landscapeRotateAngle = landscapeRotateAngle + 180;
        console.log("Landscape screen detected! Rotating for Landscape...");
    };
  };

//  Initiating orientation detection
window.setTimeout(function(){
    myFunction(ifPortrait); // Call listener function at run time
},10);

ifPortrait.addListener(myFunction) // Attach listener function on state changes



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////      SETTING OPTIONS     ////

var settingOpen = true;
var questionStructure_toggle = true; // !!! Basically swapper toggle. I'm just too lazy to rename this :). Eg: True = Display structure in Question && Display text in Answer.
var displayStructure_toggle = true;
var fullname_toggle = true;
var threeLettercode_toggle = true;
var oneLettercode_toggle = true;
function checkSetting() {
    if (settingOpen) {
        document.getElementById("screen-overlay").style.display = "block";
        document.getElementById("setting-menu-backdrop").style.display = "block";
    } else {
        document.getElementById("screen-overlay").style.display = "none";
        document.getElementById("setting-menu-backdrop").style.display = "none";
    }
}

function openSetting() {
    settingOpen = true;
    checkSetting();
}
function closeSetting() {
    settingOpen = false;
    checkSetting();
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
}

//  Fix the toggle check-state if user open/exit fullscreen using F11/Esc/Return instead of the toggle button
document.onfullscreenchange = function ( event ) {
    if (!document.fullscreenElement) {
        document.getElementById("fullscreen-option").checked = false;
    } else if (document.fullscreenElement) {
        document.getElementById("fullscreen-option").checked = true;
    }
};


function toggleStructure() {
    if (!displayStructure_toggle) {
        displayStructure_toggle = true;
        questionStructure_toggle = true;
        document.getElementById("question-img").style.display = "inline";
        document.getElementById("question-text").style.display = "none"
        var allAnswerboxes_img = document.getElementsByClassName("answer-select-box-img");
        for (var i = 0; i < allAnswerboxes_img.length; i++) {
            allAnswerboxes_img[i].style.display = "none";
        };
        var allAnswerboxes_text = document.getElementsByClassName("answer-text");
        for (var i = 0; i < allAnswerboxes_text.length; i++) {
            allAnswerboxes_text[i].style.display = "inline";
        };
        QnA();

    } else if (displayStructure_toggle) {
        displayStructure_toggle = false;
        questionStructure_toggle = true;
        document.getElementById("question-img").style.display = "none";
        document.getElementById("question-text").style.display = "inline"
        var allAnswerboxes_img = document.getElementsByClassName("answer-select-box-img");
        for (var i = 0; i < allAnswerboxes_img.length; i++) {
            allAnswerboxes_img[i].style.display = "none";
        };
        var allAnswerboxes_text = document.getElementsByClassName("answer-text");
        for (var i = 0; i < allAnswerboxes_text.length; i++) {
            allAnswerboxes_text[i].style.display = "inline";
        };
        QnA();
    }
}

function toggleFullname() {
    if (!fullname_toggle) {
        fullname_toggle = true;
        QnA();
    } else if (fullname_toggle) {
        fullname_toggle = false;
        QnA();
    }
}

function toggle3Letter() {
    if (!threeLettercode_toggle) {
        threeLettercode_toggle = true;
        QnA();
    } else if (threeLettercode_toggle) {
        threeLettercode_toggle = false;
        QnA();
    }
}

function toggle1Letter() {
    if (!oneLettercode_toggle) {
        oneLettercode_toggle = true;
        QnA();
    } else if (oneLettercode_toggle) {
        oneLettercode_toggle = false;
        QnA();
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////      MAIN QnA GENERATION FUNCTIONS     ////

var correctAnswer_slot = "";
var noDoubleclick = true;
var previous_roundIndex = 20;   //  Make sure first one cannot match anything other indexes

//  randomize() function
function randomize(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // Math.floor(Math.random() * (max - min + 1) + min);
};



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////      ON PAGE LOAD     ////
//  On pageload --> Default Question = Structure, Answer = Name<br>(Nam, N)
$(document).ready(function(){
    QnA();
    checkSetting();

    // Instant check if page is magically loaded already...
    if(document.readyState === 'complete') {
        // good to go!
        
        $('body').addClass('loaded');
    }

    // Check every 1 sec until page is fully loaded
    var interval = setInterval(function() {
        if(document.readyState === 'complete') {
            clearInterval(interval);
            $('body').addClass('loaded');
        }    
    }, 500);
    
});


//  Generate QnA set: Check for input generation preference and call appropriate Generation Type function()
function QnA(){
    console.log("----------NEW ROUND! LET'S GO!!!----------");

    if (questionStructure_toggle && !displayStructure_toggle && !fullname_toggle) {
        QnA_3Letter_to_1Letter();
    } else if (!questionStructure_toggle && !displayStructure_toggle && !fullname_toggle) {
        QnA_1Letter_to_3Letter();
    } else if (questionStructure_toggle && displayStructure_toggle) {
        QnA_Structure_to_Name();
    } else if (!questionStructure_toggle && displayStructure_toggle) {
        QnA_Name_to_Structure();
    } else if (questionStructure_toggle && !displayStructure_toggle) {
        QnA_Fullname_to_Shortcode();
    } else if (!questionStructure_toggle && !displayStructure_toggle) {
        QnA_Shortcode_to_Fullname();
    } 

    window.setTimeout(function() {
        noDoubleclick = true;
    }, 350);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////      Generation Types     ////

//  Structure to Name
function QnA_Structure_to_Name() {

    //  Get a random AA != previous_roundIndex
    var roundIndex = randomize(0,19);
    
    if (roundIndex != previous_roundIndex) {    //  No back-to-back similar question
        var questionAA = aaInfo[roundIndex].image;

        // Write question on HTML, and choose a random answer_slot
        document.getElementById("question-img").src = questionAA;
        correctAnswer_slot = ('answer-select-box-'+(randomize(0,5) + 1));
        
        //  Make a random fill of wrong answer
        var wrongAnswer_List = [];
        generate_wrongAnswers(roundIndex, wrongAnswer_List);  //  Pass in roundIndex var!!!!!
        console.log(wrongAnswer_List);
        console.log("round index = "+ roundIndex);
        console.log("previous round index = "+ previous_roundIndex);
        console.log("Cheat-answer: "+ aaInfo[roundIndex].name);

        var i = 1;
        var j = 0;
        var wrongAnswer_Slot = "";
        var wrongAnswer = "";
        if (fullname_toggle) {
            if (threeLettercode_toggle) {
                if (oneLettercode_toggle) {
                    var correctAnswer = (aaInfo[roundIndex].name +'<br>(' + aaInfo[roundIndex].threeLetter + ', ' + aaInfo[roundIndex].oneLetter + ')');
                    while (i<=6 && j<=4) {
                        wrongAnswer = aaInfo[wrongAnswer_List[j]].name  +"<br>(" + aaInfo[wrongAnswer_List[j]].threeLetter + ", "  + aaInfo[wrongAnswer_List[j]].oneLetter + ")";
                        wrongAnswer_Slot = "answer-select-box-"+i;
                        if (wrongAnswer_Slot != correctAnswer_slot) {
                            document.getElementById(wrongAnswer_Slot).getElementsByTagName("span")[0].innerHTML = wrongAnswer;
                            i+=1;
                            j+=1;
                        } else {
                            i+=1;
                        }
                        
                    }
                } else if (!oneLettercode_toggle) {
                    var correctAnswer = (aaInfo[roundIndex].name +'<br>(' + aaInfo[roundIndex].threeLetter +')');
                    while (i<=6 && j<=4) {
                        wrongAnswer = aaInfo[wrongAnswer_List[j]].name  +"<br>(" + aaInfo[wrongAnswer_List[j]].threeLetter + ")";
                        wrongAnswer_Slot = "answer-select-box-"+i;
                        if (wrongAnswer_Slot != correctAnswer_slot) {
                            document.getElementById(wrongAnswer_Slot).getElementsByTagName("span")[0].innerHTML = wrongAnswer;
                            i+=1;
                            j+=1;
                        } else {
                            i+=1;
                        }
                        
                    }
                }
            } else if (!threeLettercode_toggle) {
                if (oneLettercode_toggle) {
                    var correctAnswer = (aaInfo[roundIndex].name +'<br>(' + aaInfo[roundIndex].oneLetter + ')');
                    while (i<=6 && j<=4) {
                        wrongAnswer = aaInfo[wrongAnswer_List[j]].name  + "<br>("+ aaInfo[wrongAnswer_List[j]].oneLetter + ")";
                        wrongAnswer_Slot = "answer-select-box-"+i;
                        if (wrongAnswer_Slot != correctAnswer_slot) {
                            document.getElementById(wrongAnswer_Slot).getElementsByTagName("span")[0].innerHTML = wrongAnswer;
                            i+=1;
                            j+=1;
                        } else {
                            i+=1;
                        }
                        
                    }
                } else if (!oneLettercode_toggle) {
                    var correctAnswer = (aaInfo[roundIndex].name);
                    while (i<=6 && j<=4) {
                        wrongAnswer = aaInfo[wrongAnswer_List[j]].name;
                        wrongAnswer_Slot = "answer-select-box-"+i;
                        if (wrongAnswer_Slot != correctAnswer_slot) {
                            document.getElementById(wrongAnswer_Slot).getElementsByTagName("span")[0].innerHTML = wrongAnswer;
                            i+=1;
                            j+=1;
                        } else {
                            i+=1;
                        }
                        
                    }
                }
            }
        } else if (!fullname_toggle) {
            if (threeLettercode_toggle) {
                if (oneLettercode_toggle) {
                    var correctAnswer = (aaInfo[roundIndex].threeLetter + ' (' + aaInfo[roundIndex].oneLetter + ')');
                    while (i<=6 && j<=4) {
                        wrongAnswer = aaInfo[wrongAnswer_List[j]].threeLetter + " ("  + aaInfo[wrongAnswer_List[j]].oneLetter + ")";
                        wrongAnswer_Slot = "answer-select-box-"+i;
                        if (wrongAnswer_Slot != correctAnswer_slot) {
                            document.getElementById(wrongAnswer_Slot).getElementsByTagName("span")[0].innerHTML = wrongAnswer;
                            i+=1;
                            j+=1;
                        } else {
                            i+=1;
                        }
                        
                    }
                } else if (!oneLettercode_toggle) {
                    var correctAnswer = (aaInfo[roundIndex].threeLetter);
                    while (i<=6 && j<=4) {
                        wrongAnswer = aaInfo[wrongAnswer_List[j]].threeLetter;
                        wrongAnswer_Slot = "answer-select-box-"+i;
                        if (wrongAnswer_Slot != correctAnswer_slot) {
                            document.getElementById(wrongAnswer_Slot).getElementsByTagName("span")[0].innerHTML = wrongAnswer;
                            i+=1;
                            j+=1;
                        } else {
                            i+=1;
                        }
                        
                    }
                }
            } else if (!threeLettercode_toggle) {
                if (oneLettercode_toggle) {
                    var correctAnswer = (aaInfo[roundIndex].oneLetter);
                    while (i<=6 && j<=4) {
                        wrongAnswer = aaInfo[wrongAnswer_List[j]].oneLetter;
                        wrongAnswer_Slot = "answer-select-box-"+i;
                        if (wrongAnswer_Slot != correctAnswer_slot) {
                            document.getElementById(wrongAnswer_Slot).getElementsByTagName("span")[0].innerHTML = wrongAnswer;
                            i+=1;
                            j+=1;
                        } else {
                            i+=1;
                        }
                        
                    }
                } else if (!oneLettercode_toggle) {
                    var correctAnswer = "ಠ_ಠ!";
                    while (i<=6 && j<=4) {
                        wrongAnswer = "ಠ_ಠ!";
                        wrongAnswer_Slot = "answer-select-box-"+i;
                        if (wrongAnswer_Slot != correctAnswer_slot) {
                            document.getElementById(wrongAnswer_Slot).getElementsByTagName("span")[0].innerHTML = wrongAnswer;
                            i+=1;
                            j+=1;
                        } else {
                            i+=1;
                        }
                        
                    }
                }
            }
        };

        // Write correct answer to the correctAnswer_slot
        document.getElementById(correctAnswer_slot).getElementsByTagName("span")[0].innerHTML = correctAnswer;
        previous_roundIndex = roundIndex;
    } else {
        console.log("Found a replicated question! Generating a new one...");
        QnA();
        
    }
};



//  Name to Structure
function QnA_Name_to_Structure() {

    //  Get a random AA != previous_roundIndex
    var roundIndex = randomize(0,19);
    
    if (roundIndex != previous_roundIndex) {    //  No back-to-back similar question

        if (fullname_toggle) {
            if (threeLettercode_toggle) {
                if (oneLettercode_toggle) {
                    var questionAA = (aaInfo[roundIndex].name +'<br>(' + aaInfo[roundIndex].threeLetter + ', ' + aaInfo[roundIndex].oneLetter + ')');
                } else if (!oneLettercode_toggle) {
                    var questionAA = (aaInfo[roundIndex].name +'<br>(' + aaInfo[roundIndex].threeLetter + ')');
                }
            } else if (!threeLettercode_toggle) {
                if (oneLettercode_toggle) {
                    var questionAA = (aaInfo[roundIndex].name +'<br>(' + aaInfo[roundIndex].oneLetter + ')');
                } else if (!oneLettercode_toggle) {
                    var questionAA = (aaInfo[roundIndex].name);
                }
            }
        } else if (!fullname_toggle) {
            if (threeLettercode_toggle) {
                if (oneLettercode_toggle) {
                    var questionAA = (aaInfo[roundIndex].threeLetter + ' (' + aaInfo[roundIndex].oneLetter + ')');
                } else if (!oneLettercode_toggle) {
                    var questionAA = (aaInfo[roundIndex].threeLetter);
                }
            } else if (!threeLettercode_toggle) {
                if (oneLettercode_toggle) {
                    var questionAA = (aaInfo[roundIndex].oneLetter);
                } else if (!oneLettercode_toggle) {
                    var questionAA = "ಠ_ಠ!";
                }
            }
        };

        var correctAnswer = aaInfo[roundIndex].image;

        // Write question on HTML, and choose a random answer_slot to write the correct answer to
        document.getElementById("question-text").innerHTML = questionAA;

        correctAnswer_slot = ('answer-select-box-'+(randomize(0,5) + 1));
        document.getElementById(correctAnswer_slot).getElementsByTagName("img")[0].src = correctAnswer;
        
        //  Make a random fill of wrong answer
        var wrongAnswer_List = [];
        generate_wrongAnswers(roundIndex, wrongAnswer_List);  //  Pass in roundIndex var!!!!!
        console.log(wrongAnswer_List);
        console.log("round index = "+ roundIndex);
        console.log("previous round index = "+ previous_roundIndex);
        console.log("Cheat-answer: "+ correctAnswer_slot);

        var i = 1;
        var j = 0;
        var wrongAnswer_Slot = "";
        var wrongAnswer = "";
        while (i<=6 && j<=4) {
            wrongAnswer = aaInfo[wrongAnswer_List[j]].image;
            wrongAnswer_Slot = "answer-select-box-"+i;
            if (wrongAnswer_Slot != correctAnswer_slot) {
                document.getElementById(wrongAnswer_Slot).getElementsByTagName("img")[0].src = wrongAnswer;
                i+=1;
                j+=1;
            } else {
                i+=1;
            }
        }

        previous_roundIndex = roundIndex;
    } else {
        console.log("Found a replicated question! Generating a new one...");
        QnA();
        
    }
};



//  Fullname to 3Letter and/or 1Letter
function QnA_Fullname_to_Shortcode() {

    //  Get a random AA != previous_roundIndex
    var roundIndex = randomize(0,19);

    if (roundIndex != previous_roundIndex) {    //  No back-to-back similar question
        var questionAA = (aaInfo[roundIndex].name);

        // Write question on HTML, and choose a random answer_slot to write the correct answer to
        document.getElementById("question-text").innerHTML = questionAA;
        correctAnswer_slot = ('answer-select-box-'+(randomize(0,5) + 1));

        //  Make a random fill of wrong answer
        var wrongAnswer_List = [];
        generate_wrongAnswers(roundIndex, wrongAnswer_List);  //  Pass in roundIndex var!!!!!
        console.log(wrongAnswer_List);
        console.log("round index = "+ roundIndex);
        console.log("previous round index = "+ previous_roundIndex);
        console.log("Cheat-answer: "+ aaInfo[roundIndex].threeLetter + ' (' + aaInfo[roundIndex].oneLetter + ')');

        var i = 1;
        var j = 0;
        var wrongAnswer_Slot = "";
        var wrongAnswer = "";

        if (threeLettercode_toggle) {
            if (oneLettercode_toggle) {
                var correctAnswer = (aaInfo[roundIndex].threeLetter + ' (' + aaInfo[roundIndex].oneLetter + ')');
                while (i<=6 && j<=4) {
                    wrongAnswer = aaInfo[wrongAnswer_List[j]].threeLetter + " ("  + aaInfo[wrongAnswer_List[j]].oneLetter + ")";
                    wrongAnswer_Slot = "answer-select-box-"+i;
                    if (wrongAnswer_Slot != correctAnswer_slot) {
                        document.getElementById(wrongAnswer_Slot).getElementsByTagName("span")[0].innerHTML = wrongAnswer;
                        i+=1;
                        j+=1;
                    } else {
                        i+=1;
                    }
                    
                }
            } else if (!oneLettercode_toggle) {
                var correctAnswer = (aaInfo[roundIndex].threeLetter);
                while (i<=6 && j<=4) {
                    wrongAnswer = aaInfo[wrongAnswer_List[j]].threeLetter;
                    wrongAnswer_Slot = "answer-select-box-"+i;
                    if (wrongAnswer_Slot != correctAnswer_slot) {
                        document.getElementById(wrongAnswer_Slot).getElementsByTagName("span")[0].innerHTML = wrongAnswer;
                        i+=1;
                        j+=1;
                    } else {
                        i+=1;
                    }
                    
                }
            }
        } else if (!threeLettercode_toggle) {
            if (oneLettercode_toggle) {
                var correctAnswer = (aaInfo[roundIndex].oneLetter);
                while (i<=6 && j<=4) {
                    wrongAnswer = aaInfo[wrongAnswer_List[j]].oneLetter;
                    wrongAnswer_Slot = "answer-select-box-"+i;
                    if (wrongAnswer_Slot != correctAnswer_slot) {
                        document.getElementById(wrongAnswer_Slot).getElementsByTagName("span")[0].innerHTML = wrongAnswer;
                        i+=1;
                        j+=1;
                    } else {
                        i+=1;
                    }
                    
                }
            } else if (!oneLettercode_toggle) {
                var correctAnswer = "ಠ_ಠ!";
                while (i<=6 && j<=4) {
                    wrongAnswer = "ಠ_ಠ!";
                    wrongAnswer_Slot = "answer-select-box-"+i;
                    if (wrongAnswer_Slot != correctAnswer_slot) {
                        document.getElementById(wrongAnswer_Slot).getElementsByTagName("span")[0].innerHTML = wrongAnswer;
                        i+=1;
                        j+=1;
                    } else {
                        i+=1;
                    }
                    
                }
            }
        };

        // Write correct answer to the correctAnswer_slot
        document.getElementById(correctAnswer_slot).getElementsByTagName("span")[0].innerHTML = correctAnswer;
        previous_roundIndex = roundIndex;
    } else {
    console.log("Found a replicated question! Generating a new one...");
    QnA();
    
    };

};



//  3Letter and/or 1Letter to Fullname
function QnA_Shortcode_to_Fullname() {

    //  Get a random AA != previous_roundIndex
    var roundIndex = randomize(0,19);
    
    if (roundIndex != previous_roundIndex) {    //  No back-to-back similar question
        if (threeLettercode_toggle) {
            if (oneLettercode_toggle) {
                var questionAA = (aaInfo[roundIndex].threeLetter + ' (' + aaInfo[roundIndex].oneLetter + ')');
            } else if (!oneLettercode_toggle) {
                var questionAA = (aaInfo[roundIndex].threeLetter);
            }
        } else if (!threeLettercode_toggle) {
            if (oneLettercode_toggle) {
                var questionAA = (aaInfo[roundIndex].oneLetter);
            } else if (!oneLettercode_toggle) {
                var questionAA = "ಠ_ಠ!";
            }
        }
    
        var correctAnswer = aaInfo[roundIndex].name;

        // Write question on HTML, and choose a random answer_slot to write the correct answer to
        document.getElementById("question-text").innerHTML = questionAA;

        correctAnswer_slot = ('answer-select-box-'+(randomize(0,5) + 1));
        document.getElementById(correctAnswer_slot).getElementsByTagName("span")[0].innerHTML = correctAnswer;
        
        //  Make a random fill of wrong answer
        var wrongAnswer_List = [];
        generate_wrongAnswers(roundIndex, wrongAnswer_List);  //  Pass in roundIndex var!!!!!
        console.log(wrongAnswer_List);
        console.log("round index = "+ roundIndex);
        console.log("previous round index = "+ previous_roundIndex);
        console.log("Cheat-answer: "+ correctAnswer);

        var i = 1;
        var j = 0;
        var wrongAnswer_Slot = "";
        var wrongAnswer = "";
        while (i<=6 && j<=4) {
            wrongAnswer = aaInfo[wrongAnswer_List[j]].name;
            wrongAnswer_Slot = "answer-select-box-"+i;
            if (wrongAnswer_Slot != correctAnswer_slot) {
                document.getElementById(wrongAnswer_Slot).getElementsByTagName("span")[0].innerHTML = wrongAnswer;
                i+=1;
                j+=1;
            } else {
                i+=1;
            }
            
        }

        previous_roundIndex = roundIndex;

    } else {
        console.log("Found a replicated question! Generating a new one...");
        QnA();
        
    }
}



//  3Letter to 1Letter
function QnA_3Letter_to_1Letter() {

    //  Get a random AA != previous_roundIndex
    var roundIndex = randomize(0,19);
    if (roundIndex != previous_roundIndex) {    //  No back-to-back similar question 
        var questionAA = (aaInfo[roundIndex].threeLetter);
        
        // Choose a random answer_slot to write the correct answer to
        correctAnswer_slot = ('answer-select-box-'+(randomize(0,5) + 1));
    
        //  Make a random fill of wrong answer
        var wrongAnswer_List = [];
        generate_wrongAnswers(roundIndex, wrongAnswer_List);  //  Pass in roundIndex var!!!!!

        var i = 1;
        var j = 0;
        var wrongAnswer_Slot = "";
        var wrongAnswer = "";

        if (threeLettercode_toggle) {
            document.getElementById("question-text").innerHTML = questionAA;
            if (oneLettercode_toggle) {
                var correctAnswer = aaInfo[roundIndex].oneLetter;
                while (i<=6 && j<=4) {
                    wrongAnswer = aaInfo[wrongAnswer_List[j]].oneLetter;
                    wrongAnswer_Slot = "answer-select-box-"+i;
                    if (wrongAnswer_Slot != correctAnswer_slot) {
                        document.getElementById(wrongAnswer_Slot).getElementsByTagName("span")[0].innerHTML = wrongAnswer;
                        i+=1;
                        j+=1;
                    } else {
                        i+=1;
                    }
                    
                }
            } else if (!oneLettercode_toggle) {
                var correctAnswer = "ಠ_ಠ!";
                while (i<=6 && j<=4) {
                    wrongAnswer = "ಠ_ಠ!";
                    wrongAnswer_Slot = "answer-select-box-"+i;
                    if (wrongAnswer_Slot != correctAnswer_slot) {
                        document.getElementById(wrongAnswer_Slot).getElementsByTagName("span")[0].innerHTML = wrongAnswer;
                        i+=1;
                        j+=1;
                    } else {
                        i+=1;
                    }
                    
                }
            }
            
        } else if (!threeLettercode_toggle) {
            document.getElementById("question-text").innerHTML = "ಠ_ಠ!";
            var correctAnswer = "ಠ_ಠ!";
                while (i<=6 && j<=4) {
                    wrongAnswer = "ಠ_ಠ!";
                    wrongAnswer_Slot = "answer-select-box-"+i;
                    if (wrongAnswer_Slot != correctAnswer_slot) {
                        document.getElementById(wrongAnswer_Slot).getElementsByTagName("span")[0].innerHTML = wrongAnswer;
                        i+=1;
                        j+=1;
                    } else {
                        i+=1;
                    }
                    
                }
        }

        console.log(wrongAnswer_List);
        console.log("round index = "+ roundIndex);
        console.log("previous round index = "+ previous_roundIndex);
        console.log("Cheat-answer: "+ correctAnswer);

        document.getElementById(correctAnswer_slot).getElementsByTagName("span")[0].innerHTML = correctAnswer;
        previous_roundIndex = roundIndex;

    } else {
        console.log("Found a replicated question! Generating a new one...");
        QnA();
        
    }
}



//  1Letter to 3Letter
function QnA_1Letter_to_3Letter() {

    //  Get a random AA != previous_roundIndex
    var roundIndex = randomize(0,19);
    if (roundIndex != previous_roundIndex) {    //  No back-to-back similar question 
        var questionAA = (aaInfo[roundIndex].oneLetter);
        
        // Choose a random answer_slot to write the correct answer to
        correctAnswer_slot = ('answer-select-box-'+(randomize(0,5) + 1));
    
        //  Make a random fill of wrong answer
        var wrongAnswer_List = [];
        generate_wrongAnswers(roundIndex, wrongAnswer_List);  //  Pass in roundIndex var!!!!!

        var i = 1;
        var j = 0;
        var wrongAnswer_Slot = "";
        var wrongAnswer = "";

        if (oneLettercode_toggle) {
            document.getElementById("question-text").innerHTML = questionAA;
            if (threeLettercode_toggle) {
                var correctAnswer = aaInfo[roundIndex].threeLetter;
                while (i<=6 && j<=4) {
                    wrongAnswer = aaInfo[wrongAnswer_List[j]].threeLetter;
                    wrongAnswer_Slot = "answer-select-box-"+i;
                    if (wrongAnswer_Slot != correctAnswer_slot) {
                        document.getElementById(wrongAnswer_Slot).getElementsByTagName("span")[0].innerHTML = wrongAnswer;
                        i+=1;
                        j+=1;
                    } else {
                        i+=1;
                    }
                    
                }
            } else if (!threeLettercode_toggle) {
                var correctAnswer = "ಠ_ಠ!";
                while (i<=6 && j<=4) {
                    wrongAnswer = "ಠ_ಠ!";
                    wrongAnswer_Slot = "answer-select-box-"+i;
                    if (wrongAnswer_Slot != correctAnswer_slot) {
                        document.getElementById(wrongAnswer_Slot).getElementsByTagName("span")[0].innerHTML = wrongAnswer;
                        i+=1;
                        j+=1;
                    } else {
                        i+=1;
                    }
                }
            }
            
        } else if (!oneLettercode_toggle) {
            document.getElementById("question-text").innerHTML = "ಠ_ಠ!";
            var correctAnswer = "ಠ_ಠ!";
                while (i<=6 && j<=4) {
                    wrongAnswer = "ಠ_ಠ!";
                    wrongAnswer_Slot = "answer-select-box-"+i;
                    if (wrongAnswer_Slot != correctAnswer_slot) {
                        document.getElementById(wrongAnswer_Slot).getElementsByTagName("span")[0].innerHTML = wrongAnswer;
                        i+=1;
                        j+=1;
                    } else {
                        i+=1;
                    }
                }
        }
        console.log(wrongAnswer_List);
        console.log("round index = "+ roundIndex);
        console.log("previous round index = "+ previous_roundIndex);
        console.log("Cheat-answer: "+ correctAnswer);
        
        document.getElementById(correctAnswer_slot).getElementsByTagName("span")[0].innerHTML = correctAnswer;
        previous_roundIndex = roundIndex;

    } else {
        console.log("Found a replicated question! Generating a new one...");
        QnA();
        
    }
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////      Generate wrongAnswer_List     ////

function generate_wrongAnswers(roundIndex, wrongAnswer_List) {    //  Remember to pass down roundIndex variable
    var i = 1;
    var j = 0;
    var checker = 0;
    var potential_wrong_index = 0;
    while (i<=5) {
        potential_wrong_index = randomize(0,19); // Generate a potential wrong answer index
        checker = 0;
        j = 0;
        while (j<=(wrongAnswer_List.length-1)){ //  Loop check the generated wrongAnswer_List for duplicated indexes
            if (potential_wrong_index != wrongAnswer_List[j]) {
                checker+=1; //  If no dup --> Checker + 1 //  checker max = wrongAnswer_List.length 
                j+=1;
            } else {
                j+=1;
            }
        };

        //  Check if the potential index != roundIndex and != any generated wrongAnswer_List indexes
        if (potential_wrong_index != roundIndex && checker == (wrongAnswer_List.length)) {  
            wrongAnswer_List.push(potential_wrong_index);
            i+=1;
        }
    };
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Check Selected Answer       //
// correct button Color = #c4ac4d
// correct background color = #F6733C

// wrong button Color = #F6733C
// wrong background color = #EA9E7E
// after 350ms reset button to #DCAF72
// reset background to #FFE699

function checkAnswer(clicked_id, correctAnswer_slot) {
    if (noDoubleclick) {
        var selected_answer = document.getElementById(clicked_id).id;

        //  If CORRECT --> Flash green && change background color &&
        if (selected_answer == correctAnswer_slot) {
            document.getElementById(clicked_id).style.backgroundColor = "#bcc44d";
            document.getElementById("page-body").style.backgroundColor = "#E6DA91";

        } 
        
        //  If WRONG --> Flash red && change background color && pinch main area && flash green the right answer &&
        else if (selected_answer !== correctAnswer_slot){
            document.getElementById(clicked_id).style.backgroundColor = "#F6733C"; //   wrong answer = red
            document.getElementById(correctAnswer_slot).style.backgroundColor = "#bcc44d"; //   right answer = green

            document.getElementById("page-body").style.backgroundColor = "#FFCF99";
            document.getElementById("main-back-drop").style.transform = "scale(1.01)";
            document.getElementById("main-back-drop").style.borderRadius = "35px";

        };

        noDoubleclick = false;
        //  Reset button back to normal color and wait for next round
        window.setTimeout(function(){
            document.getElementById(clicked_id).style.backgroundColor = "#DCAF72";  //  Reset button color
            document.getElementById(correctAnswer_slot).style.backgroundColor = "#DCAF72";

            QnA();  //  New round
            }, 350);
        
        //  Reset background back to normal color and wait for next round
        window.setTimeout(function(){
            document.getElementById("page-body").style.backgroundColor = "#FFE699"; //  Reset background color
            document.getElementById("main-back-drop").style.transform = "scale(1.00)";
            document.getElementById("main-back-drop").style.borderRadius = "25px";

            document.getElementById(correctAnswer_slot).style.backgroundColor = "#DCAF72";
            
            document.getElementById(clicked_id).style.backgroundColor = "#DCAF72"; //   Reset the Button (mobile)
            document.getElementById(clicked_id).style.borderRadius = "30px";
            document.getElementById(clicked_id).style.transform = "scale(1)";
            }, 340);
        
    } else {
        console.log("You clicked way too fast I don't wanna keep up with this :(");
    };

};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Pre-cache all images       //   Credits to jfriend00 on StackOverflow @ https://stackoverflow.com/questions/10240110/how-do-you-cache-an-image-in-javascript

function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

preloadImages(["./media/meat640.png", "./media/Alanine.png", "./media/Arginine.png", "./media/Asparagine.png", "./media/Aspartic-acid.png", "./media/Cysteine.png", "./media/Glutamic-acid.png", "./media/Glutamine.png", "./media/Glycine.png", "./media/Histidine.png", "./media/Isoleucine.png", "./media/Leucine.png", "./media/Lysine.png", "./media/Methionine.png", "./media/Phenylalanine.png", "./media/Proline.png", "./media/Serine.png", "./media/Threonine.png", "./media/Tryptophan.png", "./media/Tyrosine.png", "./media/Valine.png"]);