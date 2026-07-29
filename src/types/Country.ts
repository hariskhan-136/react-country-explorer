export interface Country {
  cca3: string;

  name: {
    common: string;
  };

  capital?: string[];

  population: number;

  region: string;

  flags: {
    png: string;
    svg: string;
  };
}
