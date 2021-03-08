import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

export class FixtureElementUtils {
  constructor(private debugElement: DebugElement) { }

  getNativeElement<T>(css: string): T {
    return this.debugElement.query(By.css(css)).nativeElement as T;
  }
}
