import Image from "next/image";
import { FaStar } from "react-icons/fa";

function Reviews() {

  return (
    <>
        <div className="mb-10">
          <h3 className="text-2xl my-5 font-normal text-[#404145] ">Reviews</h3>
          <div className="flex gap-3 mb-5">
            <h5>Reviews for this Project</h5>
            <div className="flex text-yellow-500 items-center gap-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`cursor-pointer ${
                      Math.ceil() >= star
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span>3</span>
            </div>
          </div>
          <div className="flex flex-col gap-6">
              <div className="flex gap-3 border-t pt-6">
                <div>
                    <Image
                      src="/img_rectangle_27_94x96.png"
                      alt="Profile"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                </div>
                <div className="flex flex-col gap-2">
                  <h4>Reviewer N</h4>
                  <div className="flex text-yellow-500 items-center gap-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                          key={star}
                          className={`cursor-pointer ${
                            Math.ceil() >= star
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span>4</span>
                  </div>
                  <p className="text-[#404145] pr-20">He is too pro.</p>
                </div>
              </div>
          </div>
        </div>
    </>
  );
}

export default Reviews;
