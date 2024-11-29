import { Button, Col, Form, Row } from "antd";
import React, { useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { useAddNewProduct } from "../../../Hooks";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardLayout from "../../Components/DashboardLayout/DashboardLayout";
import AntSelectC from "../../Components/Forms/AntSelect/AntSelectC";
import AntInputC from "../../Components/Forms/AntInput/AntInputC";
import FormDate from "../../../DyComponents/Forms/FormDate";

type FieldType = {
  title: string;
  price: number;
  discount: number;
  category: string;
  description: string;
};

export type ToastFn = () => void;
const NewProductForm = () => {
  const delivery = [
    { label: "پست", value: "post" },
    { label: "تیپاکس", value: "tpox" },
    { label: "اسنپ", value: "snap" },
  ];
  const categoryes = [
    { value: "cloth", label: "لباس" },
    { value: "glass", label: "عینک" },
    { value: "watch", label: "ساعت" },
    { value: "dress", label: "لباس زنانه" },
    { value: "ornaments", label: " زیورآلات" },
  ];
  /*================== Toast =================*/
  const notify = () => {
    toast.success("با موفقیت انجام شد!", {
      position: "bottom-right",
    });
  };

  /*================== UploadImage =================*/

  const [Image, setImage] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const uploadImage = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      const objectUrl = URL.createObjectURL(file);
      setImage(objectUrl);
    }
  };
  /*================== Submit Form =================*/
  const { mutate } = useAddNewProduct(notify);
  const { register, handleSubmit } = useForm<FieldType>({});
  const onSubmit: SubmitHandler<FieldType> = (data) => {
    const formData = new FormData();
    const reader = new FileReader();
    formData.append("title", data.title);
    formData.append("price", data.price.toString());
    formData.append("description", data.description);
    formData.append("category", data.category);
    if (file) {
      reader.readAsDataURL(file);
      formData.append("src", file);
    }
    mutate(formData);
  };

  return (
    <DashboardLayout>
      <form
        className="p-4 w-2/3"
        //onSubmit={handleSubmit(onSubmit)}
      >
        <Row gutter={[8, 8]} className="my-8">
          <Col xs={24} lg={8}>
            {" "}
            <AntInputC
              inpType="input"
              name="title"
              placeholder="عنوان"
              type="string"
            />
          </Col>
          <Col xs={24} lg={8} className="flex">
            <AntSelectC options={delivery} placeholder="نوع ارسال" />
          </Col>
          <Col xs={24} lg={8}>
            <AntSelectC options={categoryes} placeholder="دسته بندی" />
          </Col>
          <Col xs={24} lg={12}>
            <AntInputC
              inpType="input"
              name="price"
              placeholder="قیمت"
              type="number"
            />
          </Col>
          <Col xs={24} lg={12}>
            <AntInputC
              inpType="input"
              name="discount"
              placeholder="تخفیف"
              type="number"
            />
          </Col>

          <Col xs={24} lg={24}>
            <AntInputC
              inpType="textera"
              name="description"
              placeholder="توضیحات"
              type="string"
              maxLength={100}
            />
          </Col>
          <Col xs={24} lg={8}>
            <AntInputC
              inpType="input"
              name="creat"
              placeholder="محل تولید"
              type="string"
            />
          </Col>
          <Col xs={24} lg={8}>
            <FormDate placeholder="تاریخ تولید" />
          </Col>
          <Col xs={24} lg={8}>
            <FormDate placeholder="تاریخ انقضا" />
          </Col>
          <Col xs={24} lg={8}>
            <AntInputC
              inpType="input"
              name="creat"
              placeholder="وزن"
              type="string"
            />
          </Col>
          <Col xs={24} lg={8}>
            <AntInputC
              inpType="input"
              name="creat"
              placeholder="طول"
              type="string"
            />
          </Col>
          <Col xs={24} lg={8}>
            <AntInputC
              inpType="input"
              name="creat"
              placeholder="عرض"
              type="string"
            />
          </Col>
          <Col xs={24} lg={8}>
            <AntInputC
              inpType="input"
              name="creat"
              placeholder="سایز"
              type="string"
            />
          </Col>
          <Col xs={24} lg={8}>
            <AntInputC
              inpType="input"
              name="creat"
              placeholder="تعداد"
              type="number"
            />
          </Col>
          {/* <Col xs={24} lg={24}>
            <div className="w-full border-2 rounded-lg p-4 h-[calc(100vh-60vh)]">
              {Image ? (
                <img
                  className="w-2/3 mx-auto h-full object-contain "
                  src={Image}
                  alt="product"
                />
              ) : (
                <div className="file">
                  <label htmlFor="input-file">
                    <FaUpload
                      size={24}
                      className="absolute hover:cursor-pointer top-[49%] left-[56%] translate-x-[-50%] translate-y-[-50%]"
                    />
                    <span className="absolute text-lg hover:cursor-pointer top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                      {" "}
                      آپلود عکس
                    </span>
                  </label>

                  <input
                    id="input-file"
                    type="file"
                    className="hidden"
                    onChange={uploadImage}
                  />
                </div>
              )}
            </div>
          </Col> */}
          <Col xs={24} md={24} className="my-4">
            <Button className="py-5 px-10 text-xl bg-blue-700 text-white me-4" htmlType="submit">
              ذخیره{" "}
            </Button>
            <Button className="py-5 px-10 text-xl bg-green-700 text-white me-4" htmlType="submit">
                بایگانی
            </Button>
            <Button className="py-5 px-10 text-lg bg-red-700 text-white" htmlType="submit">
               لغو 
            </Button>
          </Col>
        </Row>
        <ToastContainer rtl />
      </form>
    </DashboardLayout>
  );
};

export default NewProductForm;
