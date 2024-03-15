import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  id: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
  form: FormGroup | undefined;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<string>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
}
