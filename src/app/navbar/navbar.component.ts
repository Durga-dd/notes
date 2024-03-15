import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NotesComponent } from '../notes/notes.component';
import { NotesServiceService } from '../notes-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  id: string | undefined;
  title: string | undefined;
  description: string | undefined;
  noteservice = inject(NotesServiceService);

  private breakpointObserver = inject(BreakpointObserver);
  constructor(public dialog: MatDialog) {}
  notelist: any = [];

  ngOnInit() {
    this.noteservice.getNotes().subscribe((data) => {
      if (data) this.notelist = data;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NotesComponent, {
      width: '500px',
      data: { id: this.notelist.length + 1, title: this.title },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.noteservice.addNotes(result).subscribe({
          next: (data: any) => {
            console.log('Data', data);
            this.notelist.push(data);
          },
          error: (err) => {
            console.log(Error);
          },
        });
      }
    });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
