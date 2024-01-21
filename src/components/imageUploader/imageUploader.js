import { useEffect, useRef, useState } from "react";
import styles from "./imageUploader.module.css";
import { setImages } from "../../redux/slicers/imgSlicer";
import { useDispatch } from "react-redux";

export const ImageUploader = (props) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const imageRef = useRef(null);

  const imageUploadSelect = () => {
    imageRef.current.click();
  };

  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    if (selectedImage) {
      reader.readAsDataURL(selectedImage);
    }
  };

  useEffect(() => {
    if (image) {
      dispatch(setImages(image));
    }
  }, [image, dispatch]);

  return (
    <div>
      <div onClick={imageUploadSelect} className={styles.form_newArt__img}>
        {image ? (
          <img
            src={image}
            style={{ height: "100%", width: "100%" }}
            alt="images"
          />
        ) : (
          ""
        )}

        <input
          ref={imageRef}
          style={{ left: "10000px", position: "relative" }}
          onChange={handleImageUpload}
          type="file"
        ></input>

        <div className={styles.form_newArt__img_cover}></div>
      </div>
    </div>
  );
};
