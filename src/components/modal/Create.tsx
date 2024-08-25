"use client";

import React from "react";
import Input from "../form/Input";
import useTagInput from "../../hook/useTagInput";
import { TagField } from "../form/TagField";
import Button from "../Button";
import { addPembaca } from "@/validations/pembaca-validation";
type Data = {
  judul: string | null;
  gambar: File | null;
  deskripsi: string | null;
  tag?: Array<string> | null;
  trending: boolean;
};

const Create = ({ close }: { close: () => void }) => {
  const [isData, setIsData] = React.useState<Data>({} as Data);
  const [errors, setErrors] = React.useState<any>();
  const [failedSaved, setFailedSaved] = React.useState<boolean>(false);
  const MAX_TAGS = 5;

  //Retrieve all the returned items from the hook
  const { tags, handleAddTag, handleRemoveTag } = useTagInput(MAX_TAGS); // pass the maximum tags

  const handleImage = (e: any) => {
    const file = e.target.files[0];
    setIsData((prev) => ({ ...prev, gambar: file }));
  };

  const handleValue = (e: any) => {
    const { name, value } = e.target;
    if (name === "trending") {
      setIsData((prev) => ({ ...prev, [name]: e.target.checked }));
    } else {
      setIsData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("judul", isData.judul ?? "");
    formData.append("deskripsi", isData.deskripsi ?? "");
    if (isData.gambar) {
      formData.append("gambar", isData.gambar);
    }
    formData.append("tag", tags.join(","));
    formData.append("trending", isData.trending ? "true" : "false");

    const validation = await addPembaca(formData);
    if (validation?.error) {
      setErrors(validation);
      return;
    }
    setErrors(undefined);
    const data = await fetch("/api/pembaca", {
      method: "POST",
      body: formData,
    });

    if (!data.ok) {
      // close();
      setFailedSaved(true);
      return;
    }

    console.log("berhasil");
  };

  return (
    <div className="fixed z-10 bg-black/30 flex justify-center items-center inset-0">
      <form
        onSubmit={handleSubmit}
        className="max-w-[350px] w-full py-10 bg-white-1 rounded-lg px-2 flex flex-col gap-3"
      >
        <Input
          label="Judul"
          name="judul"
          placeholder="Masukan judul"
          onChange={handleValue}
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-xs text-red-500 -mt-2">{errors?.error?.judul}</p>
        </div>
        <label htmlFor="tags" className="flex flex-col gap-2">
          <span>Tag</span>
          <textarea
            name="deskripsi"
            id=""
            placeholder="Masukan deskripsi"
            className="w-full border border-grey-2 rounded-md px-3 py-1 text-sm"
            onChange={handleValue}
          ></textarea>
        </label>
        <div aria-live="polite" aria-atomic="true">
          <p className="text-xs text-red-500 -mt-2">
            {errors?.error?.deskripsi}
          </p>
        </div>

        <label htmlFor="tags" className="flex flex-col gap-2">
          <span>Tag</span>
          <TagField
            tags={tags}
            addTag={handleAddTag}
            removeTag={handleRemoveTag}
            maxTags={MAX_TAGS}
          />
        </label>
        <div aria-live="polite" aria-atomic="true">
          <p className="text-xs text-red-500 -mt-2">{errors?.error?.tag}</p>
        </div>
        <Input
          onChange={handleImage}
          label="Gambar"
          name="gambar"
          placeholder=""
          type="file"
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-xs text-red-500 -mt-2">{errors?.error?.gambar}</p>
        </div>
        <label
          htmlFor="tags"
          className="flex flex-col gap-2 justify-start items-start"
        >
          <span>Trending</span>
          <input onChange={handleValue} type="checkbox" name="trending" />
        </label>
        <div className="grid grid-cols-2 gap-2">
          <Button
            type="button"
            className="flex bg-red-400 justify-center items-center text-sm py-1 text-white-1 rounded-md"
            onClick={close}
          >
            Close
          </Button>
          <Button className="flex bg-emerald-400 justify-center items-center text-sm py-1 text-white-1 rounded-md">
            Simpan
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Create;
