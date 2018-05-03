import { Menu } from "./../models/menu";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "menufilter"
})
export class MenuFilterPipe implements PipeTransform {
  transform(items: Menu[], term: string): any {
    if (term) {
      // I am unsure what id is here. did you mean title?
      return items.filter(item => item.Titulo.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) !== -1);
    }
    return items;
  }
}
