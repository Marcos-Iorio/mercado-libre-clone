import { MainFeatures } from "../../types";

interface Attributes {
  attributes: MainFeatures[] | undefined;
}

const Attributes = (props: Attributes) => {
  return (
    <section className="flex flex-col gap-3 my-3">
      <h3 className="font-medium text-sm">
        Lo que tenés que saber de este producto
      </h3>
      <ul>
        {props.attributes?.map((attr, index) => {
          return (
            <li
              key={index}
              className="text-sm mb-2 relative ml-4 before:content-[''] before:w-[3.5px] before:h-[3.5px] before:bg-black before:rounded-full before:absolute before:top-[9px] before:left-[-15px]"
            >
              {attr.text}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Attributes;
