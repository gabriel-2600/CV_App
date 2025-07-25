interface DisplayListProps<Type> {
  list: (Type & { id: string })[];
  listKeys: (keyof Type)[];
}

function DisplayList<Type>({ list, listKeys }: DisplayListProps<Type>) {
  return (
    <div>
      {list.map((listItem) => (
        <div key={listItem.id}>
          {listKeys.map((keyItem) => (
            <div key={String(keyItem)}>{String(listItem[keyItem])}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DisplayList;
