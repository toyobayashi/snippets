declare namespace oidUtil {
  export function generate (time?: number): string;
  export function validate (id: string): boolean;
  export function reset (): void;
}
