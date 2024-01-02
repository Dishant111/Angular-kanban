import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanbangrid',
  templateUrl: './kanbangrid.component.html',
  styleUrls: ['./kanbangrid.component.css']
})
export class KanbangridComponent implements OnInit {

   kanbanGrid : KanbanGrid[] = []
   currentkanaban : KanbanGrid|null =null 
   currentSerise : string|null=null 
  ngOnInit(): void {
    let ser1 : KanbanGrid =  {
      title: "todo",
      series:["task 1"," task 2"]
    };
    let ser2 : KanbanGrid =  {
      title: "doing",
      series:["doing 1"," doing 2"]
    };
    let ser3 : KanbanGrid =  {
      title: "done",
      series:["done 1","done 2"]
    };

    this.kanbanGrid.push(ser1)
    this.kanbanGrid.push(ser2)
    this.kanbanGrid.push(ser3) 
  }
  onDragStart(kanban: KanbanGrid,series: string) {
    this.currentkanaban = kanban
    this.currentSerise = series 
    console.log(this.kanbanGrid);
  }

  onDrop(kanban: KanbanGrid) {
    if(this.currentSerise)
    { 
      kanban.series.push(this.currentSerise)
      if (this.currentkanaban) this.currentkanaban.series = this.currentkanaban?.series.filter(x=>x !== this.currentSerise) 
    }
    this.currentSerise = null
    this.currentkanaban = null
  }

  onDragOver($event: DragEvent) {
    $event.preventDefault()
  }
}

export interface KanbanGrid {
 title:string,
 series:string[]
}
