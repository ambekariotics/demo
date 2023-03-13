import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DrillOp } from '../models/api-models/drillops.model';
import { UpdateEventRequest } from '../models/api-models/update-event-request';
import { AddEventRequest } from '../models/api-models/add-event-request';

@Injectable({
  providedIn: 'root'
})
export class DrillingopsService {

  private baseApiUrl = 'https://localhost:7254/api/DrillPoints';
  
  
  drillops: DrillOp[]=[];
  
  constructor(private httpClient: HttpClient) { }

  getDrillingOps(): Observable<DrillOp[]>{
    return this.httpClient.get<DrillOp[]>(this.baseApiUrl );
  } 
  
  getEventDetail(id: number): Observable<DrillOp> {
    return this.httpClient.get<DrillOp>(this.baseApiUrl +'/' + id);
  }

  updateEvent(id: number, drillOpReq:AddEventRequest):Observable<DrillOp>{
    const updateEventRequest: UpdateEventRequest={ 
      id: drillOpReq.id,     
      startPoint: drillOpReq.startPoint,
      endPoint: drillOpReq.endPoint,
      eventName: drillOpReq.eventName      
    }    
    return this.httpClient.put<DrillOp>(this.baseApiUrl, updateEventRequest);
  }

  
  deleteEvent(id:number):Observable<DrillOp>{
    return this.httpClient.delete<DrillOp>(this.baseApiUrl + "/"+ id);    
  }



  addEvent(drillOpReq:AddEventRequest):Observable<DrillOp>{
    const addEventRequest: AddEventRequest={
      id: drillOpReq.id,
      startPoint: drillOpReq.startPoint,
      endPoint: drillOpReq.endPoint,
      eventName: drillOpReq.eventName  
    };
    return this.httpClient.post<DrillOp>(this.baseApiUrl,addEventRequest);
  }

}
