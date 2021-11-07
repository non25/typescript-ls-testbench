import style from './style.module.css';
import type { TestType } from './component.svelte';

const a: TestType = '2';
console.log(a);

// test css errors
style.class2
style.someOtherClass
