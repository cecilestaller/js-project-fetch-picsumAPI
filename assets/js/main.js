console.log("%c picsum api level1_1", "color:tomato");

fetch('https://picsum.photos/v2/list')
    .then(response => {
        // console.log(response);
        if (response.ok === false){
            throw new Error("Sorry, da ist etwas schief gelaufen")
        }
        return response.json();
    })
    .then(imgArr => {
        // console.log(imgArr);
        const sectionFetchGallery = document.getElementById('fetch-gallery');
        // console.log(sectionFetchGallery);
        imgArr.forEach((singleObj) => {
            // console.log(singleObj);
            sectionFetchGallery.innerHTML += `
            <figure>
                <img src="${singleObj.download_url}" alt="picture from ${singleObj.author}">
                <figcaption>${singleObj.author}</figcaption>
                <a href="${singleObj.url}" target="_blank">See more</a>
            </figure>`;
        })
    })
    .catch(error => document.write(error));