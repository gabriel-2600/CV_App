interface DisplayListProps<Type> {
  list: Type[];
  listKeys: string[];
}

function DisplayList<Type>({ list, listKeys }: DisplayListProps<Type>) {
  return (
    <div>
      {list.map((listItem) => (
        <div key={listItem.id}>
          {listKeys.map((keys) => (
            <div key={keys}>{listItem[keys]}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DisplayList;
