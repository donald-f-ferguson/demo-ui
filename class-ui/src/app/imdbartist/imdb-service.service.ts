import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ImdbArtist } from './imdbartist';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImdbServiceService {

  imdbArtists: ImdbArtist[];
  imdbUrl: string;

  constructor(private http: HttpClient) {
    // console.log('The URL = ' + window.location.href);
    this.imdbArtists = undefined;
  }

  getImdbServiceUrl(): string {
    const theUrl = window.location.href;
    let result: string;

    // This is some seriously bad code.
    // If you do this on a job interview, you did not learn this in my class.
    if ((theUrl.includes('127.0.0.1')) || (theUrl.includes('localhost')))
    {
      result = 'http://127.0.0.1:5000/imdb/artists/';
    } else {
      result = 'ec2-54-242-71-165.compute-1.amazonaws.com:5000/imdb/artists/';
    }
    return result;
  }

  
  /** GET heroes from the server */
  getArtists(artistName): Observable<ImdbArtist[]> {
    let theUrl: string;

    theUrl = this.getImdbServiceUrl() + artistName;
    return this.http.get<ImdbArtist[]>(theUrl);
  }
}
