import { IFrontendComponentFactory } from '../../engine';
import { TransformComponent } from './transform';
import { SpriteComponent } from './sprite';

export const TERRAM_COMPONENTS: { [id: number]: IFrontendComponentFactory } = {
  1: TransformComponent,
  100: SpriteComponent,
};
