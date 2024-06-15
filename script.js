const quranAyah = document.querySelector(".quran-list");

async function getQuran() {
    const response = await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranuthmanihaf.json");
    const data = await response.json();
    
    const dataQuran = data.quran.filter(object => object.chapter === 1)
    const textQuran = dataQuran.map(textQ => textQ.text);
    const numAyah = dataQuran.map(ayah => ayah.verse)

    numAyah.forEach((ayah, quran) => {
        const contentVerse = document.createElement("li");
        const contentText = document.createElement("p");
        const imgVerse = document.createElement("img");
        const theAyah = document.createElement("span");
        const imgAyah = document.createElement("div");
        const textContainer = document.createElement("div");
        
        contentVerse.textContent = "";
        contentText.textContent = `${textQuran[quran]}`;
        imgVerse.textContent = "";
        imgVerse.src = "img/symbol.png"
        theAyah.textContent = `${ayah}`;

        contentVerse.appendChild(imgAyah);
        imgAyah.appendChild(imgVerse);
        imgAyah.appendChild(theAyah);

        contentVerse.appendChild(textContainer);
        textContainer.appendChild(contentText);
        quranAyah.appendChild(contentVerse);

        // Add class for style in "li"
        contentVerse.classList.add("content-verse");
        contentText.classList.add("content-text");
        imgVerse.classList.add("img-verse");
        theAyah.classList.add("the-ayah");
        imgAyah.classList.add("img-ayah");
        textContainer.classList.add("text-container");
    })

    console.log(dataQuran)
}

getQuran();  