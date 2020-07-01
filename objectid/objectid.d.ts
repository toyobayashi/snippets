declare namespace oidUtil {
  export function generate (time?: number): string;
  export function isValid (id: string): boolean;
  export function reset (): void;
}
