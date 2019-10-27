import {Component, Input, OnInit} from '@angular/core';
import { ArtistaService } from '../services/artista.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Artista } from '../models/Artist.model';
@Component({
  selector: 'app-edi-artist',
  templateUrl: './edi-artist.component.html',
  styleUrls: ['./edi-artist.component.css']
})
export class EdiArtistComponent implements OnInit {
  @Input() artist: Artista;
  updatedArtist: Artista;
  addForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private artistaService: ArtistaService)  {  }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      nombre: [''],
      descripcion: [''],
      imagen: [''],
    });
  }
  onSubmit() {
    console.log(this.artist);
    this.artistaService.updateArtist(this.artist).subscribe(data => {
      console.log(data);
      });
  }
}
