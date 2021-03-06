import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-modal';

import { NaturalLanguageModule } from '../natural-language/natural-language.module';
import { DrawingBoardModule } from '../drawing-board/drawing-board.module';

import { MachineStacksComponent } from './machine-stacks.component';

@NgModule ({
    imports: [
        CommonModule,
        DrawingBoardModule,
        ModalModule,
        NaturalLanguageModule
    ],
    declarations: [
        MachineStacksComponent
    ],
    exports: [
        MachineStacksComponent
    ]
})

export class MachineStacksModule {}
