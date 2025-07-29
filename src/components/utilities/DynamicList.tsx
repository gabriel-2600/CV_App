interface DynamicListProps<T extends { id: string }> {
  list: T[];
  listKey: keyof T;
  handleEdit: (id: string) => void;
}

function DynamicList<T extends { id: string }>({
  list,
  listKey,
  handleEdit,
}: DynamicListProps<T>) {
  return (
    <div className="rounded-md flex flex-col gap-[10px] p-1 mt-6 overflow-auto max-h-40">
      {list.map((listItem) => (
        <button
          className="rounded-md flex justify-center items-centerd p-2 bg-[#1c1c84] text-white font-semibold"
          key={listItem.id}
          id={listItem.id}
          onClick={() => handleEdit(listItem.id)}
        >
          {String(listItem[listKey])}
        </button>
      ))}
    </div>
  );
}

export default DynamicList;
