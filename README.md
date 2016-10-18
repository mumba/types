Interface sharing repo
===

## 1. Create a `.d.ts` file of the interfaces that you would like to share.

Example:
```typescript
export interface Test{
  hello: string;
}
```

## 2. Install in your project using typings
```bash
$ typings install TestModel=github:mumba/types/test.d.ts#master --save
```

## 3. Use in your project
```
import {Test} from 'TestModel';
```
