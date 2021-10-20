import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stud } from './modal';

@Injectable({
  providedIn: 'root'
})
export class StudService {
  studData:Array<Stud> = [];
  constructor(private http:HttpClient) { }
  saveStud(stud:Stud){
    // this.userData.push(user)
    return this.http.post(`https://616a6f7816e7120017fa0f91.mockapi.io/api/v1/admin`,stud)
  }
  getAllStud(){
    return this.http.get<Array<Stud>>(`https://616a6f7816e7120017fa0f91.mockapi.io/api/v1/admin`)
  }
  getStudByID(id:number){
    return this.http.get<Stud>(`https://applicstud.herokuapp.com/studlist/${id}`)
  }

  updateStudById(userId:number,userdata:Stud){
    return this.http.put(`https://616a6f7816e7120017fa0f91.mockapi.io/api/v1/admin/${userId}`,userdata)
  }

  deleteUserById(id?:number){
    return this.http.delete(`https://616a6f7816e7120017fa0f91.mockapi.io/api/v1/admin/${id}`)
  }
}
