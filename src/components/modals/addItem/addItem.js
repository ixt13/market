import { useSelector } from "react-redux";
import styles from "./addItem.module.css";
import { ImageUploader } from "../../imageUploader/imageUploader";
import { useDispatch } from "react-redux";
import { setIsAddItemModal } from "../../../redux/slicers/showModals";
import { useEffect, useState } from "react";
import axios from "axios";
import { setName, setDescription } from "../../../redux/slicers/imgSlicer";
import { API_URL } from "../../../consts/consts";
import getId from "../../../hooks/hooks";
function AddItem() {
  const ismodal = useSelector((state) => state.modal.isAddItemModal);
  const dispatch = useDispatch();
  const userID = localStorage.getItem("userID");
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");

  const itemNameData = useSelector((state) => state.image.name);
  const itemDescriptionData = useSelector((state) => state.image.description);
  const itemImageData = useSelector((state) => state.image.images);

  function createItemApi() {
    let requestBody = { name: itemNameData, description: itemDescriptionData };

    for (let i = 0; i < itemImageData.length; i++) {
      requestBody[`photo${i + 1}`] = itemImageData[i];
    }

    axios
      .patch(`${API_URL}/users/${"657dffd4acb6d93f1e47266b"}/post`, requestBody)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    dispatch(setName(itemName));
  }, [itemName, dispatch]);

  useEffect(() => {
    dispatch(setDescription(itemDescription));
  }, [itemDescription, dispatch]);

  if (!ismodal) {
    return <div></div>;
  }

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          console.log("sss");
          dispatch(setIsAddItemModal(false));
        }
      }}
      className={styles.wrapper}
    >
      <div>
        <div className={styles.modal__block}>
          <div className={styles.modal__content}>
            <h3 className={styles.modal__title}>Новое объявление</h3>
            <div className={styles.modal__btn_close}>
              <div className={styles.modal__btn_close_line}></div>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className={`${styles.modal__form_newArt}`}
              id="formNewArt"
              action="#"
            >
              <div className={styles.form_newArt__block}>
                <label className={styles.label}>Название</label>
                <input
                  onInput={(e) => {
                    setItemName(e.target.value);
                  }}
                  className={styles.form_newArt__input}
                  type="text"
                  id="formName"
                  placeholder="Введите название"
                />
              </div>
              <div className={styles.form_newArt__block}>
                <label>Описание</label>
                <textarea
                  onInput={(e) => {
                    setItemDescription(e.target.value);
                  }}
                  className={styles.form_newArt__area}
                  name="text"
                  id="formArea"
                  cols="auto"
                  rows="10"
                  placeholder="Введите описание"
                ></textarea>
              </div>
              <div className={styles.form_newArt__block}>
                <p className={styles.form_newArt__p}>
                  Фотографии товара<span>не более 5 фотографий</span>
                </p>
                <div className={styles.form_newArt__bar_img}>
                  <ImageUploader />
                  <ImageUploader />
                  <ImageUploader />
                  <ImageUploader />
                  <ImageUploader />
                </div>
              </div>
              <div
                className={`${styles.form_newArt__block} ${styles.block_price}`}
              >
                <label>Цена</label>
                <input
                  className={styles.form_newArt__input_price}
                  type="text"
                  name="price"
                  id="formName"
                />
                <div className={styles.form_newArt__input_price_cover}></div>
              </div>

              <button
                onClick={createItemApi}
                className={`${styles.form_newArt__btn_pub} ${styles.btn_hov02}`}
                id="btnPublish"
              >
                Опубликовать
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddItem;
