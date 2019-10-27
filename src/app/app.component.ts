import {Component, OnInit} from '@angular/core';
import { ArtistaService } from './services/artista.service';
import {Artista} from './models/Artist.model';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArtistaService],
})
export class AppComponent implements OnInit {
  artists: Artista[];
  artist: Artista;
  edit: boolean;
  constructor(private artistaService: ArtistaService) {
    this.edit = true;
    this.artist = new Artista();
  }
  getAllArtists() {
    this.artistaService.getAllArtists().subscribe(data => {
      this.artists = data;
      console.log(this.artists);
    });
  }
  ngOnInit() {
    this.getAllArtists();
  }
  deleteArtist(artist: Artista) {
    console.log(artist.id);
    this.artistaService.deleteArtist(artist.id.toString()).subscribe(data =>{
      console.log(data);
      this.getAllArtists();
    });
  }
  editArtist(artist: Artista) {
    this.edit = !this.edit;
    this.artist = artist;
  }
}
