import { trigger, state, style, transition, animate } from '@angular/animations';

export const navbarAnimation = trigger('navbarAnimation', [
  state('collapsed', style({ height: '0px', overflow: 'hidden', opacity: 0 })),
  state('expanded', style({ height: '*', opacity: 1 })),
  transition('collapsed <=> expanded', animate('300ms ease-in-out'))
]);
