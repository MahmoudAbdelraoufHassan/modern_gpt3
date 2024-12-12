import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CtaComponent } from './cta/cta.component';
import { ArticleComponent } from './article/article.component';
import { FeatureComponent } from './feature/feature.component';
import { BrandComponent } from './brand/brand.component';

const components = [
    NavbarComponent,
    CtaComponent,
    BrandComponent
  ]


@NgModule({
  declarations: components,
  imports: [
    CommonModule
  ],
  exports :[
    ...components
  ]
})
export class ComponentsModule { }
