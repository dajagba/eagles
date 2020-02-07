import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  itemList = [];
  selectedItems = [];
  settings = {};
  requestForm: FormGroup;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<ModalComponent>) {
    this.createForm();
  }

  createForm() {
    this.requestForm = this.fb.group({
        skills: [[]]
    });
  }

  ngOnInit() {

    this.itemList = [
      { 'id': 1, 'itemName': 'Angular' },
      { 'id': 2, 'itemName': 'JavaScript' },
      { 'id': 3, 'itemName': 'HTML' },
      { 'id': 4, 'itemName': 'CSS' },
      { 'id': 5, 'itemName': 'ReactJS' },
      { 'id': 6, 'itemName': 'HTML5' }
  ];
  this.selectedItems = [];
  this.settings = {
      text: 'Select Skills',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      addNewItemOnFilter: true,
      classes: 'test'
  };
  }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
}
OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
}
onSelectAll(items: any) {
    console.log(items);
}
onDeSelectAll(items: any) {
    console.log(items);
}

}
