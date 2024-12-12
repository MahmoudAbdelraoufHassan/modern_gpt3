import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesComponent } from './features/features.component';
import { BlogComponent } from './blog/blog.component';
import { PossibilityComponent } from './possibility/possibility.component';
import { WhatGPT3Component } from './what-gpt3/what-gpt3.component';
import { FeatureComponent } from '../components/feature/feature.component';
import { ArticleComponent } from '../components/article/article.component';
import { IntersectionDirective } from '../directives/intersection.directive';

const components = [
    HeaderComponent,
    FooterComponent,
    FeaturesComponent,
    BlogComponent,
    PossibilityComponent,
    WhatGPT3Component
  ]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    FeatureComponent,
    NgOptimizedImage,
    ArticleComponent,
    IntersectionDirective
  ],
  exports : [
    ...components
  ]
})
export class ContainersModule { }
