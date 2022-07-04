// Create a function to change
// the hash value of the page
function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}

function setLanguage() {
    // Define the language reload anchors
    var language = {
        en: {
            home: "Home",
            collaborators: "Collaborators",
            intro : "Hello! My name is Claire, but most call me Claire. I am an artist of many mediums, studying my Bachelors Degree in Social Sciences at the University of Waikato, and I'm Double Majoring in Psychology and Linguistics. In my time spent outside of study, I like to hone my skills as a multimedia artist, in areas such as concept design, animation, 3D animation, 3D modelling, scene design, sound design, and scoring, I specialize in the use of Blender, the Adobe suite, and Ableton for my work. If you can't tell, I also have much experience with translation and web design! I am adept in French, Chinese, and Māori, and studying Japanese, and in my other list of languages, we have Javascript, Python, and some Lua. Please get in contact if you wish to work with me... for a price...",
            index : "index",
            onGit : "See this project on GitHub!",
            theTeam : "Support the team!"
        },
        fr: {
            home: "Maison",
            collaborators: "Collaboratrices",
            intro : "Bonjour ! Claire est mon nom, mais la plupart m'appellent Claire. Je suis une artiste de nombreux médiums, étudie mon Baccalauréat en sciences sociales à l'université de Waikato (En Nouvelle-Zélande), et je spécialise en psychologie et linguistique. Quand je ne suis étudier pas, J'aime affûter mes compétences en tant qu'artiste multimédia, comme l'arts, musique, design, et plus. J'utiliser les applis tels que Blender, le suite d'Adobe, et Ableton pour mon travail. Si vous ne saviez pas, J'aime traduction aussi. J'étudie Français (évidemment), Chinois, Maori (le saviez-vous, le mot en Maori pour 'français' est 'wīwī' ? Oui oui !), et j'étudie un petit peu de Japonais. Dans mon liste d'autres langues, j'ai Python, JavaScript, et un peu de Lua. Si vous voudrais travaillez avec moi, n'hésitez pas mettre rapport avec moi. C'est tout ! Au revoir ! À bientôt !",
            index : "index",
            onGit : "Voir ce projet à GitHub !",
            theTeam : "Soutenir l'équipe !"
        },
        zh: {
            home: "家",
            collaborators: "合作人",
            intro : "对不起。。。",
            index : "索引",
            onGit : "",
            theTeam : ""
        }
    };

    // // Check if a hash value exists in the URL
    if (window.location.hash !== '') {

        // Set the content of the webpage 
        // depending on the hash value
        if (window.location.hash == "#en") {
            // document.getElementById("home").textContent = "Home";
            Array.from(document.getElementsByClassName("translate")).forEach(
                function(element, index, array) {
                    element.textContent = language.en[element.id] // change text
                    console.log(element.id + " converted to " + language.en[element.id] + ".");
                }
            );
            // change hrefs for all <a> tags
            Array.from(document.querySelectorAll("a[href]")).forEach(
                function(element, index, array) {
                    if (!element.getAttribute("href").includes("#")) {
                        // try to change the href attributes.
                        element.setAttribute("href", element.getAttribute("href") + "#en");
                    }
                }
            );
        }
        else if (window.location.hash == "#fr") {
            // document.getElementById("home").textContent = "Maison";
            Array.from(document.getElementsByClassName("translate")).forEach(
                function(element, index, array) {
                    element.textContent = language.fr[element.id]
                    console.log(element.id + " converted to " + language.fr[element.id] + ".");
                }
            );
            // change hrefs for all <a> tags
            Array.from(document.querySelectorAll("a[href]")).forEach(
                function(element, index, array) {
                    if (!element.getAttribute("href").includes("#")) {
                        // try to change the href attributes.
                        element.setAttribute("href", element.getAttribute("href") + "#fr");
                    }
                }
            );
        }
        else if (window.location.hash == "#zh") {
            Array.from(document.getElementsByClassName("translate")).forEach(
                function(element, index, array) {
                    element.textContent = language.zh[element.id]
                    console.log(element.id + " converted to " + language.zh[element.id] + ".");
                }
            );
            // change hrefs for all <a> tags
            Array.from(document.querySelectorAll("a[href]")).forEach(
                function(element, index, array) {
                    if (!element.getAttribute("href").includes("#")) {
                        // try to change the href attributes.
                        element.setAttribute("href", element.getAttribute("href") + "#zh");
                    }
                }
            );
        }
    }
}

setLanguage();
