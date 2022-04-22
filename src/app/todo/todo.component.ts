import { Component, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input() toDoList: any

  constructor(private done: ElementRef, private renderer: Renderer2) {
    this.toDoList = []
  }

  @HostListener('click') toDoCompleted() {
    const { nativeElement } = this.done
    this.renderer.addClass(nativeElement, 'toDoCompleted')
  }
}
