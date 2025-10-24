import Rectangle from "src/assets/blog/Rectangle.svg";

export default function BlogDetailComments() {
  return (
    <>
      <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em] mt-[6.625em]">
        <div className="flex items-center gap-[0.5em]">
          <img src={Rectangle} alt="" />
          <p className="text-[#E4C620] font-inter text-[0.875rem] font-semibold uppercase">
            Comments
          </p>
        </div>

        <p className="text-[#FFF4E2] font-literata text-[3.25rem] font-medium">
          Leave a Reply
        </p>

        <p className="text-[#90A3B1] font-inter text-[1rem] font-normal mt-[0.5em]">
          Your email address will not be published. Required fields are marked *
        </p>
      </div>
    </>
  );
}
