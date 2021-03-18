import { DateModel, } from './common.types';

export interface ProfileType extends DateModel {
  firstName?: string;
  lastName?: string;
  educations?: any;
  experiences?: any;
  userId?: string;
}

export interface BackgroundNew {
  firstName? : string;
  lastName?: string;
  educations?: any;
  experiences?: any;
  userId?: string;
}
