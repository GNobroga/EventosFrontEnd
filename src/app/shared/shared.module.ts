import { NgModule } from "@angular/core";
import { TitleComponent } from './title/title.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    TitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent
  ]
})
export class SharedModule {}
