let jsonBreeds;

let addBreeds = breeds => {
    for (breed of breeds) {
        let newBreed = document.createElement("li");

        newBreed.textContent = breed;

        document.querySelector("#dog-breeds").append(newBreed);

        newBreed.addEventListener("click", () => {
            newBreed.style.color = "red";
        })
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';

    fetch(imgUrl)
    .then(response => response.json())
    .then(json => {
        for (url of json.message) {
            let newImg = document.createElement("img");

            newImg.src = url;

            document.querySelector("#dog-image-container").append(newImg);
        }
    });

    fetch(breedUrl)
    .then(response => response.json())
    .then(json => {
        jsonBreeds = Object.keys(json.message);
        addBreeds(jsonBreeds);
    });

    document.querySelector("select").addEventListener("change", e => {
        let filteredBreeds;

        switch (e.target.value) {
            case "a":
                filteredBreeds = jsonBreeds.filter(breed => breed[0] === "a");

                document.querySelector("#dog-breeds").innerHTML = "";
                addBreeds(filteredBreeds);
                break;
            case "b":
                filteredBreeds = jsonBreeds.filter(breed => breed[0] === "b");

                document.querySelector("#dog-breeds").innerHTML = "";
                addBreeds(filteredBreeds);
                break;
            case "c":
                filteredBreeds = jsonBreeds.filter(breed => breed[0] === "c");

                document.querySelector("#dog-breeds").innerHTML = "";
                addBreeds(filteredBreeds);
                break;
            case "d":
            filteredBreeds = jsonBreeds.filter(breed => breed[0] === "d");

            document.querySelector("#dog-breeds").innerHTML = "";
            addBreeds(filteredBreeds);
            break;
        }
    })
})