import { IFrontendGameRules } from '@fusebot/goterram';
import * as PIXI from 'pixi.js/bin/pixi.js';

export class TerramGameRules implements IFrontendGameRules {
  constructor(private renderer: PIXI.SystemRenderer) {}
}
