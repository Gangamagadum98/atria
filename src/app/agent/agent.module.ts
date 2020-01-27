import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentComponent } from './agent/agent.component';
import { AgentRoutingModule } from './agent-routing/agent-routing.module';
import { AgentviewComponent } from './agentview/agentview.component';
import { SidenavModule } from '../sidenav/sidenav.module';



@NgModule({
  declarations: [AgentComponent, AgentviewComponent],
  imports: [
    CommonModule,
    AgentRoutingModule,
    SidenavModule
  ]
})
export class AgentModule { }
