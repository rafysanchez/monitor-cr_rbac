import { DialogService } from 'ng2-bootstrap-modal';
import { Component, OnInit } from '@angular/core';
import { ModalComponent, IModal } from 'prodesp-ui';
import { UserService } from '../../service/user.service';

export interface IModalDeletarJustificativas extends IModal {
  UsarJustificativaCAF: boolean;
  UsarJustificativaCAFPublica: boolean;
  text: string;
}

@Component({
  selector: 'app-prodesp-monitor-modal-deletar',
  templateUrl: './prodesp-monitor-modal-deletar.component.html',
  styleUrls: ['./prodesp-monitor-modal-deletar.component.css']
})
export class ProdespMonitorModalAcaoBlocoComponent
  extends ModalComponent<IModalDeletarJustificativas>
  implements OnInit, IModalDeletarJustificativas {
  UsarJustificativaCAF: boolean;
  UsarJustificativaCAFPublica: boolean;
  text: string;
  usuarioCAF: boolean;
  ErrorCAF: boolean = null;
  constructor(dialogService: DialogService, private userService: UserService) {
    super(dialogService);
  }

  ngOnInit() {
    this.usuarioCAF = this.userService.getUser().IdJustificador === 2;
  }
  salvar(): void {
    if (this.isValid()) {
      this.result = {
        UsarJustificativaCAF: this.UsarJustificativaCAF,
        UsarJustificativaCAFPublica: this.UsarJustificativaCAFPublica
      };
      this.closeModal();
    }
    this.ErrorCAF = true;
  }
  isValid(): boolean {
    if (!this.usuarioCAF) {
      return true;
    } else {
      return this.UsarJustificativaCAF || this.UsarJustificativaCAFPublica;
    }
  }
}
