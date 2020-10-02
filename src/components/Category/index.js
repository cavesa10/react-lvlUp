import React from "react";
import { Anchor, Image} from "./styles";
import { ContainerCategorySkeleton, CategoryImage, CategoryTitle } from './styles';


const DEFAULT_IMAGE = "https://imgur.com/dJa0Hpl.jpg";

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = "?", name = "cavesa" }) => {
  return (
    <Anchor href={path}>
      <Image src={cover} alt={name} /> {emoji}
    </Anchor>
  );
};

export const CategorySkeleton = props => {
  console.log(props)
  return (
      <ContainerCategorySkeleton>
          <CategoryImage light={props.light} />
          <CategoryTitle light={props.light} />
      </ContainerCategorySkeleton>
  )
}
