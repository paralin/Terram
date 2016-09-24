import { IFrontendComponentFactory } from '../../engine';
import { TransformComponent } from './transform';

export const TERRAM_COMPONENTS: { [id: number]: IFrontendComponentFactory } = {
  1: TransformComponent,
};
