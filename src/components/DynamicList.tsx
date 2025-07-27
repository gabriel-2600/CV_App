interface DynamicListProps<T extends { id: string }> {
  list: T[];
  listKey: keyof T;
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
}

function DynamicList<T extends { id: string }>({
  list,
  listKey,
  handleEdit,
  handleDelete,
}: DynamicListProps<T>) {
  return (
    <div>
      {list.map((listItem) => (
        <div key={listItem.id} id={listItem.id}>
          <p onClick={() => handleEdit(listItem.id)}>
            {String(listItem[listKey])}
          </p>

          <button type="button" onClick={() => handleDelete(listItem.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default DynamicList;
