import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DrillOp } from 'src/app/models/api-models/drillops.model';
import { DrillingopsService } from 'src/app/drillingops/drillingops.service';
import { FormsModule, FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})

export class AddEventComponent implements OnInit {
  header = '';
  id: string | null | undefined;
  isNewEvent: boolean | false | undefined;

  drillEvents = [
    { id: 1, name: 'Stuck Pipe' },
    { id: 2, name: 'Mud Loss' },
    { id: 3, name: 'Circulation Loss' }
  ];


  drillEventObj: DrillOp = {
    id: 0,
    startPoint: 0,
    endPoint: 0,
    eventName: ''
  }

  constructor(private fb: FormBuilder, private drillingopsService: DrillingopsService, private readonly route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        this.id = params.get('id');

        if (!this.id) {
          // if the route contains Add > New Event

          this.isNewEvent = true;
          this.header = "Add New Event";

        } else {
          this.isNewEvent = false;
          this.header = "Edit Event";

          //Otherwise Existing Event
          this.drillingopsService.getEventDetail(parseInt(this.id))
            .subscribe(
              (successResponse) => {
                this.drillEventObj = successResponse;
              },
              (errorRespose) => {
                console.log(errorRespose);
              }
            );
        }
      }
    )
  }


  onUpdate(): void {
    this.drillingopsService.updateEvent(this.drillEventObj.id, this.drillEventObj)
      .subscribe(
        (successResponse) => {
          console.log(successResponse);
          this.snackbar.open("Event updated successfully !!!", undefined, {
            duration: 2000
          });
        },
        (errorResponse) => {
          console.log(errorResponse);
          this.snackbar.open("Something Wrong!!!", undefined, {
            duration: 2000
          });
        }
      );
  }

  onAdd() {
    console.log("Form Submitted");
    this.drillingopsService.addEvent(this.drillEventObj)
      .subscribe(
        (successRespose) => {

          this.snackbar.open('Event added successfully !!!', undefined, {
            duration: 2000
          });
          setTimeout(() => {
            this.router.navigateByUrl(`/`);
          }, 2000);

        },
        (errorResopose) => {
          console.log(errorResopose);
        }
      )
  }
}