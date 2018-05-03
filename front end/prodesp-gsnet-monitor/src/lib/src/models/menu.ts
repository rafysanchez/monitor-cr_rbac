export class Menu {
    constructor( public Url: string,
    public CdIcon: string,
    public Titulo: string,
    public Menus: Menu[]= [],
    public NrOrdem: number = 0,
    public isOpen: boolean = false) {

    }

}


/* export interface Menu {
    Url: string;
    CdIcon: string;
    Titulo: string;
    Menus: Menu[];
    NrOrdem: number;
    isOpen: boolean;
}
 */