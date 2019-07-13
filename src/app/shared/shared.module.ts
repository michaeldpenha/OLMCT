import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentfulService } from './services/contentful/contentful.service';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './lib/components/nav-bar/nav-bar.component';
import { CarouselComponent } from './lib/components/carousel/carousel.component';
import { UtilService } from './utils/utilService';
import { CardComponent } from './lib/components/card/card.component';
import { ImageComponent } from './lib/components/image/image.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { MarkedDirective } from './directives/marked.directive';
import { ArticleComponent } from './components/article/article.component';
import { CommunityCardComponent } from './components/community-card/community-card.component';

@NgModule({
  declarations: [HeaderComponent, NavBarComponent, CarouselComponent, CardComponent, ImageComponent, CardListComponent, FooterComponent, MarkedDirective, ArticleComponent, CommunityCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[
    ContentfulService,
    UtilService
  ],
  exports: [HeaderComponent, NavBarComponent, CarouselComponent, CardComponent, ImageComponent,CardListComponent,FooterComponent,MarkedDirective,ArticleComponent,CommunityCardComponent]
})
export class SharedModule { }
