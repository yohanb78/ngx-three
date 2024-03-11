/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, Type, forwardRef } from '@angular/core';
import { Camera } from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { ThControlBase } from '../ThControlBase';

@Component({
  selector: 'th-pointerLockControls',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThControlBase,
      useExisting: forwardRef(() => ThPointerLockControls),
    },
  ],
})
export class ThPointerLockControls<
  T extends PointerLockControls = PointerLockControls,
  TARGS = [camera: Camera, domElement?: HTMLElement],
> extends ThControlBase<T, TARGS> {
  public getType(): Type<PointerLockControls> {
    return PointerLockControls;
  }

  @Input()
  public set camera(value: Camera) {
    if (this._objRef) {
      this._objRef.camera = value;
    }
  }

  public get camera(): Camera | undefined {
    return this._objRef?.camera;
  }
  @Input()
  public set domElement(value: HTMLElement) {
    if (this._objRef) {
      this._objRef.domElement = value;
    }
  }

  public get domElement(): HTMLElement | undefined {
    return this._objRef?.domElement;
  }
  @Input()
  public set isLocked(value: boolean) {
    if (this._objRef) {
      this._objRef.isLocked = value;
    }
  }

  public get isLocked(): boolean | undefined {
    return this._objRef?.isLocked;
  }
  @Input()
  public set minPolarAngle(value: number) {
    if (this._objRef) {
      this._objRef.minPolarAngle = value;
    }
  }

  public get minPolarAngle(): number | undefined {
    return this._objRef?.minPolarAngle;
  }
  @Input()
  public set maxPolarAngle(value: number) {
    if (this._objRef) {
      this._objRef.maxPolarAngle = value;
    }
  }

  public get maxPolarAngle(): number | undefined {
    return this._objRef?.maxPolarAngle;
  }
  @Input()
  public set pointerSpeed(value: number) {
    if (this._objRef) {
      this._objRef.pointerSpeed = value;
    }
  }

  public get pointerSpeed(): number | undefined {
    return this._objRef?.pointerSpeed;
  }
}
