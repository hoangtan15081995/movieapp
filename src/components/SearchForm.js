import React from "react";
import { useForm } from "react-hook-form";

export default function SearchForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data.search);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("search")} />
      <input type="submit" />
    </form>
  );
}
