import { Movies } from "./movie";

export class Series extends Movies{
    constructor(title, genre, leadRoles, director, numberOfSeason, userScore, imdbScore, posterURL){
        super(title, genre, leadRoles, director, userScore, imdbScore,posterURL);
        this.numberOfSeason=numberOfSeason
    }
}