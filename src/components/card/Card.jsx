import { dateFormater } from "../../utils/dateFromater";

const Card = ({ title, published_at, url_image }) => {
  return (
    <>
      <div className="w-full h-96 shadow-lg bg-slate-400 rounded-lg max-w-sm overflow-hidden hover:shadow-orange duration-700 group ">
        <div className="w-full h-3/5 relative overflow-hidden">
          <img
            src={url_image}
            alt="working-1"
            className="w-full h-full object-cover object-center group-hover:scale-110 duration-500"
          />
        </div>
        <div className="p-6">
          <p className="text-sm">{dateFormater(published_at)}</p>
          <p
            className="font-bold text-lg"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
