import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-[90vh] px-10 ">
      <div className="md:w-1/2 flex justify-center">
        <img src="/images/ZHIYUAN.JPG" alt="Zhiyuan" className="max-w-full h-[600px]" />
      </div>
      <div className="md:w-1/2 pl-10">
        <h1 className="text-5xl font-bold mb-4 text-cosmos">What is Zhiyuan?</h1>
        <p className="text-3xl leading-relaxed text-walnut">
          Zhiyuan Enterprise Group Inc., established on August 25, 2017, is a
          dynamic and forward-thinking stock corporation based in the
          Philippines. With a commitment to excellence, innovation, and
          sustainable growth, we specialize in a diverse range of activities,
          primarily focusing on real estate transactions, business management
          services, and global partnerships.
        </p>
      </div>
    </div>
  );
}
