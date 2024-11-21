import React from 'react';

type Item =  string | number;

interface ListProps {
  items: readonly Item[];
  onlyStrings?: boolean;
}

const isString = (value: Item): value is string => typeof value === "string";

const renderItem = (item: Item, index: number) => (
  <li key={`${index}-item`}>{item}</li>
);

const List = ({ items, onlyStrings }: ListProps) => {
  return (
    <ul>
      {onlyStrings ? items
        .filter(isString)
        .map(renderItem) : items.map(renderItem)}
    </ul>
  );
}

export default List;
