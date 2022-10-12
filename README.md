# Real World Testing with Cypress

npm install cypress --save-dev

npx cypress open

![image](https://user-images.githubusercontent.com/45335405/195449749-dcfbdc2b-cb8b-463c-adcf-e507b315d62a.png)

![image](https://user-images.githubusercontent.com/45335405/195449811-ef08e136-8cf9-459f-b805-01e0e4c9ec50.png)

![image](https://user-images.githubusercontent.com/45335405/195449394-f73f037b-ec59-4ffb-b506-3cdc0fd8ead0.png)

TypeScript
Cypress ships with official type declarations for TypeScript. This allows you to write your tests in TypeScript.

Install TypeScript
To use TypeScript with Cypress, you will need TypeScript 3.4+. If you do not already have TypeScript installed as a part of your framework, you will need to install it:

npm install --save-dev typescript

Configure tsconfig.json
We recommend creating a tsconfig.json inside your cypress folder with the following configuration:

{

  "compilerOptions": {
  
    "target": "es5",
    
    "lib": ["es5", "dom"],
    
    "types": ["cypress", "node"]
    
  },
  
  "include": ["**/*.ts"]
  
}

The "types" will tell the TypeScript compiler to only include type definitions from Cypress. This will address instances where the project also uses @types/chai or @types/jquery. Since Chai and jQuery are namespaces (globals), incompatible versions will cause the package manager (yarn or npm) to nest and include multiple definitions and cause conflicts.


![image](https://user-images.githubusercontent.com/45335405/195452067-84d440cb-7bb9-41c4-b515-ed53c928761f.png)

