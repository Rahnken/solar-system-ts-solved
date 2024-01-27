export type Planet = {
  id: string;
  name: string;
  isPlanet: boolean;
  mass: { massValue: number; massExponent: number };
  vol: { volValue: number; volExponent: number };
  gravity: number;
  avgTemp: number;
  moonsCount: number | undefined;
  moons: string[] | undefined;
};
export type Asteroid = {
  name: string;
  discoveryYear: number;
  orbitalPeriod: number;
};
export type TData = { planets: Planet[]; asteroids: Asteroid[] };
