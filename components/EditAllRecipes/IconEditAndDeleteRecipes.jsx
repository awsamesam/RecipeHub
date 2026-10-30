import API from "../../utils"
import { FaEdit, FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";
function IconEditAndDeleteRecipes({ item, onDeleteSuccess }) {
  const router = useRouter();
  const handleDelete = async () => {
    if (!item || !item._id) return;
    await API.delete(`/recipe/${item._id}`)
     
      .then((res) => {
        if (onDeleteSuccess) {
          onDeleteSuccess(item._id);
        }
      })
      .catch((error) => {
        const errorMsg =
          error.response?.data?.errors?.[0]?.msg ||
          error.response?.data?.message ||
          "Something went wrong";
      });
  };

  return (
    <>
      <div className="box-actions">
        <FaEdit
          title="تعديل"
          className="action-icon edit-icon"
          onClick={() => {
            router.push(`/EditRecpies/${item._id}`);
          }}
        />
        <FaTrash
          title="حذف"
          className="action-icon delete-icon"
          onClick={handleDelete}
        />
      </div>
    </>
  );
}

export default IconEditAndDeleteRecipes;
