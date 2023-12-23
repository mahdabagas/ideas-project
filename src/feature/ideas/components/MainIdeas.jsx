import qs from "qs";
import { useEffect, useState } from "react";
import { getAllIdeas } from "../services/ideas";
import Card from "../../../components/card/Card";
import Dropdown from "../../../components/dropdown/Dropdown";
import { useNavigate } from "react-router-dom";
import Pagination from "../../../components/pagination/Pagination";
import { Loading } from "../../../components/loader/Loading";

const MainIdeas = () => {
  const [ideas, setIdeas] = useState([]);
  const [params, setparams] = useState({
    number: 1,
    size: 10,
    append: "small_image",
    sort: "published_at",
  });
  const navigate = useNavigate();
  const [page, setPage] = useState({
    number: 0,
    active: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);

  useEffect(() => {
    setError(false);
    setLoading(() => true);
    console.log(params);
    const getAllDataIdeas = async () => {
      const result = await getAllIdeas(params);
      if (result?.response?.data) {
        setTimeout(() => {
          setError(true);
          setLoading(() => false);
        }, 1000);
        console.log(result);

        return;
      }
      console.log(result);

      setIdeas(result.data);
      setPage((prev) => ({ ...prev, number: result.data?.meta?.last_page }));
      setPage((prev) => ({ ...prev, active: result.data?.meta?.current_page }));

      navigate(
        `?${qs.stringify(
          {
            "page[number]": params.number,
            "page[size]": params.size,
            append: params.append,
            sort: params.sort,
          },
          {
            delimiter: "&",
            arrayFormat: "repeat",
            encode: true,
          }
        )}`
      );

      setTimeout(() => {
        setLoading(() => false);
      }, 1000);
    };
    getAllDataIdeas();
  }, [params, navigate]);

  useEffect(() => {
    const paramsUrl = qs.parse(window.location.search, {
      ignoreQueryPrefix: true,
    });

    if (Object.keys(paramsUrl).length === 0) return;

    console.log(paramsUrl);
    setparams({
      number: paramsUrl?.page?.number,
      size: paramsUrl?.page?.size,
      append: paramsUrl?.append,
      sort: paramsUrl?.sort,
    });
  }, []);

  const ChangePerPage = (size) => {
    setparams((prev) => ({ ...prev, size }));
  };

  const changeSortBy = (sort) => {
    console.log(sort);
    setparams((prev) => ({ ...prev, sort: sort }));
  };

  return (
    <section className="px-24 mt-10">
      {!loading ? (
        !error ? (
          <>
            <div className="flex justify-between items-center">
              <p>{`Showing ${ideas?.meta?.from} - ${ideas?.meta?.to} of ${ideas?.meta?.total}`}</p>

              <div className="flex gap-6 items-center">
                <div className="flex gap-2 items-center">
                  <p>Show per page</p>
                  <Dropdown
                    items={[10, 20, 50]}
                    activeItem={params.size}
                    changePage={ChangePerPage}
                    shortBy={false}
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <p>Sort by:</p>
                  <Dropdown
                    items={["published_at", "-published_at"]}
                    activeItem={params.sort}
                    changePage={changeSortBy}
                    shortBy={true}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-8 mt-10   ">
              {ideas &&
                ideas?.data?.map((ide) => (
                  <Card
                    key={ide.id}
                    published_at={ide.published_at}
                    title={ide.title}
                    url_image={ide.small_image[0]?.url}
                  />
                ))}
            </div>
          </>
        ) : (
          <div className="flex justify-center text-orange text-2xl font-medium">
            Gagal mengambil data
          </div>
        )
      ) : (
        <div className="flex justify-center flex-col gap-2 items-center  mb-20">
          <Loading />
        </div>
      )}
      <div className={loading || error ? "hidden" : "block"}>
        <Pagination setParams={setparams} pageCount={page.number} />
      </div>
    </section>
  );
};

export default MainIdeas;
