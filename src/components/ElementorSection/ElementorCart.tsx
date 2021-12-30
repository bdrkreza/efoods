interface IProps {
  data: {
    name: string;
    img: string;
    title: string;
    id: number;
    buy: string;
  };
}
export default function ElementorCart({ data }: IProps) {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-6 mt-5">
        <div className="row border h-100 elementor-box">
          <div className="col-md-5 col-lg-6 col-sm-6">
            <img src={data.img} className="box-img" alt="" />
          </div>
          <div className="col-md-7 col-lg-6 col-sm-6 d-flex flex-column justify-content-center mt-3">
            <h4 className="text-uppercase">{data.name}</h4>
            <p>{data.title}</p>
            <h6>{data.buy}</h6>
          </div>
        </div>
      </div>
    </>
  );
}
