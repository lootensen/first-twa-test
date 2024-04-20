// custom.d.ts
declare module "*.wasm" {
  const content: any;
  export default content;
}