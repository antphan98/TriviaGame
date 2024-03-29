$(document).ready(function () {

    const questions = [{
            q: "1. Where did the Shiba Inu originate from?",
            choice: ["Japan", "South Korea", "China", "Singapore"],
            ans: "1",
            gif: "../images/shiba_inu.gif",

        }, {
            q: "2. What is the most popular dog breed?",
            choice: ["Golden Retriever", "Labrador Retriever", "Dalmatian", "Pug"],
            ans: "2",
            gif: "../images/lab_ret.gif",
        }, {
            q: "3. What is the scientific name for a dog?",
            choice: ["Felis catus", "Abra kadabra", "Canis lupus", "Canis lupus familiaris"],
            ans: "4",
            gif: ".../images/corgis.gif",

        }, {
            q: "4. When was the AKC (American Kennel Club) founded?",
            choice: ["1992", "1884", "1937", "1889"],
            ans: "2",
            gif: "../images/akc.gif",

        }, {
            q: "5. The dog breed that is described as short-legged and long bodied that originated from Germany is:",
            choice: ["Daschund", "Corgi", "Pomeranian", "Chihuahua"],
            ans: "1",
            gif: "../images/hotdog.gif",


        }, {
            q: "6. From the movie 'Lady and the Tramp', what dog breed is Lady?",
            choice: ["Bloodhound", "American Eskimo Dog", "Maltese", "Cocker Spaniel"],
            ans: "4",
            gif: "../images/lady.gif",

        }, {
            q: "7. Which of the following is false?",
            choice: ["Dalmatians are born completely white", "A dog's nose print is unique", "Dogs are colorblind", "Dogs have about 1,700 taste buds"],
            ans: "3",
            gif: "../images/brian.gif",

        }, {
            q: "8. Which dog breed is known for their blue/black tongues?",
            choice: ["Doberman", "Chow Chow", "Great Dane", "Boxer"],
            ans: "2",
            gif: "../images/chowchow.gif",

        }, {
            q: "9. What is the oldest dog breed in the world?",
            choice: ["Shar Pei", "Saluki", "Basenji", "Siberian Husky"],
            ans: "3",
            gif: "../images/basenji.gif",

        }, {
            q: "10. From the movie 'Bolt', what type of dog is Bolt?",
            choice: ["German Shepherd", "Labrador", "Rottweiler", "Bulldog"],
            ans: "1",
            gif: "../images/bolt.gif",

        }]
        let intervalId;
        let newIndex = 0;
        let correct;

        let correctAns = 0;
        let wrongAns = 0;
        let noAns = 0;
        let time = 20;
        let timerRun = false;
        const currentQuestion = 0;
    
        
        // NOTE: hide start button when clicked and start timer


        $("#start").on("click", function() {

            $(this).hide();
            startTime();
            decrement();
            showQuestion();
        });



        function startTime() {

                if (!timerRun) {
                    intervalId = setInterval(decrement, 1000);
                    timerRun = true;

                }                
                    

                }

        // NOTE: make the timer countdown
        function decrement() {

            // const question = $("<h2>");
            // const timer = $("<h2>");
            // timer.appendTo("#questionBox");
            $("#timerBox").html("<h3>" + time + " seconds remaining<h3>");
            time--;

            if (time === 0) {
                noAns++;
                stopTime();
                noAnswer();
            }

        }

        //NOTE: function to stop the timer at 0
        function stopTime() {
            timerRun = false;
            clearInterval(intervalId);


        }

        function showQuestion() {

            ans = questions[newIndex].ans;
            const q = questions[newIndex].q;
            $("#questionBox").html("<h2>" + q + "</h2>");
            for (let i = 0; i < 4; i++) {
                
                const choice = questions[newIndex].choice[i];
                  $("#questionBox").append("<h3 class= allAns id=" + i + ">" + choice + "</h3>");
            }
                  $("h3").click(function () {
                    const id = $("h3").attr("id");
                    if (id === correct) {
                    timerRun = true;
                    $("#questionBox").html("Correct answer: " + questions[newIndex].choice[correct]);
                    correctAnswer();
                    }
                    else {
                        timerRun = true;
                        $("#questionBox").html("The correct answer was " + questions[newIndex].choice[correct]);
                        wrongAnswer();
                    }


                  });
                

            
                }
       
        function noAnswer() {

             noAns++;
            $("#questionBox").html("Time is up!");

        }

        function correctAnswer() {
            correctAns++;
            $("#questionBox").html("Correct answer!");

        }

        function wrongAnswer() {
            wrongAns++;
            $("#questionBox").html("Wrong answer!");

        }

});