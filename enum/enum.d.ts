declare type ToEnum<T extends Record<keyof T, T[keyof T]>> = T & {
  [V in Extract<T[keyof T], number>]: {
    [K in keyof T]: T[K] extends V ? K : never;
  }[keyof T];
};

declare function makeEnum<T extends Record<string, string | number>> (obj: T): ToEnum<T>;
