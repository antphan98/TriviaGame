$(document).ready(function () {

    const questions = [{
            q: "1. Where did the Shiba Inu originate from?",
            answers: ["Japan", "South Korea", "China", "Singapore"],
            value: [true, false, false, false],
            gif: "../images/shiba_inu.gif",

        }, {
            q: "2. What is the most popular dog breed?",
            answers: ["Golden Retriever", "Labrador Retriever", "Dalmatian", "Pug"],
            value: [false, true, false, false],
            gif: "../images/lab_ret.gif",
        }, {
            q: "3. What is the scientific name for a dog?",
            answers: ["Felis catus", "Abra kadabra", "Canis lupus", "Canis lupus familiaris"],
            value: [false, false, false, true],
            gif: ".../images/corgis.gif",

        }, {
            q: "4. When was the AKC (American Kennel Club) founded?",
            answers: ["1992", "1884", "1937", "1889"],
            value: [false, true, false, false],
            gif: "../images/akc.gif",

        }, {
            q: "5. The dog breed that is described as short-legged and long bodied that originated from Germany is:",
            answers: ["Daschund", "Corgi", "Pomeranian", "Chihuahua"],
            value: [true, false, false, false],
            gif: "../images/hotdog.gif",


        }, {
            q: "6. From the movie 'Lady and the Tramp', what dog breed is Lady?",
            answers: ["Bloodhound", "American Eskimo Dog", "Maltese", "Cocker Spaniel"],
            value: [false, false, false, true],
            gif: "../images/lady.gif",

        }, {
            q: "7. Which of the following is false?",
            answers: ["Dalmatians are born completely white", "A dog's nose print is unique", "Dogs are colorblind", "Dogs have about 1,700 taste buds"],
            value: [false, false, true, false],
            gif: "../images/brian.gif",

        }, {
            q: "8. Which dog breed is known for their blue/black tongues?",
            answers: ["Doberman", "Chow Chow", "Great Dane", "Boxer"],
            value: [false, true, false, false],
            gif: "../images/chowchow.gif",

        }, {
            q: "9. What is the oldest dog breed in the world?",
            answers: ["Shar Pei", "Saluki", "Basenji", "Siberian Husky"],
            value: [false, false, true, false],
            gif: "../images/basenji.gif",

        }, {
            q: "10. From the movie 'Bolt', what type of dog is Bolt?",
            answers: ["German Shepherd", "Labrador", "Rottweiler", "Bulldog"],
            value: [true, false, false, false],
            gif: "../images/bolt.gif",

        }]

        const correctAns = 0;
        const wrongAns = 0;
        const noAns = 0;
        const userGuess = "";
        
        $("#start").on("click", function() {

            $(this).hide();

        });


});