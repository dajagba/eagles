import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  itemList = [];
  selectedItems = [];
  settings = {};
  requestForm: FormGroup;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<ModalComponent>, private _ngZone: NgZone) {
    this.createForm();
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
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
