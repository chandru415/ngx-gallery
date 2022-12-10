import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { SharedModule } from '../../shared/shared.module';
import { GallerizeExampleComponent } from './gallerize-example.component';

@NgModule({
  declarations: [
    GallerizeExampleComponent
  ],
  imports: [
    SharedModule,
    GalleryModule,
    LightboxModule,
    RouterModule.forChild([
      {
        path: '', component: GallerizeExampleComponent
      }
    ])
  ]

})
export class GallerizeExampleModule { }
