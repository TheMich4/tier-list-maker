// TODO: Add new badge if created in last 24 hours
// TODO: Add updated badge if updated in last 24 hours
// TODO: Add description
// TODO: Add created by
// TODO: Add image

import Image from "next/image";

const TemplateCard = ({ template }) => {
  return (
    <div className="card h-[350px] w-[300px] transform cursor-pointer bg-base-100 shadow-xl shadow-base-200/50 transition duration-500 hover:scale-105">
      <figure>
        <Image
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
          width={300}
          height={200}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {template.name}
          {/* <div className="badge-secondary badge">NEW</div> */}
        </h2>
        <p>{template.description}</p>

        {/* TODO: Add tags */}
        {/* <div className="card-actions justify-end">
          <div className="badge-outline badge">Fashion</div>
          <div className="badge-outline badge">Products</div>
        </div> */}
      </div>
    </div>
  );
};

export default TemplateCard;
