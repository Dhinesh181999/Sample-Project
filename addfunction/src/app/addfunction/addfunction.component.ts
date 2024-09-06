import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

import { trigger, state, style, transition, animate } from '@angular/animations';

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', description: 'Hydrogen is a chemical element with symbol H and atomic number 1.'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', description: 'Helium is a chemical element with symbol He and atomic number 2.'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', description: 'Lithium is a chemical element with symbol Li and atomic number 3.'},
  // Add more elements as needed
];
@Component({
  selector: 'app-addfunction',
  templateUrl: './addfunction.component.html',
  styleUrls: ['./addfunction.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
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



  //other table
  displayedColumns: string[] = ['position', 'name', 'expand'];
  innerDisplayedColumns: string[] = ['innerPosition', 'innerName'];

  outerDataSource = new MatTableDataSource([
    { position: 1, name: 'Element 1' },
    { position: 2, name: 'Element 2' },
    { position: 3, name: 'Element 3' }
  ]);

  innerDataSource = {
    1: new MatTableDataSource([{ innerPosition: '1.1', innerName: 'Inner Element 1' }]),
    2: new MatTableDataSource([{ innerPosition: '2.1', innerName: 'Inner Element 2' }]),
    3: new MatTableDataSource([{ innerPosition: '3.1', innerName: 'Inner Element 3' }]),
  };

  expandedElement: any | null;

  toggleRow(element: any) {
    this.expandedElement = this.expandedElement === element ? null : element;
  }

  isExpansionDetailRow = (i: number, row: any) => row.hasOwnProperty('detailRow');

}
