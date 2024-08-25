"use client";

import React, { useEffect, useRef, useState } from "react";
import Input from "../form/Input";
import useTagInput from "../../hook/useTagInput";
import { TagField } from "../form/TagField";
import Button from "../Button";
import { editPembaca } from "@/validations/pembaca-validation";

type Data = {
  judul: string | null;
  gambar: File | null;
  deskripsi: string | null;
  tag?: Array<string> | null;
  trending: boolean;
};

const Edit = ({ close, id }: { close: () => void; id: number }) => {
  const [isData, setIsData] = React.useState<Data>({} as Data);
  const [errors, setErrors] = React.useState<any>();
  const [failedSaved, setFailedSaved] = React.useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const MAX_TAGS = 10;

  const inputChecked = useRef<HTMLInputElement>(null);

  //Retrieve all the returned items from the hook
  const { tags, handleAddTag, handleRemoveTag, setAddTag } =
    useTagInput(MAX_TAGS);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`/api/pembaca/${id}`);
      const json = await data.json();
      setIsData(json.data);
      setImageUrl(json.data.gambar);
      if (json.data.tag.length > 0) {
        setAddTag(json.data.tag);
      }
      if (json.data.trending) {
        inputChecked.current ? (inputChecked.current.checked = true) : null;
      }
    };
    fetchData();
  }, []);

  const handleImage = (e: any) => {
    const file = e.target.files[0];
    setImageUrl("");
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
    if (isData.gambar && imageUrl === "") {
      formData.append("gambar", isData.gambar);
    }
    formData.append("tag", tags.join(","));
    formData.append("trending", isData.trending ? "true" : "false");

    const validation = await editPembaca(formData);
    if (validation?.error) {
      setErrors(validation);
      return;
    }
    setErrors(undefined);
    const data = await fetch("/api/pembaca/" + id, {
      method: "PATCH",
      body: formData,
    });

    if (!data.ok) {
      // close();
      setFailedSaved(true);
      return;
    }

    close();
  };

  return (
    <div className="fixed z-10 bg-black/10 flex justify-center items-center inset-0">
      <form
        onSubmit={handleSubmit}
        className="max-w-[350px] w-full py-10 bg-white-1 rounded-lg px-10 flex flex-col gap-3"
      >
        <Input
          label="Judul"
          name="judul"
          placeholder="Masukan judul"
          value={isData.judul}
          onChange={handleValue}
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-xs text-red-500 -mt-2">{errors?.error?.judul}</p>
        </div>
        <label htmlFor="tags" className="flex flex-col gap-2">
          <span>Deskripsi</span>
          <textarea
            name="deskripsi"
            id=""
            placeholder="Masukan deskripsi"
            className="w-full border border-grey-2 rounded-md px-3 py-1 text-sm"
            value={isData.deskripsi ?? ""}
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
        {imageUrl && (
          <img
            src={imageUrl}
            alt="preview"
            className="w-full h-[200px] object-cover"
          />
        )}
        <div aria-live="polite" aria-atomic="true">
          <p className="text-xs text-red-500 -mt-2">{errors?.error?.gambar}</p>
        </div>
        <label
          htmlFor="tags"
          className="flex flex-col gap-2 justify-start items-start"
        >
          <span>Trending</span>
          <input
            ref={inputChecked}
            onChange={handleValue}
            type="checkbox"
            name="trending"
          />
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

export default Edit;
