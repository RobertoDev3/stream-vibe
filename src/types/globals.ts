export type ApiProps = {
  scrollPrev: () => void;
  scrollNext: () => void;
  selectedScrollSnap: () => number;
  scrollSnapList: () => number[];
  on: (event: string, callback: () => void) => void;
  off: (event: string, callback: () => void) => void;
};
