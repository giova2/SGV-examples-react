import BasicSVG from './SVGs/Basic'
import ChristmasBall from './SVGs/ChristmasBall';
import ChristmasTree from './SVGs/ChristmasTree';
import House from './SVGs/House';
import GingerBread from './SVGs/GingerBread';
import SnowFlake from './SVGs/SnowFlake';
import Forest from './SVGs/Forest';
import ForestSnowing from './SVGs/ForestSnowing';
import BackgroundPattern from './SVGs/BackgroundPattern';
import Interaction from './SVGs/Interaction';
import Clock from './SVGs/Clock';

export enum RoutesEnum{ 
  Basic = 'basic',
  ChistmasBall = 'chistmasball',
  ChistmasTree ='chistmastree',
  House = 'house',
  GingerBread = 'gingerbread',
  SnowFlake = 'snowflake',
  Forest = 'forest',
  ForestSnowing = 'forestsnowing',
  BackgroundPattern = 'backgroundpattern',
  Interaction = 'interaction',
  Clock = 'clock'
}

export const BASIC_ROUTE = RoutesEnum.Basic
export const CHRISTMASBALL_ROUTE = RoutesEnum.ChistmasBall
export const CHRISTMASTREE_ROUTE = RoutesEnum.ChistmasTree
export const HOUSE_ROUTE = RoutesEnum.House
export const GINGERBREAD_ROUTE = RoutesEnum.GingerBread
export const SNOWFLAKE_ROUTE = RoutesEnum.SnowFlake
export const FOREST_ROUTE = RoutesEnum.Forest
export const FORESTSNOWING_ROUTE = RoutesEnum.ForestSnowing
export const BACKGROUNDPATTERN_ROUTE = RoutesEnum.BackgroundPattern
export const INTERACTION_ROUTE = RoutesEnum.Interaction
export const CLOCK_ROUTE = RoutesEnum.Clock

export type RoutesObject = {
  [BASIC_ROUTE]: React.FC,
  [CHRISTMASBALL_ROUTE]: React.FC,
  [CHRISTMASTREE_ROUTE]: React.FC,
  [HOUSE_ROUTE] : React.FC,
  [GINGERBREAD_ROUTE]: React.FC,
  [SNOWFLAKE_ROUTE]: React.FC,
  [FOREST_ROUTE]: React.FC,
  [FORESTSNOWING_ROUTE]: React.FC
  [BACKGROUNDPATTERN_ROUTE]: React.FC,
  [INTERACTION_ROUTE]: React.FC,
  [CLOCK_ROUTE]: React.FC,
}

export const routes: RoutesObject = {
  [RoutesEnum.Basic]: BasicSVG,
  [RoutesEnum.ChistmasBall]: ChristmasBall,
  [RoutesEnum.ChistmasTree]: ChristmasTree,
  [RoutesEnum.House]: House,
  [RoutesEnum.GingerBread]: GingerBread,
  [RoutesEnum.SnowFlake]: SnowFlake,
  [RoutesEnum.Forest]: Forest,
  [RoutesEnum.ForestSnowing]: ForestSnowing,
  [RoutesEnum.BackgroundPattern]: BackgroundPattern,
  [RoutesEnum.Interaction]: Interaction,
  [RoutesEnum.Clock]: Clock
}