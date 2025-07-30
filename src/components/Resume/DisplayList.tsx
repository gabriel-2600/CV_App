interface DisplayListProps<Type> {
  label: string;
  list: (Type & { id: string })[];
  optionalstyle?: string;
  renderItem: (item: Type & { id: string }, index?: number) => React.ReactNode;
}

function DisplayList<Type>({
  label,
  list,
  optionalstyle,
  renderItem,
}: DisplayListProps<Type>) {
  return (
    <div className="pt-[5px]">
      <p className="border-b-1 font-bold py-1 mb-2">{label}</p>
      <div className={optionalstyle}>
        {list.map((listItem, index) => (
          <div className="mb-2" key={listItem.id}>
            {renderItem(listItem, index)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayList;
