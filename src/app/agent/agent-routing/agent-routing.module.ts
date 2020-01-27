import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AgentComponent } from '../agent/agent.component';
import { AgentviewComponent } from '../agentview/agentview.component';

const routes:Routes=[{path:'',component:AgentComponent},
                    {path:'agentview',component:AgentviewComponent}]




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AgentRoutingModule { }
