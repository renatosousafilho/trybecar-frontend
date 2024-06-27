import { Waypoint } from './Waypoint';

export type Travel = {
  origin: string;
  destination: string;
  waypoints: Waypoint[];
}