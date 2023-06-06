# Quality metrics for Javascript/Typescript

## Installation

`npm install @modular-rocks/metrics`

or 

`yarn add @modular-rocks/metrics` 


## Metrics 

There are currently 8 metrics:

- [Cyclomatic](https://en.wikipedia.org/wiki/Cyclomatic_complexity)
- [Total Cyclomatic Complexity](https://softwareengineering.stackexchange.com/questions/101830/what-does-the-cyclomatic-complexity-of-my-code-mean)
- [Maintainability](https://sourcery.ai/blog/maintainability-index/)
- Import Coupling
- Identifier Coupling
- [Halstead](https://en.wikipedia.org/wiki/Halstead_complexity_measures)
- [LOC](https://en.wikipedia.org/wiki/Source_lines_of_code)
- [LCOM](https://en.wikipedia.org/wiki/Cohesion_(computer_science))*

*LCOM is not directly adaptable to functional Javascript because LCOM compares identifiers in methods in classes. So this LCOM method is a custom adaption that accounts for modern Javascript usage.

## Usage

Each metric accepts an `Options` argument containing configuration options. Either one of two options are required, `code` or `ast`. 

`code` is the code string to parse and evaluate. `ast` is an already parsed [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree).

## Examples

Execute the following examples in a node environment (not in a browser).

```
import { cyclomatic, totalCyclomaticComplexity, loc, halstead, maintainability } from "@modular-rocks/metrics"

const opts = {
  code: `
    function calculateAverage(numbers) {
      if (!Array.isArray(numbers)) {
        return 'Invalid input. Please provide an array of numbers.';
      }

      if (numbers.length === 0) {
        return 'Empty array. Please provide an array with at least one number.';
      }

      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }

      const average = sum / numbers.length;
      return average;
    }
  `
}

cyclomatic(opts)
// 7

totalCyclomaticComplexity(opts)
// 4

loc(opts)
// 17 

halstead(opts)
// {
// "bugs": 0.0533612357509481,
// "difficulty": 8.125,
// "effort": 2025.446143672791,
// "length": 49,
// "time": 112.52478575959951,
// "vocabulary": 34,
// "volume": 249.2856792212666,
// }

maintainability(opts)
// 75.59906223945923

```

```

import { lcom, identifierCoupling } from "@modular-rocks/metrics"

const opts = {
  code: `
    // Shared variables
    let sharedVariable = 0;

    function incrementSharedVariable() {
      sharedVariable++;
      console.log('Shared Variable:', sharedVariable);
    }

    // Not shared variables
    function multiplyNumbers(a, b) {
      let result = a * b;
      console.log('Result:', result);
    }

    function addNumbers(a, b) {
      let sum = a + b;
      console.log('Sum:', sum);
    }
  `
}

lcom(opts)
// {  "cohesion": 0.5, "lcom": 2.25 }

identifierCoupling(opts)
// 0.25

```

```

import { importCoupling } from "@modular-rocks/metrics"

const opts = {
  totalModulesCount: 10,
  code: `
    import ModuleA from 'module-a';
    import { FunctionB } from 'module-b';
  `
}

importCoupling(opts)
// 0.003316749585406302

```

## License

To be licensed, either MIT or Apache 2.0. Lets decide.