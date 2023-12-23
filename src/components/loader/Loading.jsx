import ReactLoading from "react-loading";

export const Loading = () => {
  return (
    <>
      <div>
        <ReactLoading type="spin" width={64} height={64} color="#FF5A00" />
      </div>
    </>
  );
};
