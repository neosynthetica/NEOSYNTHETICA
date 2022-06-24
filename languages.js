// Create a function to change
// the hash value of the page
function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
    }

    // Define the language reload anchors
    var language = {
    en: {
        home: "Home",
        collaborators: "Collaborators",
        blue_yellow : "Blue-Yellow",
        colourBlind : "Colour blind mode",
        forYourComfort : "For your comfort:",
        intro : "Hello! My name is Claire, but most call me Claire. I am an artist of many mediums, studying my Bachelors Degree in Social Sciences at the University of Waikato, and I'm Double Majoring in Psychology and Linguistics. In my time spent outside of study, I like to hone my skills as a multimedia artist, in areas such as concept design, animation, 3D animation, 3D modelling, scene design, sound design, and scoring, I specialize in the use of Blender, the Adobe suite, and Ableton for my work. If you can't tell, I also have much experience with translation and web design! I am adept in French, Chinese, and Māori, and studying Japanese, and in my other list of languages, we have Javascript, Python, and some Lua. Please get in contact if you wish to work with me... for a price...",
        monochromacy : "Monochromacy",
        red_green : "Red-Green",
        whatLanguage : "What is your language?",
        dyslexia : "Dyslexia friendly mode"
    },
    fr: {
        home: "Maison",
        collaborators: "Collaboratrices",
        blue_yellow : "Bleue-Jaune",
        colourBlind : "Mode daltonienne",
        forYourComfort : "Pour votre confort:",
        intro : "Bonjour ! Claire est mon nom, mais la plupart m'appellent Claire. Je suis une artiste de nombreux médiums, étudie mon Baccalauréat en sciences sociales à l'université de Waikato (En Nouvelle-Zélande), et je spécialise en psychologie et linguistique. Quand je ne suis étudier pas, J'aime affûter mes compétences en tant qu'artiste multimédia, comme l'arts, musique, design, et plus. J'utiliser les applis tels que Blender, le suite d'Adobe, et Ableton pour mon travail. Si vous ne saviez pas, J'aime traduction aussi. J'étudie Français (évidemment), Chinois, Maori (le saviez-vous, le mot en Maori pour 'français' est 'wīwī' ? Oui oui !), et j'étudie un petit peu de Japonais. Dans mon liste d'autres langues, j'ai Python, JavaScript, et un peu de Lua. Si vous voudrais travaillez avec moi, n'hésitez pas mettre rapport avec moi. C'est tout ! Au revoir ! À bientôt !",
        monochromacy : "Monochromacie",
        red_green : "Rouge-Verte",
        whatLanguage : "Quel est votre langue ?",
        dyslexia : "Mode dyslexie gentille"

    },
    zh: {
        home: "家",
        collaborators: "合作人",
        blue_yellow : "蓝-黄色",
        colourBlind : "色盲的模式",
        forYourComfort : "为了您的舒适：",
        intro : "对不起。。。",
        monochromacy : "单色的模式",
        red_green : "红-绿色",
        whatLanguage : "您的语言是什么？",
        dyslexia : "诵读困难的模式"
    }
    };

    // // Check if a hash value exists in the URL
    if (window.location.hash) {

        // Set the content of the webpage 
        // depending on the hash value
        if (window.location.hash == "#en") {
            // document.getElementById("home").textContent = "Home";
            Array.from(document.getElementsByClassName("translate")).forEach(
                function(element, index, array) {
                    element.textContent = language.en[element.id] // change text
                    // try to change the href attributes.
                    if (element.getAttribute("href") !== null) {
                        element.setAttribute("href", element.getAttribute("href") + "#en");
                    }
                    // element.setAttribute('href', )
                    console.log(element.id + " converted to " + language.en[element.id] + ".");
                }
            );
        }
        else if (window.location.hash == "#fr") {
            // document.getElementById("home").textContent = "Maison";
            Array.from(document.getElementsByClassName("translate")).forEach(
                function(element, index, array) {
                    element.textContent = language.fr[element.id]
                    // try to change the href attributes.
                    if (element.getAttribute("href") !== null) {
                        element.setAttribute("href", element.getAttribute("href") + "#fr");
                    }
                    console.log(element.id + " converted to " + language.fr[element.id] + ".");
                }
            );
        }
        else if (window.location.hash == "#zh") {
            Array.from(document.getElementsByClassName("translate")).forEach(
                function(element, index, array) {
                    element.textContent = language.zh[element.id]
                    // try to change the href attributes.
                    if (element.getAttribute("href") !== null) {
                        element.setAttribute("href", element.getAttribute("href") + "#zh");
                    }
                    console.log(element.id + " converted to " + language.zh[element.id] + ".");
                }
            );
        }
    }