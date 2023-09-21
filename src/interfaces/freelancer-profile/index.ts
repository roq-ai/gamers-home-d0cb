import { GetQueryInterface } from 'interfaces';

export interface FreelancerProfileInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  email: string;
  firstname: string;
  lastname: string;
  address?: string;
  age: string;
  city: string;
  country: string;
  gamingexp: string;
  gamingplat: string;
  gamingenre: string;
  streaminplat?: string;
  streamingfrq?: string;
  culbg: string;
  lang: string;

  _count?: {};
}

export interface FreelancerProfileGetQueryInterface extends GetQueryInterface {
  id?: string;
  email?: string;
  firstname?: string;
  lastname?: string;
  address?: string;
  age?: string;
  city?: string;
  country?: string;
  gamingexp?: string;
  gamingplat?: string;
  gamingenre?: string;
  streaminplat?: string;
  streamingfrq?: string;
  culbg?: string;
  lang?: string;
}
