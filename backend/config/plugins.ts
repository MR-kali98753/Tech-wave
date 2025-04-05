interface Env {
    (key: string): string;
    int: (key: string, defaultValue?: number) => number;
    bool: (key: string, defaultValue?: boolean) => boolean;
  }
  
  export default ({ env }: { env: Env }) => ({
    ckeditor5: {
      enabled: true,
    },
  });
  