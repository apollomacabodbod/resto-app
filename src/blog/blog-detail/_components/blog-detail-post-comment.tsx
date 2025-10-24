import commentArrow from "src/assets/blog/comment-arrow.svg";

export default function BlogDetailPostComment() {
  return (
    <>
      <div className="bg-[#FFF4E2] p-[2em] mt-[1.875em]">
        <form className="flex flex-col border border-dashed border-[#E4C620] p-[2em] gap-[1em]">
          <input
            type="text"
            className="px-[1em] pt-[0.75em] pb-[4em] border border-[#90A3B1] outline-none"
            placeholder="Comment"
          />

          <input
            type="text"
            className="px-[1em] py-[0.75em] border border-[#90A3B1] outline-none"
            placeholder="Name"
          />

          <input
            type="text"
            className="px-[1em] py-[0.75em] border border-[#90A3B1] outline-none"
            placeholder="Email address"
          />

          <input
            type="text"
            className="px-[1em] py-[0.75em] border border-[#90A3B1] outline-none"
            placeholder="Website (Optional)"
          />

          <button className="flex items-center self-start bg-[#E4C620] py-[0.75em] px-[1.5em] rounded-[3.125em] gap-[0.5em]">
            <p className="text-[#28252E] font-inter text-[1rem] font-bold">
              Post Comment
            </p>

            <img src={commentArrow} alt="" />
          </button>
        </form>
      </div>
    </>
  );
}
