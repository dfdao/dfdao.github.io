/**
 * ui types
 */ 

export type GetValueLabel = (a: any) => string;

export type UiElement = 'dropdown' | 'stepper';

export type StepObj = {
    name: string;
    innerText: string;
    min: string;
    max: string;
    step: string;
    getValueLabel: GetValueLabel;
    uiType: UiElement;
  }
export type DropObj = {
    name: string;
    innerText: string;
    size: number;
    getValueLabel: GetValueLabel;
    uiType: UiElement;
  }

export type PluginProperty = {name: string; value: any}

