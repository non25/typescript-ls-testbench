# Typescript Language Server test case

Run `npm install` or `yarn install` to install packages

Open `src/index.ts` in lsp-compatible editor

If plugins are working you should see following errors:

```
Line 4: Type 'string' is not assignable to type 'number'.
Line 8: Property 'class2' does not exist on type '{ class: string; someOtherClass: string; }'. Did you mean 'class'?
```

If they are not working the erorr is:

```
Line 2: Cannot find module './component.svelte' or its corresponding type declarations.
```
