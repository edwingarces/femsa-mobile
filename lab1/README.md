# Componente Button

## Descripción
El componente `Button` es un botón reutilizable que acepta varias propiedades y puede contener elementos hijos.

## Props

### `onClick`
- **Tipo:** `<T>(value: T) => void`
- **Descripción:** Función que se ejecuta cuando se hace clic en el botón. El valor `T` es genérico y puede ser de cualquier tipo.

### `disabled`
- **Tipo:** `boolean`
- **Descripción:** Indica si el botón está deshabilitado. Si es `true`, el botón no se puede interactuar.

### `children`
- **Tipo:** `React.ReactNode`
- **Descripción:** Elementos hijos que se renderizan dentro del botón.

### `...props`
- **Tipo:** `React.ButtonHTMLAttributes<HTMLButtonElement>`
- **Descripción:** Cualquier otra propiedad HTML estándar para un elemento `<button>`.

## Ejemplo de uso

```tsx
import React from 'react';
import Button from './Button';

const App = () => {
  const handleClick = (value: string) => {
    console.log(value);
  };

  return (
    <Button onClick={() => handleClick('Button clicked')} disabled={false}>
      Click Me
    </Button>
  );
};

export default App;
```

# Componente InputField

## Descripción
El componente `InputField` es un campo de entrada reutilizable que acepta varias propiedades y puede validar el valor de entrada basado en su tipo.

## Props

### `type`
- **Tipo:** `keyof ValueType`
- **Descripción:** Tipo de entrada que puede ser `number`, `text` o `radio`.

### `...props`
- **Tipo:** `React.InputHTMLAttributes<HTMLInputElement>`
- **Descripción:** Cualquier otra propiedad HTML estándar para un elemento `<input>`.

## Funciones

### `validateValue`
- **Descripción:** Función que valida el valor de entrada basado en su tipo.
- **Parámetros:**
  - `value: ValueType`: El valor a validar.
  - `type: Type`: El tipo de valor esperado.
- **Retorno:** El valor validado si coincide con el tipo, de lo contrario `null`.

## Ejemplo de uso

```tsx
import React from 'react';
import InputField from './InputField';

const App = () => {
  return (
    <div>
      <InputField type="text" placeholder="Enter text" />
      <InputField type="number" placeholder="Enter number" />
      <InputField type="radio" />
    </div>
  );
};

export default App;
```

# Componente List

## Descripción
El componente `List` es una lista reutilizable que acepta un array de elementos y puede filtrar para mostrar solo cadenas de texto si se especifica.

## Props

### `items`
- **Tipo:** `readonly Item[]`
- **Descripción:** Array de elementos que pueden ser de tipo `string` o `number`.

### `onlyStrings`
- **Tipo:** `boolean`
- **Descripción:** Propiedad opcional que, si se establece en `true`, filtra la lista para mostrar solo elementos de tipo `string`.

## Ejemplo de uso

```tsx
import React from 'react';
import List from './List';

const App = () => {
  const items = [1, 'two', 3, 'four'];

  return (
    <div>
      <h1>Lista completa</h1>
      <List items={items} />

      <h1>Solo cadenas</h1>
      <List items={items} onlyStrings={true} />
    </div>
  );
};

export default App;
```

### Funciones Internas
## `isString`
- **Descripción:** Función de tipo guard que verifica si un valor es una cadena de texto.
- **Parámetros:**
  - `value: Item`: El valor a verificar.
- **Retorno:** `true` si el valor es una cadena de texto, de lo contrario `false`.
## `renderItem`
- **Descripción:** Función que renderiza un elemento de la lista.
- **Parámetros:**
  - `item: Item`: El elemento a renderizar.
  - `index: number`: El índice del elemento en la lista.
- **Retorno:** Un elemento `<li>` con el contenido del `item`.
