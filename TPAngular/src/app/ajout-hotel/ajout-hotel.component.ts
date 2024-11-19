import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Hotel {
  id: number;
  name: string;
  email: string;
  imageUrl: string | ArrayBuffer | null;
  price: number;
  agreeToTerms: boolean;
}

@Component({
  selector: 'app-ajout-hotel',
  templateUrl: './ajout-hotel.component.html',
  styleUrls: ['./ajout-hotel.component.scss']
})
export class AjoutHotelComponent {
  hotelForm: FormGroup;
  hotels: Hotel[] = [];
  selectedFileError: boolean = false;

  constructor(private fb: FormBuilder) {
    this.hotelForm = this.fb.group({
      id: [null, Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      imageUrl: [null], 
      price: [null, [Validators.required, Validators.min(0)]],
      agreeToTerms: [false, Validators.requiredTrue]
    });
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
      this.selectedFileError = false;
      const reader = new FileReader();
      reader.onload = () => {
        this.hotelForm.patchValue({ imageUrl: reader.result });
      };
      reader.readAsDataURL(file);
    } else {
      this.selectedFileError = true;
    }
  }

  addHotel() {
    if (this.hotelForm.valid) {
      this.hotels.push(this.hotelForm.value);
    }
  }
}
