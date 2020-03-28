import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface UnsplashResponse {
  urls: {
    regular: string;
  };
}





@Injectable({
  providedIn: 'root'
})



export class PhotosService {

  private apiKey = 'IrqglpqdNxXfRfUBfiPtQ7-Z7e8aXupx9Ug-KK0wkcU';
  private url = 'https://api.unsplash.com/photos/random';

  constructor(private http: HttpClient) { }


  getPhoto() {
    return this.http.get<UnsplashResponse>(this.url, {
      headers: {
        Authorization: 'Client-ID '+ this.apiKey
      }
    });
  }


}
