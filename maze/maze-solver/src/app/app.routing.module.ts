import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { MazeCreatorComponent } from './maze-creator/maze-creator.component';
import { MazeResolverComponent } from './maze-resolver/maze-resolver.component';

const routes: Routes = [
    {path: 'mazecreator', component: MazeCreatorComponent, outlet: 'mazecreator'},
    {path: 'mazeresolver', component: MazeResolverComponent, outlet: 'mazeresolver'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
