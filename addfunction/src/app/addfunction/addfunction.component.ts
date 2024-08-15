import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-addfunction',
  templateUrl: './addfunction.component.html',
  styleUrls: ['./addfunction.component.scss']
})
export class AddfunctionComponent {

  // addmulticty!: FormGroup;

  // Options = ['Option 1', 'Option 2', 'Option 3'];

  // constructor(private fb: FormBuilder) {}

  // ngOnInit(): void {
  //   this.addmulticty = this.fb.group({
  //     addmulti: this.fb.array([this.createMultiCityGroup()])
  //   });
  // }

  // get addmulti(): FormArray {
  //   return this.addmulticty.get('addmulti') as FormArray;
  // }


  // createMultiCityGroup(): FormGroup {
  //   return this.fb.group({
  //     multicityarrival: ['', Validators.required],
  //     multicitydepature: ['', Validators.required],
  //     multireturnDate: ['', Validators.required]
  //   });
  // }

  // addCity(): void {
  //   this.addmulti.push(this.createMultiCityGroup());
  // }


  // removeCity(index: number): void {
  //   this.addmulti.removeAt(index);
  // }

  // reverse(index: number): void {
  //   const currentGroup = this.addmulti.at(index) as FormGroup;
  //   const arrivalValue = currentGroup.get('multicityarrival')?.value;
  //   const departureValue = currentGroup.get('multicitydepature')?.value;

  //   currentGroup.patchValue({
  //     multicityarrival: departureValue,
  //     multicitydepature: arrivalValue
  //   });
  // }


  addmulticty!: FormGroup;

  Options = ['Option 1', 'Option 2', 'Option 3'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addmulticty = this.fb.group({
      addmulti: this.fb.array([this.createMultiCityGroup()])
    });
  }

  get addmulti(): FormArray {
    return this.addmulticty.get('addmulti') as FormArray;
  }

  createMultiCityGroup(): FormGroup {
    return this.fb.group({
      multicityarrival: [''],
      multicitydepature: [''],
      multireturnDate: ['']
    });
  }

  addCity(index: number): void {
    this.addmulti.insert(index + 1, this.createMultiCityGroup());
  }

  removeCity(index: number): void {
    this.addmulti.removeAt(index);
  }

  reverse(index: number): void {
    const currentGroup = this.addmulti.at(index) as FormGroup;
    const arrivalValue = currentGroup.get('multicityarrival')?.value;
    const departureValue = currentGroup.get('multicitydepature')?.value;

    currentGroup.patchValue({
      multicityarrival: departureValue,
      multicitydepature: arrivalValue
    });
  }

}
