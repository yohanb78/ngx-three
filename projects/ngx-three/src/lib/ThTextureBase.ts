import { Component } from '@angular/core';
import { Texture } from 'three';
import { ThWrapperBase } from './ThWrapperBase';
@Component({
  selector: 'th-abs-texture',
  template: ''
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThTextureBase<T extends Texture, ARGS> extends ThWrapperBase<T, ARGS> {}
