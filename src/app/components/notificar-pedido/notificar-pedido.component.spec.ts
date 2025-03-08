import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificarPedidoComponent } from './notificar-pedido.component';

describe('NotificarPedidoComponent', () => {
  let component: NotificarPedidoComponent;
  let fixture: ComponentFixture<NotificarPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificarPedidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
