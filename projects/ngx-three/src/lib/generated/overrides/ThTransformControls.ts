/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix,  */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Camera, Object3D } from 'three';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
import { ThControlBase } from '../../ThControlBase';
import { ThTransformControlsGen } from '../ThTransformControlsGen';

@Component({
  selector: 'th-transformControls',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThControlBase,
      useExisting: forwardRef(() => ThTransformControls),
    },
  ],
})
export class ThTransformControls<
  T extends TransformControls = TransformControls,
  TARGS = [object: Camera, domElement?: HTMLElement],
> extends ThTransformControlsGen<T, TARGS> {
  public getType(): Type<TransformControls> {
    return TransformControls;
  }

  @Input()
  public set object(value: Object3D | undefined) {
    if (this._objRef) {
      this._objRef.object = value;
      if (value) {
        this._objRef.attach(value);
      } else {
        this._objRef.detach();
      }
    }
  }

  public addToParent(): void {
    if (this._objRef) {
      this.canvas?.scene?.objRef?.add(this._objRef);
    }
  }

  public removeFromParent(): void {
    if (this._objRef) {
      this.canvas?.scene?.objRef?.remove(this._objRef);
    }
  }
}
