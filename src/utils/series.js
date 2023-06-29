import { Movies } from "./movie";

export class Series extends Movies{
    constructor(title, genre, leadRoles, director, numberOfSeason, userScore, imdbScore, posterURL){
        super(title, genre, leadRoles, director, userScore, imdbScore,posterURL);
        this.numberOfSeason=numberOfSeason;
    };

    // Override
    addDataToUI(){
        let tableBody = document.querySelector('#series-tbody');
        tableBody.innerHTML += `
            <tr>
                <td><img src="${this.posterURL}" class="img-thumbnail" width="100px" alt="series poster"></td>
                <td>${this.title}</td>
                <td>${this.genre}</td>
                <td>${this.leadRoles}</td>
                <td>${this.director}</td>
                <td>${this.numberOfSeason}</td>
                <td>${this.userScore}</td>
                <td>${this.imdbScore}</td>
                <td><button id="delete-series" class="btn btn-outline-danger">Delete Series</button></td>
            </tr>
        `;
    };

    // Override
    static loadAllData(){
        let series = this.getDataFromStorage('series')
        let seriesBody = document.querySelector('#series-tbody');

        series.forEach(serie => {
            seriesBody.innerHTML += `
                <tr>
                    <td><img src=${serie.posterURL} class="img-thumbnail" width="100px" alt="serie poster"></td>
                    <td>${serie.title}</td>
                    <td>${serie.genre}</td>
                    <td>${serie.leadRoles}</td>
                    <td>${serie.director}</td>
                    <td>${serie.numberOfSeason}</td>
                    <td>${serie.userScore}</td>
                    <td>${serie.imdbScore}</td>
                    <td><button id="delete-series"  class="btn btn-outline-danger">Delete Series</button></td>
                </tr>
            `;
        });
    }
}