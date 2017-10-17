import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogContentComponent } from './blog/blog-content/blog-content.component';
import { BlogBoardComponent } from './blog/blog-board/blog-board.component';
import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { BoardComponent } from './board/board.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent,
        children: [
            { path: '', component: BlogContentComponent },
            { path: 'admin', component: BlogBoardComponent },
            { path: ':id', component: BlogPageComponent }
        ]
    },
    {path: 'board', component: BoardComponent}
];

export const appRoutingProviders: any [] = [];
export const routing = RouterModule.forRoot(routes);
