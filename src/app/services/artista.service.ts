import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Artista} from '../models/Artist.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3030/artista/';

  }
  updateArtist(artist: Artista) {
    return this.http.put(this.url + 'edit/' + artist.id, artist);
  }
  getArtistById(id: string) {
    return this.http.delete(this.url + id);
  }
  addArtist(artist: Artista) {
    return this.http.post(this.url + 'guardar', artist);
  }
  deleteArtist(id: string) {
    return this.http.delete(this.url + 'delete/' + id);
  }
  getAllArtists() {
    return this.http.get<Artista[]>(this.url + 'get');
  }
}

