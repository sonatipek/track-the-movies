// Movies
export class Movies{
    constructor(title, genre, leadRoles, director, userScore, imdbScore, posterURL){
        this.title=title;
        this.genre=genre;
        this.leadRoles=leadRoles;
        this.director=director;
        this.userScore=userScore;
        this.imdbScore=imdbScore;
        this.posterURL=posterURL;
    }

    // Override
    addDataToUI(){
        let tableBody = document.querySelector('#movie-tbody');
        tableBody.innerHTML += `
            <tr>
                <td><img src="${this.posterURL}" class="img-thumbnail" width="100px" alt="movie poster"></td>
                <td>${this.title}</td>
                <td>${this.genre}</td>
                <td>${this.leadRoles}</td>
                <td>${this.director}</td>
                <td>${this.userScore}</td>
                <td>${this.imdbScore}</td>
                <td><button id="delete-movie" class="btn btn-outline-danger">Delete Movie</button></td>
            </tr>
        `;
    };

    // Override
    static loadAllData(){
        let movies = this.getDataFromStorage('movies')
        let tableBody = document.querySelector('#movie-tbody');

        movies.forEach(movie => {
            tableBody.innerHTML += `
                <tr>
                    <td><img src=${movie.posterURL} class="img-thumbnail" width="100px" alt="movie poster"></td>
                    <td>${movie.title}</td>
                    <td>${movie.genre}</td>
                    <td>${movie.leadRoles}</td>
                    <td>${movie.director}</td>
                    <td>${movie.userScore}</td>
                    <td>${movie.imdbScore}</td>
                    <td><button id="delete-movie"  class="btn btn-outline-danger">Delete Movie</button></td>
                </tr>
            `;
        });
    }


    static deleteData(parentSelector, buttonSelector, storageKey){
        let tableRows = document.querySelectorAll(`${parentSelector} tr`);
        tableRows.forEach(tableData => {
            tableData.addEventListener('click', (e) => {
                if (e.target.id === buttonSelector) {
                    tableData.remove()
                    this.deleteDataToStorage(storageKey, tableData.children[1]);
                }
            })
        });
    }

    static deleteDataToStorage(storageKey, targetTitle){
        let data = this.getDataFromStorage(storageKey);
        
        data.forEach((el, index) => {
            if (el.title === targetTitle.textContent) {
                data.splice(index, 1)
            }
        });

        localStorage.setItem(storageKey, JSON.stringify(data))
    }

    static deleteAllData(tableSelector, buttonSelector, storageKey){
        let dataTableBody = document.querySelector(tableSelector);
        let deleteAllDataButton = document.querySelector(buttonSelector);

        deleteAllDataButton.addEventListener('click', _ => {
            let allData = dataTableBody.children;
            
            [...allData].forEach(el => {
                el.remove();
                localStorage.removeItem(storageKey)
            });
        });
    }

    static getDataFromStorage(storageKey){
        let data;
        if (localStorage.getItem(storageKey) === null) {
            data = [];
        }else{
            data = JSON.parse(localStorage.getItem(storageKey));
        }

        return data;
    }

    static addDataToStorage(storageKey, data){
        let watchedData = this.getDataFromStorage(storageKey);

        watchedData.push(data);
        localStorage.setItem(storageKey, JSON.stringify(watchedData));
    };

    static clearInputs(inputList){
        inputList.forEach(el => {
            el.value="";
        });
    };
}