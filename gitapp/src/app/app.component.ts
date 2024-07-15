import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApidemoService } from './services/apidemo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title = 'gitapp';
   item:any='';
  constructor(private service:ApidemoService){}
  ngOnInit(): void {
      this.service.get().subscribe((r)=>{
        
        this.item=r;
      })
  }
}
