$(document).ready(function () {

    const questions = [{
            q: "1. Where did the Shiba Inu originate from?",
            choice: ["Japan", "South Korea", "China", "Singapore"],
            ans: 1,
            gif: "../images/shiba_inu.gif",

        }, {
            q: "2. What is the most popular dog breed?",
            choice: ["Golden Retriever", "Labrador Retriever", "Dalmatian", "Pug"],
            ans: 2,
            gif: "../images/lab_ret.gif",
        }, {
            q: "3. What is the scientific name for a dog?",
            choice: ["Felis catus", "Abra kadabra", "Canis lupus", "Canis lupus familiaris"],
            ans: 4,
            gif: ".../images/corgis.gif",

        }, {
            q: "4. When was the AKC (American Kennel Club) founded?",
            choice: ["1992", "1884", "1937", "1889"],
            ans: 2,
            gif: "../images/akc.gif",

        }, {
            q: "5. The dog breed that is described as short-legged and long bodied that originated from Germany is:",
            choice: ["Daschund", "Corgi", "Pomeranian", "Chihuahua"],
            ans: 1,
            gif: "../images/hotdog.gif",


        }, {
            q: "6. From the movie 'Lady and the Tramp', what dog breed is Lady?",
            choice: ["Bloodhound", "American Eskimo Dog", "Maltese", "Cocker Spaniel"],
            ans: 4,
            gif: "../images/lady.gif",

        }, {
            q: "7. Which of the following is false?",
            choice: ["Dalmatians are born completely white", "A dog's nose print is unique", "Dogs are colorblind", "Dogs have about 1,700 taste buds"],
            ans: 3,
            gif: "../images/brian.gif",

        }, {
            q: "8. Which dog breed is known for their blue/black tongues?",
            choice: ["Doberman", "Chow Chow", "Great Dane", "Boxer"],
            ans: 2,
            gif: "../images/chowchow.gif",

        }, {
            q: "9. What is the oldest dog breed in the world?",
            choice: ["Shar Pei", "Saluki", "Basenji", "Siberian Husky"],
            ans: 3,
            gif: "../images/basenji.gif",

        }, {
            q: "10. From the movie 'Bolt', what type of dog is Bolt?",
            choice: ["German Shepherd", "Labrador", "Rottweiler", "Bulldog"],
            ans: 1,
            gif: "../images/bolt.gif",

        }]
        let intervalId;

        const correctAns = 0;
        const wrongAns = 0;
        let noAns = 0;
        const userGuess = "";
        let time = 20;
        let timerRun = false;
        const currentQuestion = 0;
        
        // NOTE: hide start button when clicked and start timer and run through questions 

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
                // NOTE: create loop to go through questions, create answer buttons
                

                    

                }


        
        // NOTE: make the timer countdown
        function decrement() {

            // const question = $("<h2>");
            // const timer = $("<h2>");
            // timer.appendTo("#questionBox");
            $("#questionBox").html("<h2>" + time + " seconds remaining<h2>");
            time--;

            if (time === 0) {
                noAns++;
                stopTime();
            }

        }

        //NOTE: function to stop the timer at 0
        function stopTime() {
            timerRun = false;
            clearInterval(intervalId);

        }

        function showQuestion() {

            choice = questions[index];
            $("questionBox").html("<h2>" + choice.question + "</h2>");
            for(let i = 0; i > choice.questions.length; i++) {


            }


        }
    

});