"use client";

import React from "react";
import Input from "../form/Input";
import useTagInput from "../../hook/useTagInput";
import { TagField } from "../form/TagField";
import Button from "../Button";

const Create = ({ close }: { close: () => void }) => {
  const MAX_TAGS = 5;

  //Retrieve all the returned items from the hook
  const { tags, handleAddTag, handleRemoveTag } = useTagInput(MAX_TAGS); // pass the maximum tags

  // Handle form submission
  const handleSubmit = () => {
    // Send tags to the backend
    console.log(tags);
    close();
  };

  return (
    <div className="fixed z-10 bg-black/30 flex justify-center items-center inset-0">
      <div className="max-w-[350px] w-full py-10 bg-white-1 rounded-lg px-2 flex flex-col gap-3">
        <Input label="Judul" placeholder="Masukan judul" />
        <label htmlFor="tags" className="flex flex-col gap-2">
          <span>Tag</span>
          <textarea
            name="description"
            id=""
            placeholder="Masukan deskripsi"
            className="w-full border border-grey-2 rounded-md px-3 py-1 text-sm"
          ></textarea>
        </label>

        <label htmlFor="tags" className="flex flex-col gap-2">
          <span>Tag</span>
          <TagField
            tags={tags}
            addTag={handleAddTag}
            removeTag={handleRemoveTag}
            maxTags={MAX_TAGS}
          />
        </label>
        <Input label="Gambar" placeholder="" type="file" />
        <label
          htmlFor="tags"
          className="flex flex-col gap-2 justify-start items-start"
        >
          <span>Trending</span>
          <input type="checkbox" />
        </label>
        <div className="grid grid-cols-2 gap-2">
          <Button
            className="flex bg-red-400 justify-center items-center text-sm py-1 text-white-1 rounded-md"
            onClick={close}
          >
            Close
          </Button>
          <Button
            className="flex bg-emerald-400 justify-center items-center text-sm py-1 text-white-1 rounded-md"
            onClick={handleSubmit}
          >
            Simpan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Create;
