import React, { useState, useEffect } from "react";
import { Category, CategorySkeleton } from "../Category";
import { Item, List } from "./styles";

const API = "https://masc-gram-server.vercel.app/categories";

const useCategoriesDate = () => {
  const [categories, setcategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchCategories = async () => {
      const res = await fetch(API);
      const data = await res.json();
      setcategories(data);
      setLoading(false);
    };
    fetchCategories();
  }, []);
  return { categories, loading };
};

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesDate();

  const [showFixed, setShowFixed] = useState(false);
  useEffect(() => {
    const onScroll = (e) => {
      const newShowfixed = window.scrollY > 300;
      showFixed != newShowfixed && setShowFixed(newShowfixed);
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll); // limpiar el efecto cada vez que se ejecute
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading ? (
        <>
          <CategorySkeleton />
          <CategorySkeleton />
          <CategorySkeleton />
          <CategorySkeleton />
          <CategorySkeleton />
          <CategorySkeleton />
        </>
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category key={category.id} {...category} />
          </Item>
        ))
      )}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
