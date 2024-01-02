import { KanbanGrid } from './../kanbangrid/kanbangrid.component';
import { Component, Input, OnInit, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.css']
})
export class EditPopupComponent implements OnInit{
  modal = inject(NgbActiveModal);
  
  @Input() public kanbanGrid:KanbanGrid|null= null;
  
  ngOnInit(): void {
  }
}
