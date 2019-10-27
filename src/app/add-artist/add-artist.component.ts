import { Component, OnInit } from '@angular/core';
import { ArtistaService } from '../services/artista.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.css'],
})
export class AddArtistComponent implements OnInit {
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
//              private router: Router,
              private artistaService: ArtistaService
  )  {

  }
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      nombre: [''],
      descripcion: [''],
      imagen: [''],
    });
  }
  onSubmit() {
    this.artistaService.addArtist(this.addForm.value)
      .subscribe(data => {
        console.log(data);
      });
    window.location.reload();
  }

}
